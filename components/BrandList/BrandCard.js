import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../../theme'
import BrandModal from './BrandModal/BrandModal'

const BrandCard = ({ brandItem }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <TouchableOpacity onPress={() => setIsModalVisible(true)}>

      <View className='-ml-4 flex-col mr-8 bg-white rounded-3xl shadow-lg items-left'>
        <Image className='h-20 w-40 rounded-t-3xl' source={brandItem.image} />
        <View className='p-2 gap-4 items-center'>
          <Text className='font-bold py-3'>{brandItem.brand}</Text>
          <BrandModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BrandCard

const styles = StyleSheet.create({})