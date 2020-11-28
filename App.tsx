import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/nav.routes';

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </>
  )
}

export default App;
