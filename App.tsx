import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';
// import {Tabs} from './src/navigator/Tabs';
// import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
// import {StackNavigator} from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};
// ({children}: {children: JSX.Element})
const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
