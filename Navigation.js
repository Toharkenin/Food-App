import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import RestaurantsDetails from './src/screens/RestaurantsDetails';

export default function Navigation() {

    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='RestaurantsDetails' component={RestaurantsDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
  };

 