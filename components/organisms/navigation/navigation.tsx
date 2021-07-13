import React, { FC } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "./navigation.styles";
import { NavProps } from "./navigation.types";

const Navigation: FC<NavProps> = ({ navigation }) => {
  return (
    <View style={styles.view}>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Hot")}
      >
        <Text style={styles.text}>Check Redux</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Navigation;
