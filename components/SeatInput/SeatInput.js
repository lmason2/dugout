import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const SeatInput = ({ navigation }) => {
    const [seatNumberInput, setSeatNumberInput] = useState(null)

    const handleDonePressed = () => {
        // alert(`Seat number provided: ${seatNumberInput}`)
        navigation.push('Home')
    }

    const updateSeatNumberValue = (seatNumber) => {
        setSeatNumberInput(seatNumber)
    }
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Your Seat #"
            textAlign="center"
            onChange={(event) => updateSeatNumberValue(event.nativeEvent.text)}
            onSubmitEditing={handleDonePressed}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 10,
      borderRadius: 8,
      width: 200,
      textAlign: 'center',
      fontSize: 22,
      marginTop: 20,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      paddingLeft: 10,
      elevation: 3,
    },
  });

export default SeatInput