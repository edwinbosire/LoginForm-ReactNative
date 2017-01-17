import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
 
export default class LoginForm extends Component { 
    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={styles.input} 
                    placeholder="Username or email"
                    placeholderTextColor="rgba(149, 165, 166,0.7)"
                />
                <TextInput style={styles.input} 
                    placeholder="Password"
                    placeholderTextColor="rgba(149, 165, 166,0.7)"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> LOGIN </Text>
                </TouchableOpacity >
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(236, 240, 241,1.0)',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    button: {
        paddingVertical: 15,
        justifyContent: 'center',
        backgroundColor: "#E30613"
    },
    buttonText: {
        textAlign: 'center',
        fontWeight:'700',
        color: '#FFF'
    }
});