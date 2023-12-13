import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'
import * as Icon from 'react-native-feather'

const DishRow = ({item}) => {
  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-md mb-4 mx-2'>
        <Image className='rounded-3xl' style={{ height: 100, width: 100 }} source={item.image} />
        <View className='flex flex-1 space-y-3'>
            <View className='pl-3'>
                <Text className='text-xl'>{item.name}</Text>
                <Text className='text-gray-700'>{item.description}</Text>
            </View>
            <View className='flex-row justify-between pl-3 items-center'>
                <Text className='text-gray-700 font-bold text-lg'>$ {item.price}</Text>
                <View className='flex-row items-center'>
                    <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1) }} className='p-1 rounded-full'>
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                    </TouchableOpacity>
                    <Text className='px-3'>{2}</Text>
                    <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1) }} className='p-1 rounded-full'>
                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>     
  )
}

export default DishRow

const styles = StyleSheet.create({})