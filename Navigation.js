import React, { useCallback, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import VendorScreen from "./screens/VendorScreen";
import LandingScreen from "./screens/LandingScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparingScreen from "./screens/OrderPreparingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import AllVendorsScreen from "./screens/AllVendorsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DeliveryCompleteScreen from "./screens/DeliveryCompleteScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Vendor" component={VendorScreen} />
        <Stack.Screen name="AllVendors" component={AllVendorsScreen} />
        <Stack.Screen name="Complete" component={AllVendorsScreen} />
        <Stack.Screen
          name="Profile"
          options={{ presentation: "modal" }}
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPreparing"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPreparingScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        />
        <Stack.Screen
          name="DeliveryComplete"
          component={DeliveryCompleteScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
