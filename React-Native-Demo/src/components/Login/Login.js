import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginFrom from './LoginForm'
export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.text}>Welcome</Text>
                    <Image style={styles.logo} source={require('../images/krunal.jpg')} />
                </View>
                <View style={styles.formContainer}>
                    <LoginFrom />
                </View>
            </KeyboardAvoidingView>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
        margin: 20,
    },
    logo: {
        height: 100,
        width: 100,
    }
})
