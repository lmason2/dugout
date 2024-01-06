import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icon from "react-native-feather";
import { useAuth } from "@clerk/clerk-expo";
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const ProfileBtn = ({ setShowLoginModal }) => {
  const { signOut, isSignedIn } = useAuth();
  const navigation = useNavigation();

  const handleProfilePressed = () => {
    navigation.navigate("Profile");
  };

  const handleLoginPressed = () => {
    setShowLoginModal(true);
  };

  useEffect(() => {
    console.log(`isSignedIn: ${isSignedIn}`);
  }, []);

  useEffect(() => {}, [isSignedIn]);

  return (
    <View>
      <TouchableOpacity
        onPress={isSignedIn ? handleProfilePressed : handleLoginPressed}
        className="rounded-full p-3 bg-white shadow border-0.5 border-gray-400"
      >
        <Icon.User height={20} width={20} color={themeColors.bgColor(1)} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBtn;
