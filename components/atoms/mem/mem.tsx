import React, { FC, useState, useEffect, useMemo, useRef } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./mem.styles";
import { MemProps } from "./mem.types";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  memUpvote,
  memDownvote,
  memSelected,
} from "../../../slices/createSliceMem";
import { useDispatch } from "react-redux";

const Mem: FC<MemProps> = ({ item: { image, title } }) => {
  console.log(title);
  const votes: any = useSelector<RootState>(
    ({ memReducer: { votes } }) => votes
  );

  const upvote = useMemo(() => votes[title].upvote, [votes[title]]);
  const downvote = useMemo(() => votes[title].downvote, [votes[title]]);

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

export default Mem;
