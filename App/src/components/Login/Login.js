import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component { 
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={ styles.container }> 
                <View style={ styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../../resources/images/logo.png')} 
                    />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 5,
        opacity: 0.8,
    },
    logo: {
        width: 300,
        height:106,
    }
});