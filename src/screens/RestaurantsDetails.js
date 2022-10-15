import React from 'react';
import { View } from 'react-native';
import RestaurantAbout from '../components/RestaurantAbout';
import MenuItems from '../components/MenuItems';
import ViewCart from '../components/ViewCart';

export default function RestaurantsDetails({route, navigation}) {
    return (
        <View style={{flex: 1}}>
            <RestaurantAbout route={route}/>
            <MenuItems restaurantName={route.params.name}/>
            <ViewCart navigation={navigation} restaurantName={route.params.name}/>
        </View>
    );
  };
