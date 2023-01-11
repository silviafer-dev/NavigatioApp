import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export default function Tab1Screen() {
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  );
}
