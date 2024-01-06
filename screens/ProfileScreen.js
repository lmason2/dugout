import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useAuth, useUser } from "@clerk/clerk-expo";
import LoginModal from "../(modals)/LoginModal";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

const ProfileScreen = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  const navigation = useNavigation();

  const handleLogoutPressed = () => {
    signOut();
    navigation.navigate("Home");
  };

  useEffect(() => {
    // console.log(`user:`);
    // console.log(user);
  }, [user]);

  return (
    <View className="h-full items-center pt-14">
      <View className="w-72 shadow-lg bg-white rounded-lg p-6 justify-center items-center flex-col space-y-4">
        <TouchableOpacity className="absolute top-4 right-4">
          <Icon.Bell color={"black"} />
        </TouchableOpacity>
        {/* Profile Pic */}
        <View className="bg-gray-200 rounded-full p-2">
          {/* <Entypo size={28} name="user" color={"white"} /> */}
          <Image
            source={{ uri: user?.imageUrl }}
            style={{ width: 75, height: 75 }}
            className="rounded-full"
          />
        </View>

        {/* User name */}
        <Text className="font-bold">{`${user?.firstName} ${user?.lastName}`}</Text>
        <Text className="italic">{`${user?.primaryEmailAddress}`}</Text>
        <Text>{``}</Text>

        <View className="flex-row mb-4">
          <Text>Reward Points: </Text>
          <Text className="font-bold">400</Text>
        </View>

        <Text className="text-xs">
          Member Since: {user?.createdAt.toLocaleString().split(",")[0]}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleLogoutPressed}
        className="mt-4 w-72 items-center justify-center bg-red-500 rounded-full p-3"
      >
        <Text className="text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
