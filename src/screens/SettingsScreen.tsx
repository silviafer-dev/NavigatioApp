import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  //Hook para crear un header y en Ios el titulo no se quede pegado al top
  // No es un problema en android
  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
