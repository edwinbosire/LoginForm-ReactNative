import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Login extends Component { 
    render() {
        return (
            <View style={ styles.container }> 
            <View style={ styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require('../../../resources/images/logo.png')} 
                />
            </View>
            <View style={styles.formContainer}>
            </View>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        backgroundColor: '#E30613',
        opacity: 0.5,
        height: 100,
    },
    instructions: {
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 5,
        opacity: 0.8,
    },
    logo: {
        width: 300,
        height:106
    }
});