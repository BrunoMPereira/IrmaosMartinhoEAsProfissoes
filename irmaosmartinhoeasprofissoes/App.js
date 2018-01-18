import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ToastAndroid, AlertAndroid, TouchableOpacity} from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'
import Number from './Number'



var background_music = null;

var solution = 0;
var number_sounds = new Array(10);
var slots = new Array(3);

var images_source = [
  require('./assets/images/numbers/numero0.png'),
  require('./assets/images/numbers/numero1.png'),
  require('./assets/images/numbers/numero2.png'),
  require('./assets/images/numbers/numero3.png'),
  require('./assets/images/numbers/numero4.png'),
  require('./assets/images/numbers/numero5.png'),
  require('./assets/images/numbers/numero6.png'),
  require('./assets/images/numbers/numero7.png'),
  require('./assets/images/numbers/numero8.png'),
  require('./assets/images/numbers/numero9.png'),
  require('./assets/images/numbers/numero10.png'),
]

export default class App extends React.Component {
  constructor(props){
    super(props); 
  } 
  
  componentWillMount(){
    // background_music = new Sound('professor_bg_music.mp3', Sound.MAIN_BUNDLE, (error) => {
    //   if (error) {
    //     ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
    //     return;
    //   }      
    //   background_music.setVolume(0.4);
    //   background_music.setNumberOfLoops(-1);
    //   background_music.play();
    // });
    
    Orientation.lockToLandscape();
    Immersive.on();

    this.populateSounds();

    this.newGame();
  }

  componentWillUnmount(){
    background_music.stop();
  }

  generateNewNumber = (max) => {
    return parseInt(Math.random()*(max+1));
  }

  populateSlots = () =>{
      slots[0] = this.generateNewNumber(10);
      
      var auxrandom = this.generateNewNumber(10);
      while(auxrandom===slots[0])
      auxrandom = this.generateNewNumber(10);

      slots[1] = auxrandom;

      auxrandom = this.generateNewNumber(10);

      while(auxrandom===slots[0] || auxrandom === slots[1])
        auxrandom = this.generateNewNumber(10);
      
      slots[2] = auxrandom;
  }  

  getSolution = () => {
    var random = this.generateNewNumber(100);
    if(random <33)
      random = 0;
    else if(random >= 33 && random<=66)
      random = 1;
    else
      random = 2;

    solution = slots[random];
  }
  
  numberSound = () => {
    number_sounds[solution].play(); 
  }

  newGame = ()  => {
    this.populateSlots();
    this.getSolution();
    this.numberSound();
  }

  populateSounds = () =>{
    for(var i=0; i <= 10; i++){
      number_sounds[i] = new Sound('number_' + i + '.mp3', Sound.MAIN_BUNDLE, (error) =>{
        if(error){
          return;
        }
      });
      number_sounds[i].setVolume(1);
    }
  }

  onNumberPressed(number){
    if(number!=solution)
      ToastAndroid.show("ERRASTE!", ToastAndroid.SHORT);
    else{
      ToastAndroid.show("ACERTASTE!", ToastAndroid.SHORT);
      this.newGame();
      this.forceUpdate();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width: 600, height: 370, marginLeft:19}}
          source={require('./assets/images/professor_background.png')}>
        </Image>

       <TouchableOpacity style={styles.say_again} onPress={() => this.numberSound()}>
            {/* <Text style={{fontSize:25}}>Repetir Número</Text> */}
            { <Image 
              style={{width: 80, height: 80, position:"relative"}}
              source={require('./assets/images/speak.png')}></Image> }


       </TouchableOpacity>
          

        <View style={styles.slots}>
          <Number
            pressFunction={() => this.onNumberPressed(slots[0])}
            value={slots[0]}
            source={images_source[slots[0]]}>
          </Number>

          <Number
            pressFunction={() => this.onNumberPressed(slots[1])}
            value={slots[1]}
            source={images_source[slots[1]]}>
          </Number>

          <Number
            pressFunction={() => this.onNumberPressed(slots[2])}
            value={slots[2]}
            source={images_source[slots[2]]}>
          </Number> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ab5c7',
    
  },
  say_again:{    
    position:"absolute", 
    marginTop:195,
    marginLeft:40,
    zIndex:0
  },
  slots:{
    flexDirection:'row',
    flex:3, 
    marginTop:180,
    marginLeft:111.5,
    zIndex:990, 
    position:'absolute'
  },
  slot:
  {
    width: 80,
    height: 80, 
    marginLeft:91,
    zIndex:990
  }
});
