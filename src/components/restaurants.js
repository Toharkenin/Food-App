import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantsDetails from '../screens/RestaurantsDetails';

export const restaurantsList = [
];

export default function Restaurants({navigation, ...props}) {
    return (
      <>
            {props.restaurantsData.map((item, index) => (
                <TouchableOpacity 
                  activeOpacity={0.9} 
                  key={index}
                  onPress={() => navigation.navigate("RestaurantsDetails", {
                    name: item.name,
                    image: item.image_url,
                    price: item.price,
                    reviews: item.review_count,
                    rating: item.rating,
                    categories: item.categories,
                  }) 
                  }
                  style={{marginTop: 10}}>
                    <View style={{marginVertical: 10, backgroundColor: '#fff'}}>
                      <RestaurantImage image={item.image_url}/>
                      <RestaurantInfo 
                        name={item.name} 
                        rating={item.rating}/>
                    </View>
                </TouchableOpacity>
            ))} 
      </>
    );
  }

  const RestaurantImage = (props) => {
    return(
    <>
      <Image source={{uri: props.image}} style={styles.images} />
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
    //   margin: 10,
    // },
    images: {
      width: '100%',
      height: 180,
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