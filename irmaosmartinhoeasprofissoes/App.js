import React, {Component} from 'react';
import {StyleSheet,Button, Text, View, Image, ToastAndroid, AlertAndroid, TouchableOpacity, AppRegistry,TouchableNativeFeedback, NativeModules} from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'


import TeacherActivity from './app/components/TeacherActivity';
import MainMenuActivity from './app/components/MainMenuActivity';

import { StackNavigator} from 'react-navigation'

const { ActivityStarter } = NativeModules;

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
  action() {
    ActivityStarter.credits();
  }

  render(){
    // return <NavigationApp />;
    return <Button onPress={this.action.bind(this)} title="TAP HERE">
  </Button>
  }
}