import React, { FC } from "react";
import { Text, FlatList, SafeAreaView, View } from "react-native";
import Mem from "../../atoms/mem/mem";
import { useQuery } from "@apollo/client";
import { getAllMems } from "../../../memCMS/querries";
import { MemsDataType } from "./memList.types";
import { styles } from "./memList.styles";

const MemList: FC = () => {
  const { loading, error, data } = useQuery<MemsDataType>(getAllMems);

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
            renderItem={({item})=><Mem item={item}/>}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    );
  }
};
export default MemList;
