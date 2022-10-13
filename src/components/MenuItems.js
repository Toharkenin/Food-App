import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';


const items = [
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "The best dish",
        description: "Lorem Ipsum is    Lorem Ipsum, Lorem Ipsum",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "The best dish",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "The best dish",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "The best dish",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "The best dish",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "The best dish",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
]

export default function RestaurantAbout(props) {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
                <View 
                  key={index}
                  style={{marginTop: 10, marginHorizontal: 10}}>
                    <View style={styles.container}>
                        <BouncyCheckbox 
                            iconStyle={{borderColor: "#D3D3D3"}}  
                            fillColor="#0081ff" 
                            innerIconStyle={{ borderWidth: 2 }}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View> 
                        <Image source={{uri: item.image}} style={styles.img}/>      
                    </View>
                    <Divider width={0.8} orientation="vertical" style={{marginHorizontal: 15}}></Divider>
                </View>
            ))} 
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: "space-between",
        marginVertical: 20,
        alignItems: "center",
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 7,
        marginRight: 15,
    },
    textContainer: {
        width: 250,
        // justifyContent: 'space-evenly',
        marginLeft: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
    },
    description: {
        fontSize: 16,
        fontWeight:'400',
    },
    price: {
        fontWeight: '400',
        marginTop: 5,
    },
  });