import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native'

const ViewCartBtn = () => {
  const navigation = useNavigation()

  return (
    <View className='absolute bottom-10 w-full z-50'>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ backgroundColor: themeColors.bgColor(1) }} className='flex-row justify-between items-center rounded-full mx-5 p-4  py-3 shadow-lg'>
            {/* <Icon.ShoppingCart /> */}
            <View className='p-2 px-4 rounded-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
                <Text className='font-extrabold text-white text-lg'>3</Text>
            </View>
            <Text className='flex-1 text-center font-extrabold text-white text-lg'>View Cart</Text>
            <Text className='font-bold text-white text-lg'>${23}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ViewCartBtn

const styles = StyleSheet.create({})