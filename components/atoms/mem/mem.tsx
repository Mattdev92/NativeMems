import React, { FC, useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./mem.styles";
import { MemProps } from "./mem.types";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { memUpvote, memDownvote } from "../../../slices/createSliceMem";
import { useDispatch } from "react-redux";

const Mem: FC<MemProps> = ({ item }) => {

  const [vote, setVote] = useState({
    Upvote: 0,
    Downvote:0
  });
  const votes: any = useSelector<RootState>(
    ({ memReducer: { votes } }) => votes
  );

  useEffect(()=>{
    setVote({
      Upvote: votes[item.title].upvote,
      Downvote: votes[item.title].downvote
    })
  },[votes])
const dispatch = useDispatch();

  return (
    <View style={styles.memContainer}>
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
        <View>
          <FontAwesome name="thumbs-o-up" size={30} color="blue" onPress={()=>dispatch(memUpvote(item.title))}/>
          <Text>{vote.Upvote}</Text>
        </View>
        <View>
          <FontAwesome name="thumbs-o-down" size={30} color="blue" onPress={()=>dispatch(memDownvote(item.title))}/>
          <Text>{vote.Downvote}</Text>
        </View>
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
