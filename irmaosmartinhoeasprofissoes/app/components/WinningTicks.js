import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

var ticks = [];

export default class WinningTicks extends React.Component {

    render(){
        ticks = [];

        for(var i = 0; i < this.props.ticksNumber; i++)
        {
            ticks.push((
                <Image key={i} source={require('../../assets/images/score_tick.png')} style={styles.scoreTick}/>
            ))
        }

        return (
            <View style={styles.container}>
                {
                    ticks.map((img, i) => {
                        return img;
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: 'row'  
    },
    scoreTick:
    {
      width: 50,
      height: 50,
      marginLeft: 10,
      marginTop: 10,
      zIndex: 10
    }
});