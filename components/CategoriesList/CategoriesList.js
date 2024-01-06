import { View, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { categories } from '../../constants'
import Category from './Category'
import * as Haptics from 'expo-haptics'


const CategoriesList = () => {
  const [activeCategory, setActiveCategory] = useState()
  const scrollRef = useRef(null)

  const handleCategorySelected = (currIdx) => {
    console.log(currIdx)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    // const selectedIdx = itemsRef.current[currIdx]

    // selectedIdx?.measure((x) => {
    //     scrollRef.current?.scrollTo({x: x, y: 0, animated: true})
    // })
    
    if (currIdx === activeCategory) {
        setActiveCategory(-1)
    } else {
        setActiveCategory(currIdx)
    }

    // setActiveCategory(categories[currIdx].name)
}
  return (
        <View className='mt-4 mb-4'>
          <ScrollView ref={scrollRef} horizontal showsHorizontalScrollIndicator={false} className='overflow-visible' contentContainerStyle={{paddingHorizontal: 15}}>
            {
              categories.map((category, index) => {
                let isActive = category.id === activeCategory
                let btnClass = isActive ? `bg-gray-600` : 'bg-gray-200'
                let textClass = isActive ? ' font-semi bold text-gray-800' : ' text-gray-500'
                return (
                  <Category category={category} key={index} btnClass={btnClass} textClass={textClass} setActiveCategory={handleCategorySelected}/>
                )
              })
            }
          </ScrollView>
        </View>
  )
}

export default CategoriesList