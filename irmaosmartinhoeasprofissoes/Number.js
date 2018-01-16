import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
export default class Number extends React.Component {

    constructor(props){
        super(props);

        this.setState({
            value: 0          
        })
    }

    render(){
        return (<Image source={this.props.imageURL}> </Image>);
    }
}