import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import DishRow from '../components/DishRow/DishRow'
import ViewCartBtn from '../components/ViewCartBtn/ViewCartBtn'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const {params} = useRoute()
  let items = params
  return (
    <View className='flex-1'>
      <StatusBar barStyle='light-content' />
      <Image className='h-52 w-full' source={items.image} />

      <TouchableOpacity className='absolute top-14 left-4 bg-gray-50 p-3 rounded-full shadow' onPress={() => navigation.goBack()}>
        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
      </TouchableOpacity>

      <View className='bg-white -mt-10 pt-4' style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
        <View className='px-5'>
          <Text className='text-3xl font-bold'>{items.name}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row my-1 space-x-2'>
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
          </ScrollView>
          <Text className='text-gray-500 mt-2'>{items.description}</Text>
          <Text className='px-4 py-3 text-2xl font-bold'>Menu</Text>
          <ScrollView className='pt-2' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 40, flexGrow: 1}} contentInset={{bottom: 150}}>
            {
              items.dishes.map((dish, index) => (
                  <DishRow item={{...dish}} key={index} />
              ))
            }
          </ScrollView>
        </View>
      </View>

      <ViewCartBtn />


      {/* <View>

      <View className='flex-row items-center justify-center rounded-full bg-gray-200 absolute bottom-0 z-50 p-4'>
        <Text>Test Btn</Text>
      </View>
      </View>


      <TouchableOpacity className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow' onPress={() => navigation.goBack()}>
        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
      </TouchableOpacity>

      <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className='bg-white -mt-12 pt-6'>
        <View className='px-5'>
          <Text className='text-3xl font-bold'>{items.name}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row my-1 space-x-2'>
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
          </ScrollView>
            <Text className='text-gray-500 mt-2'>{items.description}</Text>
        </View>
      </View>
      
      <View className='bg-white'>
        <Text className='px-4 py-3 text-2xl font-bold'>Menu</Text>
        <ScrollView showsVerticalScrollIndicator={false} className='p-2'>
          {
            items.dishes.map((dish, index) => (
                <DishRow item={{...dish}} key={index} />
            ))
          }
        </ScrollView>
      </View> */}

    </View>
  )
}

export default RestaurantScreen