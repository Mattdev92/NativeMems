import React,{FC} from "react";
import { Button, Text, View } from "react-native";

const RegularScreen: FC<RegularScreenProps> = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Hello from Regular Screen</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);
interface RegularScreenProps {
  navigation: any;
}
export default RegularScreen;
