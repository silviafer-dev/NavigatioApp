import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';

import type {StackNavigationProp} from '@react-navigation/stack';

type StackParamList = {
  Pagina3Screen: undefined;
};
// https://reactnavigation.org/docs/typescript/

export const Pagina2Screen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atrás', // para IOS, tambien string vacío
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => {
          navigation.navigate('Pagina3Screen');
        }}
      />
    </View>
  );
};
