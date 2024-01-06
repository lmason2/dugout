import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { promoItem } from "../../constants";
import SpecialsCard from "./SpecialsCard";

const SpecialsList = () => {
  return (
    <View className="pb-4 px-4 gap-4">
      <Text className="text-lg font-bold">Game-Day Specials</Text>
      <View className="flex-row justify-between items-center">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          <SpecialsCard />
          <SpecialsCard />
          <SpecialsCard />
          <SpecialsCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default SpecialsList;

const styles = StyleSheet.create({});
