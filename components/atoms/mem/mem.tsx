import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./mem.styles";
import { MemProps } from "./mem.types";
import { FontAwesome } from "@expo/vector-icons";

const Mem: FC<MemProps> = ({ item }) => {
  console.log(item.title);
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title} </Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: item.image.url,
        }}
      ></Image>
      <View style={styles.vote}>
        <FontAwesome name="thumbs-o-up" size={30} color="blue" />
        <FontAwesome name="thumbs-o-down" size={30} color="blue" />
      </View>
    </View>
  );
};
const areEqual = (prevProps: any, nextProps: any) => {
  const { item } = nextProps;
  const { item: prevItem } = prevProps;

  /*if the props are equal, it won't update*/
  const isItemEqual = item === prevItem;

  return isItemEqual;
};
export default React.memo(Mem, areEqual);
