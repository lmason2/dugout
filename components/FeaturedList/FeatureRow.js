import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { themeColors } from "../../theme";
import VendorCard from "./VendorCard/VendorCard";
import { useNavigation } from "@react-navigation/native";

const FeatureRow = ({ title, description, restaurants }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-sm color-gray-500">{description}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("AllVendors")}>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant, index) => {
          return <VendorCard item={restaurant} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
