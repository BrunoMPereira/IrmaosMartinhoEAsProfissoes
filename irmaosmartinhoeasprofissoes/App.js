import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ToastAndroid, AlertAndroid, TouchableOpacity, AppRegistry} from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'


import TeacherActivity from './app/components/TeacherActivity';
import MainMenuActivity from './app/components/MainMenuActivity';

import { StackNavigator} from 'react-navigation'



const NavigationApp = StackNavigator(
  {
    MainMenuActivity: { 
      screen: MainMenuActivity,
    },

    TeacherActivity: { 
      screen: TeacherActivity,
    }
    
  },
  {
    initialRouteName: 'MainMenuActivity',
    headerMode:'none'
  }
);


export default class App extends React.Component {
  render(){
    return <NavigationApp />;
  }
}