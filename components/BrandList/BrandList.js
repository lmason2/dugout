import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BrandCard from "./BrandCard";

const brandItem1 = {
  id: 1,
  image: require("../../assets/images/Backgrounds/CoorsLogo2.png"),
  brand: "Coors",
  description: "regular, lite",
};

const brandItem2 = {
  id: 2,
  image: require("../../assets/images/Backgrounds/HeinekenLogo.jpeg"),
  brand: "Heineken",
  description: "regular, silver",
};

const brandItem3 = {
  id: 3,
  image: require("../../assets/images/Backgrounds/CoronaLogo.jpg"),
  brand: "Corona",
  description: "regular, lime",
};

const BrandList = () => {
  return (
    <View className="pb-4 px-4 gap-4">
      <Text className="text-lg font-bold">Beers by Brand</Text>
      <View className="flex-row justify-between items-center">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {[brandItem1, brandItem2, brandItem3].map((item, index) => {
            return <BrandCard key={index} brandItem={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default BrandList;

const styles = StyleSheet.create({});
