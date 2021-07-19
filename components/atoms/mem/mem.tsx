import React, { FC, useState, useEffect, useMemo, useRef } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./mem.styles";
import { AllMemProps } from "./mem.types";
import { FontAwesome } from "@expo/vector-icons";
import {
  memUpvote,
  memDownvote,
  memSelected,
} from "../../../slices/createSliceMem";
import { useDispatch } from "react-redux";

const Mem: FC<AllMemProps> = ({ item: { image, title }, upvote, downvote }) => {
  console.log(title);

  const dispatch = useDispatch();
  const renders = useRef(0);
  return (
    <View style={styles.memContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title} </Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: image.url,
        }}
      ></Image>
      <View style={styles.vote}>
        <View>
          <FontAwesome
            name="thumbs-o-up"
            size={30}
            color="blue"
            onPress={() => {
              dispatch(memUpvote(title));
              dispatch(memSelected(title));
            }}
          />
          <Text>{upvote}</Text>
        </View>
        <View>
          <FontAwesome
            name="thumbs-o-down"
            size={30}
            color="blue"
            onPress={() => {
              dispatch(memDownvote(title));
              dispatch(memSelected(title));
            }}
          />
          <Text>{downvote}</Text>
          <Text>Renders {renders.current++}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Mem);
