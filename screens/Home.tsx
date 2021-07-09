import React, { FC } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HomeScreen: FC<HomeProps> = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={styles.title}>Hello Matt App</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Regular")}
    >
      <Text style={styles.text}>Go to Regular</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Hot")}
    >
      <Text style={styles.text}>Go to Hot</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    margin: 10,
  },
  title: {
    color: "black",
    padding: 10,
    margin: 10,
    fontSize: 20,
  },
  text: {
    color: 'white',
  },
});
interface HomeProps {
  navigation: any;
}
export default HomeScreen;
