import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import LandingScreen from './screens/LandingScreen'
import CartScreen from './screens/CartScreen'
import OrderPreparingScreen from './screens/OrderPreparingScreen'
import DeliveryScreen from './screens/DeliveryScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Landing' component={LandingScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Cart' options={{ presentation: 'modal' }} component={CartScreen} />
            <Stack.Screen name='OrderPreparing' options={{ presentation: 'fullScreenModal' }} component={OrderPreparingScreen} />
            <Stack.Screen name='Delivery' options={{ presentation: 'fullScreenModal' }} component={DeliveryScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation