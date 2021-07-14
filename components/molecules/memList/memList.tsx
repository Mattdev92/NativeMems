import React from "react";
import { Text, FlatList, SafeAreaView, View } from "react-native";
import Mem from "../../atoms/mem/mem";
import { DATA } from "../../../helpers/helpers";
import { useQuery } from "@apollo/client";
import { getAllArticles } from "../../../memCMS/querries";
import { ArticlesDataType } from "./memList.types";

const MemList = () => {
  const { loading, error, data } = useQuery<ArticlesDataType>(getAllArticles);
  console.log(data);
  console.log(error);
  if (loading || error) {
    return (
      <>
        {loading ? (
          <View><Text>Loading....</Text></View>
        ) : (
          <View><Text>Sory for enconvinience. Database is anavailable ! </Text></View>
        )}
      </>
    );
  } else {
    return (
      <SafeAreaView>
        <Text>Hello It's MemList View</Text>
        <FlatList
          data={DATA}
          renderItem={Mem}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    );
  }
};
export default MemList;
