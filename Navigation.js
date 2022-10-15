import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import RestaurantsDetails from './src/screens/RestaurantsDetails';
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

export default function Navigation() {

    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }

    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='RestaurantsDetails' component={RestaurantsDetails} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
  };

 