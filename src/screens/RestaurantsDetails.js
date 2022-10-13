import React from 'react';
import { View, StyleSheet} from 'react-native';
import RestaurantAbout from '../components/RestaurantAbout';
import RestaurantItem from '../components/MenuItems';
import ViewCart from '../components/ViewCart';

export default function RestaurantsDetails({route}) {
    return (
        <View>
            <RestaurantAbout route={route}/>
            <RestaurantItem />
            <ViewCart />
        </View>
    );
  };

  const styles = StyleSheet.create({

  });