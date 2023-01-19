import React, {useContext} from 'react';
import {View, Button, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contact Screen</Text>
      {!isLoggedIn && <Button title="sign in" onPress={signIn} />}
    </View>
  );
};
