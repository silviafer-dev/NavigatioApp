
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {AlbumsScreens} from '../screens/AlbumsScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets(); // por IOS

  return (
    <Tab.Navigator
      style={{
        paddingTop,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          //en ios es shadowColor:"transparent"
          elevation: 0,
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'Ch';
              break;
            case 'ContactScreen':
              iconName = 'Co';
              break;
            case 'AlbumsScreens':
              iconName = 'Al';
              break;
          }
          return <Text style={{color: color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsScreens" component={AlbumsScreens} />
    </Tab.Navigator>
  );
};
