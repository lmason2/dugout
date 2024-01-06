import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import { SafeAreaView, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store'
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch(err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    }
  }

  useEffect(() => {
    async function loadFont() {
        await Font.loadAsync({
          'custom-font': require('./assets/fonts/JockeyOne-Regular.ttf'),
        });
        setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return (
      <SafeAreaView className='flex-row items-center'>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <ClerkProvider publishableKey={'pk_test_bG92ZWQtY2FyZGluYWwtNTQuY2xlcmsuYWNjb3VudHMuZGV2JA'} tokenCache={tokenCache}>
      <Navigation />
    </ClerkProvider>
  )
}

export default App