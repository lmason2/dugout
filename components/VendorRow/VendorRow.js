import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

const VendorRow = ({ vendor }) => {
  return (
    <View>
      <TouchableOpacity className="bg-white shadow-md w-80 mb-4 px-5 py-6 rounded-lg">
        <View className="flex-row justify-between">
          <View className="flex-col space-y-2">
            <Text className="font-bold">{vendor.name}</Text>
            <Text>{vendor.description}</Text>
          </View>
          <View className="flex-col items-end space-y-2">
            <Text className="italic">{vendor.category}</Text>

            <Text>{vendor.numReviews} ratings</Text>
            <View className="flex-row items-center space-x-1">
              <Icon.Star height={14} width={14} stroke={"black"} />
              <Text>{vendor.avgStars}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VendorRow;
