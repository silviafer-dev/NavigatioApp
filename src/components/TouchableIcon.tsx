import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={() => {
        changeFavoriteIcon(iconName);
      }}>
      <Icon name={iconName} size={50} color={colors.primary} />
    </TouchableOpacity>
  );
};
