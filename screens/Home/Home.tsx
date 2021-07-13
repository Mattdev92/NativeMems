import React, { FC } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MemList from "../../components/molecules/memList/memList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navigation from "../../components/organisms/navigation/navigation";
import { HomeProps } from "./Home.types";
import { styles } from "./Home.styles";
import WithNavigation
 from "../../templates/withNavigation/withNavigation";
const HomeScreen: FC<HomeProps> = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const author = useSelector<RootState>(({ memReducer: { author } }) => author);

  console.log(author);
  return (
    <WithNavigation navigation={navigation}>
      <Text style={styles.title}>Hello Matt App</Text>
      <MemList />
    </WithNavigation>
  );
};

export default HomeScreen;
