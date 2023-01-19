import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export default function Tab1Screen() {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 20}}>
      <Text style={styles.title}> Iconos </Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="male-female-outline" />
        <TouchableIcon iconName="skull" />
        <TouchableIcon iconName="star-half-outline" />
        <TouchableIcon iconName="water-outline" />
        <TouchableIcon iconName="logo-octocat" />
        <TouchableIcon iconName="logo-instagram" />
      </Text>
    </View>
  );
}
