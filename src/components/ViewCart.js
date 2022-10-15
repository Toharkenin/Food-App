import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';


export default function ViewCart() {

    const items = useSelector((state) => state.cartReducer.selectedItems.items);
    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

    const totalPrice = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });

    return (
        <>
        {total ? (
           <View style={styles.container}>
                <View style={styles.con}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.btn}>
                        <Text style={styles.text}>View Cart</Text>
                        <Text style={styles.priceText}>${totalPrice}</Text>
                    </TouchableOpacity>
                </View>
            </View>)
            : (<></>)}
        </>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 15,
        // zIndex: 999,
    },
    con: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%", 
    },
    btn: {
        backgroundColor: "#0081ff",
        position: 'relative',
        width: 250,
        borderRadius: 30,
        opacity: 0.97,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        flexDirection: "row",
    },
    text: {
        fontSize: 20, 
        color: "#fff",
        fontWeight: "700",
        paddingLeft: 30,
    },
    priceText: {
        fontSize: 20,
        fontWeight: "400",
        color: "#fff",
        left: 30,
    },
  });

 