import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import WithNavigation from "../../templates/withNavigation/withNavigation";
import { HotScreeenProps } from "./Hot.types";

const HotScreen: FC<HotScreeenProps> = ({ navigation }) => (
  <WithNavigation navigation={navigation}>
    <Text>Hot MEMs</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </WithNavigation>
);

export default HotScreen;
