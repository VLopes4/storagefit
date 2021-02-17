import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AccessProvider } from './src/context/access';
import Routes from './src/routes/index.routes';
import { MenuProvider } from 'react-native-popup-menu';


const App = () => {

  return (
    <MenuProvider>
      <AccessProvider>
        <StatusBar barStyle="dark-content" backgroundColor="white"/>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </AccessProvider>
    </MenuProvider>
  )
}

export default App;
