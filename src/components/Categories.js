import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import img1 from '../assets/shopping_bag.jpg';
import img2 from '../assets/25487.jpg';
import img3 from '../assets/foodfast15.jpg';
import img4 from '../assets/f000139.jpg';
import img5 from '../assets/18966095.jpg';

const items = [
  {image: img1, 
   text: 'Pick-up'},
   {image: img2, 
   text: 'Soft Drink'},
   {image: img3, 
   text: 'Backery Items'},
   {image: img4, 
   text: 'Fast Food'},
   {image: img5, 
   text: 'Desserts'}
];

export default function Categories() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => {
            return (<TouchableOpacity key={index} style={styles.items}>
              <Image source={item.image} style={styles.images}/>
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>)
          })}
        </ScrollView>
        
       </View>
    )};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: '#FFFFFF',
  },
  items: {
    alignItems: 'center',
    marginHorizontal: 14,
    marginBottom: 5,
  },
  images: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: '900',
    fontSize: 14,
  }
});