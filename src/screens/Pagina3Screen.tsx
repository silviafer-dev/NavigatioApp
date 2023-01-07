import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 3</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a Pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
