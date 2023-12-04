import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LandingLogo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>STADIUM</Text>
      <Text style={styles.header}>BEERS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 80,
        width: '100%',
        fontFamily: 'custom-font',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        flexWrap: 'wrap', 
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: -50,
        marginTop: 75,
    }
})

export default LandingLogo