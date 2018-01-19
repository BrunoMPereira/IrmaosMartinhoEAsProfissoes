import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class GameOver extends React.Component {

    constructor(props){
        super(props);
        this.state =
        {
            showGameOver: props.showGameOver, 
        }
    }

    render(){
        if (this.state.showGameOver) {
            return (
                <View>
                    <Image
                        style={{ width: 520, height: 320, marginLeft: 19, zIndex: 920 }}
                        source={require('../../assets/images/teacher_gameover_panel.png')}>
                    </Image>

                    <TouchableOpacity 
                        onPress={this.props.pressRestartFunction}>
                        <Image 
                        style={styles.restartButton} 
                        source={require('../../assets/images/restart.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={this.props.pressExitFunction}>
                        <Image 
                        style={styles.exitButton} 
                        source={require('../../assets/images/exit.png')}></Image>
                    </TouchableOpacity>
                </View>
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
        zIndex: 950, 
        width: 100,
        height: 50  
    },
    exitButton:{
        zIndex: 950, 
        width: 100,
        height: 50  
    },
});