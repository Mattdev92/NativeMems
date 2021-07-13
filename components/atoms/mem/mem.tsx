import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./mem.styles";
import { MemProps } from "./mem.types";

const Mem: FC<MemProps> = ({ item }) => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>My first RN Mem</Text>
      </View>
      <Image
        style={styles.image}
        source={require(`../../../assets/2.jpg`)}
      ></Image>
    </View>
  );
};

export default Mem;
