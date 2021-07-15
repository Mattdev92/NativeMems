import React, { FC, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./navigation.styles";
import { NavProps } from "./navigation.types";
// import { memNameAdded } from "../../../slices/createSliceMem";
import { ButtonNames } from "../../../helpers/helpers";
import { useQuery } from "@apollo/client";
import { getMemsNames } from "../../../memCMS/querries";
import { fetchMemNames } from "../../../slices/createSliceMem";
import { MemsNameType } from "./navigation.types";

const Navigation: FC<NavProps> = ({ navigation }) => {
  useEffect(() => {
    dispatch(fetchMemNames());
  }, []);
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery<MemsNameType>(getMemsNames);
  console.log(data);
  return (
    <View style={styles.view}>
      {ButtonNames.map((item) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(`${item}`)}
          key={item}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(memNameAdded("Cat"))}
      >
        <Text style={styles.text}>Check Redux</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default Navigation;
