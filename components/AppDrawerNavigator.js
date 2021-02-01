import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
  import {createDrawerNavigator} from 'react-navigation-drawer';
import{AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator= createDrawerNavigator({
    Home:{
        screen: AppTabNavigator
    },
    Setting:{
        screen: SettingScreen
    }
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: 'Home'
}
)