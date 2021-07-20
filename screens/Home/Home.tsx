import React, { FC, useEffect } from "react";
import { Text, View,  } from "react-native";
import MemList from "../../components/molecules/memList/memList";
import { useDispatch } from "react-redux";
import { HomeProps } from "./Home.types";
import { styles } from "./Home.styles";
import WithNavigation from "../../templates/withNavigation/withNavigation";
import { fetchMemNames } from "../../slices/createSliceMem";
import { useQuery } from "@apollo/client";
import { getMemsNames } from "../../memCMS/querries";
import { MemsNameType } from "../../slices/createSliceMemtypes";

const HomeScreen: FC<HomeProps> = ({ navigation }) => {
  const { loading, error, data } = useQuery<MemsNameType>(getMemsNames);

  useEffect(() => {
    dispatch(fetchMemNames(data))
  }, [data]);

  const dispatch = useDispatch();
  if (loading || error) {
    return (
      <>
        {loading ? (
          <View>
            <Text>Loading....</Text>
          </View>
        ) : (
          <View>
            <Text>Sory for enconvinience. Database is anavailable ! </Text>
          </View>
        )}
      </>
    );
  } else {
  return (
    <WithNavigation navigation={navigation}>
      <Text style={styles.title}>All available Mems</Text>
      <MemList hot={false} regular={false} />
    </WithNavigation>
  );
};
}
export default HomeScreen;
