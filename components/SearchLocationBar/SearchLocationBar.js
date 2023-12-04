import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'

const SearchLocationBar = () => {
  return (
      <View className='flex-row items-center space-x-2 px-8 pb-2'>
        <View className='flex-row flex-1 items-center p-3 rounded-full border border-grey-300'>
            {/* Magnifying glass icon */}
            <Icon.Search height='25' width='25' stroke='black' />

            {/* Search field */}
            <TextInput placeholder='Yankee Stadium' className='ml-2 flex-1' />

            {/* Location */}
            <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-black-300'>
                <Icon.MapPin height='20' width='20' stroke='black' />
                <Text className='text-black-600'>New York, NYC</Text>
            </View>
        </View>
    </View>
  )
}

export default SearchLocationBar

const styles = StyleSheet.create({})