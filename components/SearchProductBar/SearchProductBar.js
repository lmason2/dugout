import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { themeColors } from "../../theme";
import ProfileBtn from "../ProfileBtn/ProfileBtn";

const SearchProductBar = ({ showLoginModal, setShowLoginModal }) => {
  const navigation = useNavigation();
  const placeHolderText = "Search";

  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2 mt-2">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        {/* Left side */}
        <Icon.Search height={20} width={20} color="gray" />
        <TextInput placeholder={placeHolderText} className="ml-2 flex-1" />
        {/* Right side city/state */}
        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
          {/* <Icon.MapPin height={20} width={20} color={"gray"} /> */}
          <MaterialCommunityIcons name="seat" size={18} color={"gray"} />
          <Text className="text-gray-400 text-xs">A-123</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          className="rounded-full p-3"
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={() => navigation.navigate("Cart")}
        >
          <Icon.ShoppingCart height={20} width={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <View>
        <ProfileBtn setShowLoginModal={setShowLoginModal} />
      </View>
    </View>
  );
};

export default SearchProductBar;
