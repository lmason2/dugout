import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const DeliveryCompleteScreen = () => {
  const navigation = useNavigation();
  const handleDonePressed = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <View className="h-full items-center">
        {/* <TouchableOpacity
          className="p-2 rounded-full absolute top-0 left-5"
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={handleClosePressed}
        >
          <Icon.X color={"white"} />
        </TouchableOpacity> */}
        <View className="flex-row">
          <Image
            className="h-28 w-28 rounded-tl-lg rounded-bl-lg"
            source={require("../assets/images/Backgrounds/Vendors/ClevelanderBackground.png")}
          />
          <View className="shadow-sm justify-center items-center bg-white h-28 w-36 rounded-tr-lg rounded-br-lg">
            {/* <Text>test</Text> */}
            <Text className="font-bold">Clevelander</Text>
            <Text className="text-xs">Jan 3 at 6:02 PM</Text>
          </View>
        </View>

        <View className="justify-center items-center gap-3 bg-white shadow-lg rounded-lg px-5 py-10">
          <View className="bg-green-600 py-3 px-6 rounded-lg mb-6 shadow">
            <Text className="text-xl font-bold text-white w-80text-center">
              Delivery Successful
            </Text>
          </View>

          <View className="mb-2 flex-row">
            <Text>🎉 You earned</Text>
            <Text className="font-bold"> 66 </Text>
            <Text>reward points!</Text>
          </View>
          <View className="mb-8 flex-row">
            {/* <Text>Reward Points:</Text> */}
            {/* <Text className="font-bold"> 400</Text> */}
            <TouchableOpacity>
              <Text className="font-semibold underline">
                Sign-in to claim rewards.
              </Text>
            </TouchableOpacity>
          </View>

          {/* <Text className="mb-6">Reason: Incorrect seat</Text> */}

          <View className="space-y-2">
            <Text className="font-bold">Rate your experience</Text>
            <Text className="font-semibold text-xs">
              How was your delivery at Marlins Stadium?
            </Text>
          </View>
          <View className="flex-row gap-2">
            <TouchableOpacity>
              <Icon.Star color={"gold"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon.Star color={"gold"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon.Star color={"gold"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon.Star color={"gold"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon.Star color={"gold"} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text className="underline text-xs">
              I need help with my order.
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="absolute bottom-8 w-80 items-center justify-center py-4 rounded-full"
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={handleDonePressed}
        >
          <Text className="text-white font-bold">Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryCompleteScreen;
