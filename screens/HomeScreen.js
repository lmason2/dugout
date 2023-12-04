import { StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchProductBar from '../components/SearchProductBar/SearchProductBar'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import FeaturedList from '../components/FeaturedList/FeaturedList'
import PromoList from '../components/PromoList/PromoList'
import BrandList from '../components/BrandList/BrandList'

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white'>
      <StatusBar barStyle='dark-content' />
      <SearchProductBar />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
        <CategoriesList />
        <PromoList />
        <BrandList />
        <FeaturedList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen