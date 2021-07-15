import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./mem.styles";
import { MemProps } from "./mem.types";

const Mem: FC<MemProps> = ({ item }) => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title} </Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: item.image.url
        }}
      ></Image>
    </View>
  );
};

export default Mem;
