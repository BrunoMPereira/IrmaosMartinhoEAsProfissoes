import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

var onPause = false;
export default class Pause extends React.Component {

    constructor(props){
        super(props);
        this.state =
        {
            onPause: props.onPause
        }
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.onPause = nextProps.onPause;
    }

    render(){
        if (this.state.onPause) {
            return (
                <ImageBackground 
                    source={require('../../assets/images/teacher_gameover_panel.png')}
                    style={{ width: 520, height: 310, marginLeft: 57, marginTop: 30, zIndex: 999, position: 'absolute' }}>
                
                    <TouchableOpacity 
                        onPress={this.props.pressResumeFunction}>
                        <Image 
                        style={styles.restartButton} 
                        source={require('../../assets/images/resume.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={this.props.pressExitFunction}>
                        <Image 
                        style={styles.exitButton} 
                        source={require('../../assets/images/exit.png')}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            );
        }
        else
        {
           return null;
        }
    }
}

const styles = StyleSheet.create({
    restartButton:{
        zIndex: 990, 
        width: 160,
        height: 60,
        marginTop: 150,
        marginLeft: 170,
        position: 'relative'
    },
    exitButton:{
        zIndex: 990, 
        width: 160,
        height: 60,
        marginTop: 15,
        marginLeft: 170,
        position: 'relative' 
    },
});