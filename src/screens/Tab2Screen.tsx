import React, { useEffect } from 'react';
import {Text, View} from 'react-native';

export default function Tab2Screen() {
    useEffect(() => {
      console.log('Tab2Screen');
    }, []);
  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  );
}
