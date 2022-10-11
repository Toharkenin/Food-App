import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function SearchBar({cityHandler}) {
    return (
        <View style={{marginTop:15, flexDirection:"row"}}>
            <GooglePlacesAutocomplete 
                query={{key: 'AIzaSyA3n4d1UBfWuinDKVlgMfKBOubRC2Ig1pw'}}
                onPress={(data, detail = null) => {
                    const city = data.description.split(",")[0];
                    cityHandler(city);
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        fontWeight: "700",
                        borderRadius: 20,
                        // marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        // marginTop: 10,
                    }
                }}
                renderLeftButton={() => (
                    <View style={{paddingLeft: 15}}>
                        <Ionicons name="location-sharp" size={24} style={{color: '#494848'}}/>
                    </View>
                )}
                renderRightButton={() => (
                    <TouchableOpacity>
                        <Ionicons name="search" size={24} style={{color: '#494848', right: 20, marginLeft: 20}}/>
                    </TouchableOpacity>
                )}
                />
                
        </View>
    )
  }