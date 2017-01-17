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
                    <Text style={styles.instructions}> Use your Thweek.com credentials to login</Text>
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
        color: 'rgba(127, 140, 141,1.0)',
        marginBottom: 30,
    },
    logo: {
        width: 370,
        height:122,
    }
});