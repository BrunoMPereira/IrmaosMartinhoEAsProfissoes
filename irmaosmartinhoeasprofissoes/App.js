import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ToastAndroid, AlertAndroid, TouchableOpacity, AppRegistry} from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'


import TeacherActivity from './app/components/TeacherActivity';
import { StackNavigator} from 'react-navigation'



const NavigationApp = StackNavigator(
  {
    TeacherActivity: { 
      screen: TeacherActivity,
    }
  },
  {
    initialRouteName: 'TeacherActivity',
    headerMode:'none'
  }
);


export default class App extends React.Component {
  render(){
    return <NavigationApp />;
  }
}