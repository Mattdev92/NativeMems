import React, { FC, useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./mem.styles";
import { MemProps } from "./mem.types";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Mem: FC<MemProps> = ({ item }) => {

  const [vote, setVote] = useState({
    Upvote: 0,
    Downvote:0
  });
  const votes: any = useSelector<RootState>(
    ({ memReducer: { votes } }) => votes
  );
  const uploaded: any = useSelector<RootState>(
    ({ memReducer: { uploaded } }) => uploaded
  );

  useEffect(()=>{
    setVote({
      Upvote: votes[item.title].downvote,
      Downvote: votes[item.title].upvote
    })
  },[uploaded])
  
  // const downvote: number = votes[item.title].downvote;
  // const upvote: number = votes[item.title].upvote;

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
          <FontAwesome name="thumbs-o-up" size={30} color="blue" />
          <Text>{vote.Upvote}</Text>
        </View>
        <View>
          <FontAwesome name="thumbs-o-down" size={30} color="blue" />
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
