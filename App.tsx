import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home/Home";
import Hot from "./screens/Hot/Hot";
import Favourite from "./screens/Hot/Hot";
import Regular from "./screens/Regular/Regular";
import { Provider } from 'react-redux';
import store from './store/store';
import {
  ApolloProvider,
} from "@apollo/client";
import { client } from "./memCMS/apolloClient";

const Stack = createStackNavigator();

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Hot" component={Hot} />
          <Stack.Screen name="Regular" component={Regular} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </ApolloProvider>
);
export default App;
