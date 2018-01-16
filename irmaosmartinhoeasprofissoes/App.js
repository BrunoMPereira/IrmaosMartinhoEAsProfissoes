import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ToastAndroid, AlertAndroid, TouchableHighlight} from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'

var background_music = null;

var number_sounds = [];
var current_number = 0;

export default class App extends React.Component {
  constructor(props){
    super(props);

    background_music = new Sound('professor_bg_music.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
        return;
      }      
      background_music.setVolume(0.6);
      background_music.setNumberOfLoops(-1);
      background_music.play();
    });   

    Orientation.lockToLandscape();
    Immersive.on();


    this.populateSounds();
    this.generateNewNumber();
  }

  generateNewNumber = () => {
    var min = 0;
    var max = 10;

    var rand = current_number;
      
    while(rand === current_number)
    {
      rand = min + (Math.random() * (max-min));
    }
    
    current_number = rand;
  }
  
  numberSound = () => {
    number_sounds[current_number].play();
    //current_number = current_number++ % 10;
    generateNewNumber();
  }

  populateSounds = () =>{
    for(var i=0; i <= 10; i++){
      number_sounds[i] = new Sound('number_' + i + '.mp3', Sound.MAIN_BUNDLE, (error) =>{
        if(error){
          return;
        }
      });
    };
  }

  render() {
    return (
      <View style={styles.container}>
       <TouchableHighlight style={styles.number_button} onPress={() => this.numberSound()}>
            <Text style={{fontSize:25}}>DIZ O NÚMERO</Text>
          </TouchableHighlight>
          
        <Image 
          style={{width: 600, height: 370}}
          source={require('./assets/images/professor_background.png')}></Image>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number_button:{
    backgroundColor:'#FFF', 
    marginTop:10, 
    padding:10,
    position:"absolute", 
    zIndex:999
    
  }
});
