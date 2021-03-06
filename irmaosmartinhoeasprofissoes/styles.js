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
      zIndex:900, 
      position:'absolute'
    },
    pause_button:{
      marginLeft:580, 
      marginTop:10,
      position:'absolute',
      zIndex:999
    },
    back_button:{
      marginLeft:10, 
      marginTop:10,
      position:'absolute',
      zIndex:999
    },

    main_menu_play:{
      marginLeft:262, 
      marginTop:215,
      position:'absolute',
      zIndex:999
    },
    
    main_menu_settings:{
      marginLeft:578, 
      marginTop:300,
      position:'absolute',
      zIndex:999
    },
    mini_game_button:{
      width: 95, 
      height: 210, 
      position: "relative",
      marginLeft:30
    }



  });

module.exports = styles;