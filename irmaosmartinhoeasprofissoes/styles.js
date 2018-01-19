import {StyleSheet} from 'react-native';
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

module.exports = styles;