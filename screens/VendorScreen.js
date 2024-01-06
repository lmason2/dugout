import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import ViewCartBtn from "../components/ViewCartBtn/ViewCartBtn";
import ProductRow from "../components/ProductRow/ProductRow";

const VendorScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  let items = params;
  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      <Image className="h-52 w-full" source={items.image} />

      <TouchableOpacity
        className="absolute top-14 left-4 bg-gray-50 p-3 rounded-full shadow"
        onPress={() => navigation.goBack()}
      >
        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
      </TouchableOpacity>

      <View
        className="bg-white -mt-10 pt-4"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <View className="px-5">
          <Text className="text-3xl font-bold">{items.name}</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row my-1 space-x-2"
          >
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-800">{items.stars}</Text>
                {" · "}
                <Text className="text-gray-700">
                  ({items.reviews} reviews) ·{" "}
                  <Text className="font-semibold">{items.category}</Text>
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Icon.MapPin height={15} width={15} color={"gray"} />
              <Text className="text-xs text-gray-700">
                Nearby · {items.address}
              </Text>
            </View>
          </ScrollView>
          <Text className="text-gray-500 mt-2">{items.description}</Text>
          <Text className="px-4 py-3 text-2xl font-bold">Menu</Text>

          <View className="flex-row justify-evenly items-center w-full pb-2">
            <TouchableOpacity className="bg-gray-600 rounded-full p-2">
              <Text className="text-white font-semibold">Drinks</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="font-semibold">Food</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="font-semibold">Merch</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            className="pt-2"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40, flexGrow: 1 }}
            contentInset={{ bottom: 170 }}
          >
            {items.products.map((dish, index) => (
              <ProductRow item={{ ...dish }} key={index} />
            ))}
          </ScrollView>
        </View>
      </View>
      <ViewCartBtn />
    </View>
  );
};

export default VendorScreen;
