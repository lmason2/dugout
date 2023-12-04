import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LandingLogo from '../components/Logo/LandingLogo'
import SeatInput from '../components/SeatInput/SeatInput'
import SearchLocationBar from '../components/SearchLocationBar/SearchLocationBar'

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/LandingBackground.png')} style={styles.backgroundImage} />
        <LandingLogo />
        <SearchLocationBar />
        <SeatInput navigation={navigation} />
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 80,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'contain' based on your preference
      position: 'absolute',
      width: '100%',
      height: '100%',
    }
})