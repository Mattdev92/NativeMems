import React, { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./navigation.styles";
import { NavProps } from "./navigation.types";
import { memNameAdded } from "../../../slices/createSliceMem";
import { ButtonNames } from "../../../helpers/helpers";

const Navigation: FC<NavProps> = ({ navigation }) => {
  const dispatch = useDispatch();
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(memNameAdded("Cat"))}
      >
        <Text style={styles.text}>Check Redux</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Navigation;
