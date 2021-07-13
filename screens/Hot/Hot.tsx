import React, { FC } from "react";
import { Button, Text, View } from "react-native";

const HotScreen: FC<HotScreeenProps> = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Hello from Hot Screen</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);

interface HotScreeenProps {
  navigation: any;
}
export default HotScreen;
