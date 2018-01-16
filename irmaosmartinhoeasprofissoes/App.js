import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ToastAndroid, AlertAndroid, TouchableHighlight} from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'
//import Number from 'Number'



var background_music = null;

var solution = 0;
var number_sounds = [];
var slots = [];

export default class App extends React.Component {
  constructor(props){
    super(props);

    // background_music = new Sound('professor_bg_music.mp3', Sound.MAIN_BUNDLE, (error) => {
    //   if (error) {
    //     ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
    //     return;
    //   }      
    //   background_music.setVolume(0.6);
    //   background_music.setNumberOfLoops(-1);
    //   background_music.play();
    // });   

    Orientation.lockToLandscape();
    Immersive.on();

    this.populateSounds();
    this.populateSlots();
    this.getSolution();
  }

  generateNumbers = (min, max , differentFrom) => {
    var rand = differentFrom;
      
    while(rand === differentFrom)
    {
      rand = min + (Math.random() * (max-min));
      rand = parseInt(rand);
    }
    
    return rand;
  }

  populateSlots = () =>{
    for(var i=0; i<=2;i++){
      if(i==0)
        this.slots[i] = generateNewNumber(0,10,-1);
      else{
        this.slots[i] = generateNewNumber(0,10,this.slots[i-1]);
      }
    }
  }

  getSolution = () => {
    solution = this.slots[generateNewNumber(0, 2, -1)];
  }
  
  numberSound = () => {
    number_sounds[solution].play(); 
    this.populateSlots();
    this.getSolution();

    var numbers = this.slots;
    ToastAndroid.show("" + numbers[0] + "," + numbers[1] + "," + numbers[3]  + " - " + solution);
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
    padding:10,
    position:"absolute", 
    zIndex:999
    
  }
});
