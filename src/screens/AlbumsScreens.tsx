import React, {useContext} from 'react';
import {View, Button, Text} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const AlbumsScreens = () => {
  const {
    logout,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screens</Text>
      {isLoggedIn && <Button title="logout" onPress={logout} />}
    </View>
  );
};
