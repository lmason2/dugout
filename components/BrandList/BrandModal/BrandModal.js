// Opened by tapping the BrandCard

import { View, Modal, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../../../theme';
import * as Icon from 'react-native-feather'
import QtySelector from '../../QtySelector/QtySelector';

const BrandModal = ({ isModalVisible, setIsModalVisible }) => {
    return (
        <View>
            <Modal
                animationType='slide'
                visible={isModalVisible}
                transparent={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText} className='font-bold'>Select an option:</Text>
                        <View>
                          <View className='flex-row gap-4'>
                            <TouchableOpacity className='w-48 shadow bg-white rounded-full px-4 py-2 mb-2 flex-row'>
                                <Text className='flex-1'>Coors Regular</Text>
                                <Text className='italic'> $3.50</Text>
                            </TouchableOpacity>
                            <QtySelector />
                          </View>
                          <View className='flex-row gap-4'>
                            <TouchableOpacity className='w-48 shadow bg-white rounded-full px-4 py-2 mb-2 flex-row'>
                                <Text className='flex-1'>Coors Light</Text>
                                <Text className='italic'> $3.50</Text>
                            </TouchableOpacity>
                            <QtySelector />
                          </View>
                          <View className='flex-row gap-4'>
                              <TouchableOpacity className='w-48 shadow bg-white rounded-full px-4 py-2 mb-2 flex-row'>
                                  <Text className='flex-1 w-24'>Coors Lime</Text>
                                  <Text className='italic'> $3.90</Text>
                              </TouchableOpacity>
                              <QtySelector />
                          </View>
                        </View>
                        
                        <Pressable
                            className='mt-2 px-10'
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setIsModalVisible(!isModalVisible)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default BrandModal