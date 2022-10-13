import React from 'react';
import { Text, Image, View, StyleSheet} from 'react-native';
import { Divider } from 'react-native-elements';

export default function RestaurantAbout(props) {

    const {image, name, price, reviews, rating, categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" | ");

    const description = `${formattedCategories} ${price ? " | " + price : ""} ${" | " + rating} ${" | " + reviews}`;

    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Divider width={1.8} style={{marginTop: 20}}></Divider>
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      
    },
    image: {
        height: 150,
        width: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginHorizontal: 15,
    },
    description: {
        fontSize: 16,
        marginLeft: 15,
    },
  });