import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid} from 'react-native';
export default class Number extends React.Component {

    constructor(props){
        super(props);
        this.state =
        {
            value: props.value, 
        }
    }

    render(){
        return (
            <View>
                <TouchableOpacity 
                    onPress={this.props.pressFunction}>
                    <Image 
                    style={styles.slot} 
                    source={this.props.source}></Image>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slot:
    {
      width: 78,
      height: 91, 
      marginLeft:40,
      marginTop:5
    }
  });