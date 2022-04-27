import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
