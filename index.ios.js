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

export default class LoginForm extends Component {
    render() {
        return ( 
            <View style = { styles.container } >
                <Text style = { styles.welcome } > Intelligent | Balanced | Concise </Text>
                <Text style = { styles.instructions } >
                    Use your week.com login info
                </Text> 
                
            </View>
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