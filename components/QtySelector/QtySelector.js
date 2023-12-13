import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'
import * as Icon from 'react-native-feather'

const QtySelector = () => {
  return (
        <View className='items-center flex-row ml-4'>
            <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1) }} className='p-1 rounded-full'>
                <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
            </TouchableOpacity>
            <Text className='px-3'>{2}</Text>
            <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1) }} className='p-1 rounded-full'>
                <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'}/>
            </TouchableOpacity>
        </View>
  )
}

export default QtySelector