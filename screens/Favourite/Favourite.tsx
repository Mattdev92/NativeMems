import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import WithNavigation from "../../templates/withNavigation/withNavigation";
import { FavouriteProps } from "./Favourite.types";

const HotScreen: FC<FavouriteProps> = ({ navigation }) => (
  <WithNavigation navigation={navigation}>
    <Text>Favorite MEMs</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </WithNavigation>
);

export default HotScreen;