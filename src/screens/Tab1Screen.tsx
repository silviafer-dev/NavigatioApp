import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Tab1Screen() {
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 20}}>
      <Text style={styles.title}> Iconos </Text>
      <Text>
        <Icon name="airplane-outline" size={50} color={colors.primary} />
        <Icon name="male-female-outline" size={50} color={colors.primary} />
        <Icon name="skull" size={50} color={colors.primary} />
        <Icon name="star-half-outline" size={50} color={colors.primary} />
        <Icon name="water-outline" size={50} color={colors.primary} />
        <Icon name="logo-octocat" size={50} color={colors.primary} />
        <Icon name="logo-instagram" size={50} color={colors.primary} />
      </Text>
    </View>
  );
}
