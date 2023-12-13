import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../../constants'
import Category from './Category'
import { themeColors } from '../../theme'

const CategoriesList = () => {
  const [activeCategory, setActiveCategory] = useState()

  return (
        <View className='mt-4 mb-4'>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className='overflow-visible' contentContainerStyle={{paddingHorizontal: 15}}>
            {
              categories.map((category, index) => {
                let isActive = category.id === activeCategory
                let btnClass = isActive ? `bg-gray-600` : 'bg-gray-200'
                let textClass = isActive ? ' font-semi bold text-gray-800' : ' text-gray-500'
                return (
                  <Category category={category} key={index} btnClass={btnClass} textClass={textClass} setActiveCategory={setActiveCategory}/>
                )
              })
            }
          </ScrollView>
        </View>
  )
}

export default CategoriesList