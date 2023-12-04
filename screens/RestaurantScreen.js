import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import DishRow from '../components/DishRow/DishRow'
import CartIcon from '../components/CartIcon/CartIcon'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const {params} = useRoute()
  let items = params
  return (
    <View>
      <StatusBar barStyle='light-content' />
      <CartIcon />
      <ScrollView>
        <Image className='h-72 w-full ' source={items.image } />
        <TouchableOpacity className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow' onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className='bg-white -mt-12 pt-6'>
          <View className='px-5'>
            <Text className='text-3xl font-bold'>{items.name}</Text>
            <View className='flex-row my-1 space-x-2'>
              <View className='flex-row items-center space-x-1'>
                  <Image source={require('../assets/images/fullStar.png')} className='h-4 w-4'/>
                  <Text className='text-xs'>
                      <Text className='text-green-800'>{items.stars}</Text>
                          {' · '}
                          <Text className='text-gray-700'>({items.reviews} reviews) · <Text className='font-semibold'>{items.category}</Text>
                      </Text>
                  </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                  <Icon.MapPin height={15} width={15} color={'gray'} />
                  <Text className='text-xs text-gray-700'>Nearby · {items.address}</Text>
              </View>
            </View>
              <Text className='text-gray-500 mt-2'>{items.description}</Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
          {/* Drinks / Food */}
          {
            items.dishes.map((dish, index) => <DishRow item={{...dish}} key={index} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default RestaurantScreen