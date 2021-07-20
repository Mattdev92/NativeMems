import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import MemList from "../../components/molecules/memList/memList";
import WithNavigation from "../../templates/withNavigation/withNavigation";
import { HotScreeenProps } from "./Hot.types";

const HotScreen: FC<HotScreeenProps> = ({ navigation }) => (
  <WithNavigation navigation={navigation}>
    <Text>Hot MEMs</Text>
    <MemList  hot={true} regular={false}/>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </WithNavigation>
);

export default HotScreen;
