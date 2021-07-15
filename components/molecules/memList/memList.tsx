import React, { FC } from "react";
import { Text, FlatList, SafeAreaView, View } from "react-native";
import Mem from "../../atoms/mem/mem";
import { useQuery } from "@apollo/client";
import { getAllMems } from "../../../memCMS/querries";
import { getAllArticles } from "../../../memCMS/querries";
import { MemsDataType } from "./memList.types";
import { ArticlesDataType } from "./memList.types";

const MemList: FC = () => {
  const { loading, error, data } = useQuery<MemsDataType>(getAllMems,{
    fetchPolicy: "no-cache"
  });
  console.log(error);

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
      <SafeAreaView>
        <Text>Hello It's MemList View</Text>
        {data && (
          <FlatList
            data={data.allMems}
            renderItem={Mem}
            keyExtractor={(item) => item.id}
          />
        )}
      </SafeAreaView>
    );
  }
};
export default MemList;
