import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Restaurants, { restaurantsList } from '../components/Restaurants';
import NavigationFooter from '../components/NavigationFooter';

const YelpApiKey = "aztjVJe_wteDgzzmQ1y03yXp1s62zME2eMA05u3kq4KVzoo76IgPoD2ZaEx0AlEfqf4nqvFV20NjGIn6_FHKggSH9PBhAG09yknVIsjwfAK2r7TpNe8va8twQ1I4Y3Yx";

export default function Home() {

  const [restaurantsData, setRestaurantsData] = useState(restaurantsList);
  const [city, setCity] = useState("Miami");
  const [activeBtn, setActiveBtn] = useState("Delivery");

  const getYelpRestaurants = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YelpApiKey}`
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantsData(json.businesses.filter((business) => 
        business.transactions.includes(activeBtn.toLowerCase())
          )
        )
      );
    };

  useEffect(() => {
    getYelpRestaurants();
  }, [city, activeBtn]);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderTabs activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView>
        <Categories />
        <Restaurants
          restaurantsData={restaurantsData} />
      </ScrollView>
      <NavigationFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#fff",
    padding: 15,
  }
});