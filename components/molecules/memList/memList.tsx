import React, { FC } from "react";
import { Text, FlatList, View } from "react-native";
import Mem from "../../atoms/mem/mem";
import { useQuery } from "@apollo/client";
import { getAllMems } from "../../../memCMS/querries";
import { MemDataTypes, MemsDataType } from "./memList.types";
import { styles } from "./memList.styles";
import { MemProps } from "../../atoms/mem/mem.types";

const MemList: FC = () => {
 
  const { loading, error, data } = useQuery<MemsDataType>(getAllMems);

  const renderItem = ({ item} : MemProps) => <Mem item={item} />;
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
        {data && (
          <FlatList
            data={data.allMems}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        )}
      </View>
    );
  }
};
export default MemList;
