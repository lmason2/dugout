import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { MockVendorData } from "../assets/data/vendor.data";
import VendorRow from "../components/VendorRow/VendorRow";

const AllVendorsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="w-full items-center mt-4">
        <Text className="text-xl">All Restaurants</Text>
      </View>
      {/* Home (Back) Btn */}
      <TouchableOpacity
        className="p-2 rounded-full absolute top-16 left-5"
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon.ArrowLeft color={"white"} />
      </TouchableOpacity>

      {/* Vendor Scroll View */}
      <View className="justify-start mt-8 h-full">
        <FlatList
          className="flex-col"
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 200,
          }}
          data={MockVendorData}
          renderItem={({ item }) => <VendorRow key={item.id} vendor={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllVendorsScreen;
