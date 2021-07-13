import React from "react";
import { Text, FlatList, SafeAreaView } from "react-native";
import Mem from "../../atoms/mem/mem";
import { DATA } from "../../../helpers/helpers";

const MemList = () => {
  return (
    <SafeAreaView>
      <Text>Hello It's MemList View</Text>
      <FlatList data={DATA} renderItem={Mem} keyExtractor={(item) => item} />
    </SafeAreaView>
  );
};
export default MemList;
