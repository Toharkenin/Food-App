import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HeaderTabs() {
    const [activeBtn, setActiveBtn] = useState("Delivery")
    return (
    <View style={{ backgroundColor: '#fff'}}>
        <View style={{flexDirection: "row", alignSelf: "center", paddingTop: 20}}>
            <HeaderButton 
                text="Delivery" 
                activeBtn={activeBtn}
                setActiveBtn={setActiveBtn}/>
            <HeaderButton 
                text="Pickup"
                activeBtn={activeBtn}
                setActiveBtn={setActiveBtn}/> 
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