import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const restaurantsList = [
  {
    name: "name of resturant",
    image_: "http://i.imgur.com/vKRaKDX.png",
    reviews: 450,
    price: 100,
    // categories: [indian, pickap],
    rating: 4.7,

  },
  {
    name: "name of resturant1",
    image_: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.timeout.com%2Fnewyork%2Frestaurants%2Fmanhattan-restaurant-guide&psig=AOvVaw3ySRMvJAz_AkhtgFp_KbfU&ust=1664795798272000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLD3rZG2wfoCFQAAAAAdAAAAABAD",
    reviews: 450,
    price: 100,
    // categories: [indian, pickap],
    rating: 4.7,

  },
  {
    name: "name of resturant4",
    image_: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.timeout.com%2Fnewyork%2Frestaurants%2Fmanhattan-restaurant-guide&psig=AOvVaw3ySRMvJAz_AkhtgFp_KbfU&ust=1664795798272000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLD3rZG2wfoCFQAAAAAdAAAAABAD",
    reviews: 450,
    price: 100,
    // categories: "indian",
    rating: 4.7,

  }
];

export default function Restaurants(props) {
    return (
      <>
            {props.restaurantsData.map((item, index) => (
                <TouchableOpacity 
                activeOpacity={0.9} 
                  key={index} 
                  style={{marginTop: 8, backgroundColor: '#fff', marginBottom: 10}}>
                    <RestaurantImage image_={item.image}/>
                    <RestaurantInfo 
                      name={item.name} 
                      rating={item.rating}/>
                </TouchableOpacity>
            ))} 
      </>
    );
  }

  const RestaurantImage = (props) => {
    return(
    <>
      <Image style={styles.images} source={{uri: props._image}}/>
      <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
    )};

  const RestaurantInfo = (props) => {
    return (
      <View style={styles.infoContainer}>
        <View style={styles.restaurantName}>
          <Text style={{fontSize: 15, fontWeight: '900'}}>{props.name}</Text>
          <Text style={{fontSize: 13, color: "gray"}}>45-55 min</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{props.rating}</Text>
        </View>
      </View>
    )};

  const styles = StyleSheet.create({
    // imageContainer: {
    //   // position: 'relative',
    //   // margin: 10,
    // },
    images: {
      width: '100%',
      heigth: 180,
    },
    infoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    restaurantName: {
      marginLeft: 10,
    },
    rating: {
      marginRight: 10,
    },
    ratingText: {
      backgroundColor: '#eee', 
      borderRadius: 50, 
      padding: 5,
      fontWeight: "700",
    },
  });