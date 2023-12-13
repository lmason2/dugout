import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native'

const SearchProductBar = () => {
  const navigation = useNavigation()
  const placeHolderText = 'Search'

  return (
    <View className='flex-row items-center space-x-2 px-4 pb-2 mt-2'>
        <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
            {/* Left side */}
            <Icon.Search height={20} width={20} color='gray' />
            <TextInput placeholder={placeHolderText} className='ml-2 flex-1' />
            {/* Right side city/state */}
            <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
                <Icon.MapPin height={20} width={20} color={'gray'} />
                <Text className='text-gray-400'>Seat A-123</Text>
            </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1)}} className='rounded-full p-2'>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon.ShoppingCart height={20} width={20} color={'white'} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default SearchProductBar