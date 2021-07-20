import React, { FC, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./navigation.styles";
import { NavProps } from "./navigation.types";
import { ButtonNames } from "../../../helpers/helpers";

const Navigation: FC<NavProps> = ({ navigation }) => {

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
    </View>
  );
};
export default Navigation;
