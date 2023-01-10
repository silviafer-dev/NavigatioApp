import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';
// import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
// import {StackNavigator} from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
    </NavigationContainer>
  );
};

export default App;
