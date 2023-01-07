import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';

import type {StackNavigationProp} from '@react-navigation/stack';

type StackParamList = {
  Pagina3Screen: undefined;
};
// https://reactnavigation.org/docs/typescript/

export const Pagina2Screen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();


  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => {
          navigation.navigate('Pagina3Screen');
        }}
      />
    </View>
  );
};
