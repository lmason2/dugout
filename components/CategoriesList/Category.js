import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Category = ({category, index, btnClass, textClass, setActiveCategory}) => {
    return (
        <View key={index} className='flex justify-center items-center mr-6'>
            <TouchableOpacity onPress={() => setActiveCategory(category?.id)} className={'p-1 rounded-full shadow bg-gray-200 ' + btnClass}>
                <Image style={{height: 45, width: 45 }} source={category?.image} />
                </TouchableOpacity>
            <Text className={'text-sm ' + textClass}>{category.name}</Text>
        </View>
    )
}

export default Category