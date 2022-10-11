import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function NavigationFooter() {
    return (
        <View style={styles.container}>
                <Icon name="home" text="Home" />
                <Icon name="user-circle-o" text="Account" />
                <Icon name="shopping-bag" text="Grocery" />
                <Icon name="search" text="Search" />
        </View>
    );
  };

  const Icon = (props) => {
    return (
        <TouchableOpacity>
            <FontAwesome 
                name={props.name}
                size={30}
                style={styles.icons} />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
  }


  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 7,
    },
    icons: {
        color: '#0081ff',
        alignSelf: 'center',
    },
    text: {
        fontWeight: '700',
        color: '#0081ff',
    },
  });