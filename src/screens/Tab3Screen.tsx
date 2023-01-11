import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export default function Tab3Screen() {
  useEffect(() => {
    console.log('Tab3Screen');
  }, []);
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
}
