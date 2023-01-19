import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(iconName);
      }}>
      <Icon name={iconName} size={50} color={colors.primary} />
    </TouchableOpacity>
  );
};
