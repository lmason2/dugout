import { StyleSheet, Text } from 'react-native'
import React, { useMemo, useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RestaurantBottomSheet = () => {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['6%', '100%'], [])

    return (
        <GestureHandlerRootView>
            <BottomSheet
                index={1}
                ref={bottomSheetRef}
                snapPoints={snapPoints} 
                enablePanDownToClose={false}
                style={styles.sheetContainer}
            >
            </BottomSheet>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    sheetContainer: {
      backgroundColor: '#fff',
      elevation: 8,
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 4,
      shadowOffset: {
        width: 1,
        height: 1
      },
    }
  });

export default RestaurantBottomSheet