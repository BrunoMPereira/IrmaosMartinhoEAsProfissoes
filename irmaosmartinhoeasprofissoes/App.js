import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ToastAndroid, AlertAndroid, TouchableOpacity} from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'
import Number from './Number'


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


var solution = 0;
var number_sounds = new Array(10);
var slots = new Array(3);


var background_sfx = null;

var rightAnswer1_sfx = null;
var rightAnswer2_sfx = null;

var wrongAnswer1_sfx = null;
var wrongAnswer2_sfx = null;

var instruction = null;
var hint = null;

export default class App extends React.Component {
  constructor(props){
    super(props); 
    rightAnswer1_sfx = new Sound('boa.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
        return;
      }
      rightAnswer1_sfx.setVolume(1);    
      rightAnswer1_sfx.setNumberOfLoops(0);  
    });     

    rightAnswer2_sfx = new Sound('parabens.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
        return;
      }
      rightAnswer2_sfx.setVolume(1);    
      rightAnswer2_sfx.setNumberOfLoops(0);  
    });     

    wrongAnswer1_sfx = new Sound('tentadenovo.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
        return;
      }
      wrongAnswer1_sfx.setVolume(1);    
      wrongAnswer1_sfx.setNumberOfLoops(0);       
    });  

    wrongAnswer2_sfx = new Sound('naofoi.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
        return;
      }
      wrongAnswer2_sfx.setVolume(1);    
      wrongAnswer2_sfx.setNumberOfLoops(0);       
    });  

    instruction = new Sound('carrega2.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
        return;
      }
      instruction.setVolume(1);    
      instruction.setNumberOfLoops(0);       
    });  

    hint = new Sound('toca2.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
        return;
      }
      hint.setVolume(1);    
      hint.setNumberOfLoops(0);       
    }); 
  } 
  
  componentWillMount(){
    Orientation.lockToLandscape();
    Immersive.on();

     background_sfx = new Sound('professor_bg_music.mp3', Sound.MAIN_BUNDLE, (error) => {
       if (error) {
         ToastAndroid.show("ERRO AO CARREGAR", ToastAndroid.SHORT);
         return;
       }      
       background_sfx.setVolume(0.34);
       background_sfx.setNumberOfLoops(-1);
       background_sfx.play();
       setTimeout(() => {instruction.play()},500)
       setTimeout(() => {this.newGame()},3400)

     });
    
    this.populateSounds();
  }

  componentWillUnmount(){
    background_sfx.release();
    rightAnswer1_sfx.release();
    rightAnswer2_sfx.release();
    hint.release();
    instruction.release();
    wrongAnswer1_sfx.release();
    wrongAnswer2_sfx.release();
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
    this.forceUpdate();
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
    {
      var random = this.generateNewNumber(100);
      if(random < 49)
        wrongAnswer1_sfx.play();
      else
        wrongAnswer2_sfx.play();   

      setTimeout(() => {
        random = this.generateNewNumber(100);
        if(random < 40)
          hint.play()
        },2300)
    }

    else{
      var random = this.generateNewNumber(100);
      if(random < 49)
        rightAnswer1_sfx.play();
      else
        rightAnswer2_sfx.play();
      setTimeout(() => {this.newGame()},1700)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width: 600, height: 370, marginLeft:19}}
          source={require('./assets/images/professor_background.png')}>
        </Image>

       <TouchableOpacity style={styles.say_again_male} onPress={() => this.numberSound()}>
          <Image 
                  style={{width: 80, height: 200, position:"relative"}}
                  source={require('./assets/images/martinho_professor.png')}>
          </Image> 
       </TouchableOpacity>

       <TouchableOpacity style={styles.say_again_female} onPress={() => this.numberSound()}>
          <Image 
                  style={{width: 90, height: 200, position:"relative"}}
                  source={require('./assets/images/maria_professora.png')}>
          </Image> 
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
  say_again_male:{    
    position:"absolute", 
    marginTop:179,
    marginLeft:40,
    zIndex:0
  },
  say_again_female:{    
    position:"absolute", 
    marginTop:186,
    marginLeft:510,
    zIndex:0
  },
  slots:{
    flexDirection:'row',
    flex:3, 
    marginTop:120,
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
