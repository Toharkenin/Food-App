import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';


export default function ViewCart() {
    return (
        <View style={styles.container}>
            <View style={styles.con}>
                <TouchableOpacity style={StyleSheet.btn}>
                    <Text style={styles.text}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 120,
        zIndex: 999,

    },
    con: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    btn: {
        backgroundColor: "#0081ff",
        position: 'relative',
        width: 300,
        borderRadius: 30,
        padding: 13,
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 20, 
        color: "#fff",
    },
  });

 