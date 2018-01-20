import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, AlertAndroid, TouchableOpacity, NativeModules } from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'

const { intentstarter } = NativeModules;


var styles = require('../../styles');
var background_sfx = null;


export default class TeacherActivity extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Orientation.lockToLandscape();
        Immersive.on();

        background_sfx = new Sound('mainmenu.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                return;
            }
            //background_sfx.setVolume(0.34);
            //background_sfx.setNumberOfLoops(-1);
            //background_sfx.play();
        });
    }


    render() {
        return (
            <View style={styles.container}>
                 <Image
                    style={{ width: 640, height: 375, marginLeft:0, zIndex:0 }}
                    source={require('../../assets/images/mainMenu.png')}>
                </Image>


                <TouchableOpacity style={styles.main_menu_play} onPress={() => {}}>
                    <Image
                        style={{ width: 130, height: 50, position: "relative" }}
                        source={require('../../assets/images/play.png')}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.main_menu_settings} 
                onPress={() => { intentstarter.credits()}}>
                    <Image
                        style={{ width: 59, height: 57, position: "relative" }}
                        source={require('../../assets/images/settings.png')}>
                    </Image>
                </TouchableOpacity>

            </View>
        );
    }
}
