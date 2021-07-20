import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import MemList from "../../components/molecules/memList/memList";
import WithNavigation from "../../templates/withNavigation/withNavigation";
import { RegularScreenProps } from "./Regular.types";

const RegularScreen: FC<RegularScreenProps> = ({ navigation }) => (
  <WithNavigation navigation={navigation}>
    <Text>Regular MEMs</Text>
    <MemList hot={false} regular={true}/>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </WithNavigation>
);

export default RegularScreen;
