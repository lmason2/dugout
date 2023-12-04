import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'

const PromoCard = () => {
  return (
    <View className='-ml-4 flex-row mr-8 bg-white rounded-3xl shadow-lg items-left'>
      <View className='p-2 gap-4'>
        <Text className='font-semibold'>Beer Specials</Text>
        <Text className='w-32 mt-2 text-xs'>$1 Beers for 30 min.</Text>
        <View className='flex-row mt-2 p-2 w-15 h-10 rounded-3xl items-center justify-center' style={{backgroundColor: themeColors.bgColor(1)}}>
          <Text className='text-white'>⏱</Text>
          <Text className='text-white font-bold'>Claim</Text>
        </View>
      </View>
      <Image className='h-36 w-36 rounded-r-3xl' source={require('../../assets/images/Backgrounds/Vendors/ClevelanderBackground.png')} />
    </View>
  )
}

export default PromoCard

const styles = StyleSheet.create({})