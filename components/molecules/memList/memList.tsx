import React, { FC, useMemo } from "react";
import { Text, FlatList, View } from "react-native";
import Mem from "../../atoms/mem/mem";
import { useQuery } from "@apollo/client";
import { getAllMems } from "../../../memCMS/querries";
import { MemsDataType } from "./memList.types";
import { styles } from "./memList.styles";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { renderItemProps } from "./memList.types";
import { whichListDisplay } from "../../../helpers/helpers";
import { MemListProps } from "./memList.types";

const MemList: FC<MemListProps> = ({ hot, regular }) => {
  const { loading, error, data } = useQuery<MemsDataType>(getAllMems);
  const votes: any = useSelector<RootState>(
    ({ memReducer: { votes } }) => votes
  );

  const memoData = useMemo(() => data, [data]);

  const renderItem = ({ item }: renderItemProps) => (
    <Mem
      item={item}
      upvote={whichListDisplay(votes, hot, regular)[item.title].upvote}
      downvote={whichListDisplay(votes, hot, regular)[item.title].downvote}
    />
  );

  if (loading || error) {
    return (
      <>
        {loading ? (
          <View>
            <Text>Loading....</Text>
          </View>
        ) : (
          <View>
            <Text>Sory for enconvinience. Database is anavailable ! </Text>
          </View>
        )}
      </>
    );
  } else {
    return (
      <View style={styles.mainContainer}>
        {memoData && (
          <FlatList
            data={memoData.allMems.filter(
              (item) =>
                whichListDisplay(votes, hot, regular).hasOwnProperty(item.title)
            )}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        )}
      </View>
    );
  }
};

export default MemList;
