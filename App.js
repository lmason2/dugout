import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import { SafeAreaView, Text } from 'react-native';
import * as Font from 'expo-font';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

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
    <Navigation />
  )
}

export default App