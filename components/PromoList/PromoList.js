import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { promoItem } from '../../constants'
import PromoCard from './PromoCard'

const PromoList = () => {
  return (
    <View className='pb-4 px-4 gap-4'>
      <Text className='text-lg font-bold'>Game-Day Specials</Text>
      <View className='flex-row justify-between items-center'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='overflow-visible' contentContainerStyle={{paddingHorizontal: 15}}>
            <PromoCard/>
            <PromoCard/>
            <PromoCard/>
            <PromoCard/>
        </ScrollView>
      </View>
    </View>
  )
}

export default PromoList

const styles = StyleSheet.create({})