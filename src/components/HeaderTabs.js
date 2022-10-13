import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HeaderTabs(props) {
    return (
    <View style={{ backgroundColor: '#fff'}}>
        <View style={{flexDirection: "row", alignSelf: "center", paddingTop: 10}}>
            <HeaderButton 
                text="Delivery" 
                activeBtn={props.activeBtn}
                setActiveBtn={props.setActiveBtn} />
            <HeaderButton 
                text="Pickup"
                activeBtn={props.activeBtn}
                setActiveBtn={props.setActiveBtn} /> 
            </View>
    </View>
    );
  };


  const HeaderButton = (props) => {
    return (
    <TouchableOpacity
            style={{
                backgroundColor: props.activeBtn === props.text ? '#0081ff' : '#fff',
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 15,
            }}
            onPress={() => props.setActiveBtn(props.text)}>
        <Text 
            style={{
                color: props.activeBtn === props.text ? '#fff' : '#0081ff',
                fontSize: 15,
                fontWeight: "bold",
            }}>
               {props.text}
        </Text>
    </TouchableOpacity>
    );
  };