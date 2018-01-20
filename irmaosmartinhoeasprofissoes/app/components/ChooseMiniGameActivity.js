import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, AlertAndroid, TouchableOpacity, NativeModules } from 'react-native';
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import Immersive from 'react-native-immersive'

const { intentstarter } = NativeModules;


var styles = require('../../styles');
var background_sfx = null;


export default class ChooseMiniGameActivity extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Orientation.lockToLandscape();
        Immersive.on();
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.back_button}
                    onPress={() => navigate('MainMenuActivity', {})}>
                    <Image
                        style={{ width: 50, height: 50, position: "relative" }}
                        source={require('../../assets/images/back.png')}>
                    </Image>
                </TouchableOpacity>

                <Image
                    style={{ width: 640, height: 375, marginLeft: 0, zIndex: 0 }}
                    source={require('../../assets/images/menus_background.png')}>
                </Image>

                <View style={{ flexDirection: 'row' , marginTop:80, zIndex:999, position:'absolute'}}>

                    <TouchableOpacity
                        onPress={() => navigate('MainMenuActivity', {})}>
                        <Image
                            style={styles.mini_game_button}
                            source={require('../../assets/images/jose_bombeiro.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigate('MainMenuActivity', {})}>
                        <Image
                            style={styles.mini_game_button}
                            source={require('../../assets/images/jose_pasteleiro.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigate('TeacherActivity', {})}>
                        <Image
                            style={styles.mini_game_button}
                            source={require('../../assets/images/jose_professor.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigate('MainMenuActivity', {})}>
                        <Image
                            style={styles.mini_game_button}
                            source={require('../../assets/images/jose_piloto.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigate('MainMenuActivity', {})}>
                        <Image
                            style={styles.mini_game_button}
                            source={require('../../assets/images/jose_pintor.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
