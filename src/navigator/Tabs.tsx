
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
// import Tab3Screen from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

const BottomTabsAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabsAndroid.Navigator
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'TopTabNavigator':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
          }
          return <Text style={{color: color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabsAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />

      <BottomTabsAndroid.Screen
        name="TopTabNavigator"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabsAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsAndroid.Navigator>
  );
};

const BottomTabIos = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottomTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
          }
          return <Text style={{color: color}}>{iconName}</Text>;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabIos.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />

      <BottomTabIos.Screen
        name="TopTabNavigator"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIos.Navigator>
  );
};
