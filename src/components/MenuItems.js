import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';


const items = [
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "1111111",
        description: "Lorem Ipsum is    Lorem Ipsum, Lorem Ipsum",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "222222222",
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
        name: "33333333",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "44444444",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "2324332",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "The best dish ever",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
    {
        image: "https://media.timeout.com/images/105921028/750/422/image.jpg",
        name: "The worst dish",
        description: "Lorem Ipsum isLorem Ipsum, Lorem Ipsum locations  the most popular",
        price: "$20",
    },
];

export default function MenuItems({restaurantName}) {

    const dispatch = useDispatch();
    const selectItem = (item, CheckBoxValue) => dispatch({
        type: 'add_to_cart',
        payload: {...item, 
            restaurantName: restaurantName,
            CheckBoxValue: CheckBoxValue},
    });

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);
    const isItemInCart = (menuItem, cartItems) => 
        Boolean(cartItems.find((item) => (item.name === menuItem.name)));

    return (
            <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((menuItem, index) => (
                <View 
                  key={index}>
                    <View style={styles.container}>
                        <BouncyCheckbox 
                            iconStyle={{borderColor: "#D3D3D3"}}  
                            fillColor="#0081ff" 
                            innerIconStyle={{ borderWidth: 2 }}
                            isChecked={isItemInCart(menuItem, cartItems)}
                            onPress={(CheckBoxValue) => 
                                selectItem(menuItem, CheckBoxValue)}
                                />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{menuItem.name}</Text>
                            <Text style={styles.description}>{menuItem.description}</Text>
                            <Text style={styles.price}>{menuItem.price}</Text>
                        </View> 
                        <Image source={{uri: menuItem.image}} style={styles.img}/>      
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
        margin: 20,
        alignItems: "center",
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 7,
    },
    textContainer: {
        width: 220,
        justifyContent: 'space-evenly',
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
    },
  });