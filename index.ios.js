/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Login from './src/components/Login/Login';

export default class LoginForm extends Component {
    render() {
        return ( 
            <Login />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E30613',
    },
    welcome: {
        textAlign: 'center',
        margin: 10,
        color: 'white',
        fontSize: 22,
        fontWeight: "700"
    },
    instructions: {
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 5,
        opacity: 0.8,
    },
});

AppRegistry.registerComponent('LoginForm', () => LoginForm);