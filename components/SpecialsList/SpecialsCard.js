import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColors } from "../../theme";

const SpecialsCard = () => {
  return (
    <View className="-ml-4 flex-row mr-8 bg-white rounded-3xl shadow-lg items-left">
      <View className="p-4 space-y-4">
        <Text className="font-semibold">Beer Specials</Text>
        <Text className="w-32 mt-2 text-xs">$1 Beers for 30 min.</Text>
        <TouchableOpacity>
          <View
            className="flex-row mt-2 p-2 w-15 h-10 rounded-3xl items-center justify-center"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Text className="text-white mr-1">⏱</Text>
            <Text className="text-white font-bold">Claim</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image
        className="h-36 w-36 rounded-r-3xl"
        source={require("../../assets/images/Backgrounds/Vendors/ClevelanderBackground.png")}
      />
    </View>
  );
};

export default SpecialsCard;

const styles = StyleSheet.create({});
