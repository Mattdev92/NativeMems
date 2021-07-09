import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Hot from "./screens/Hot";
import Regular from "./screens/Regular";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hot" component={Hot} />
      <Stack.Screen name="Regular" component={Regular} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
