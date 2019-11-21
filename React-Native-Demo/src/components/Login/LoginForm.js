import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
// import {
//     StackNavigator,
// } from 'react-navigation';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="User name or Email"
                    returnKeyType="next"
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    maxLength={16}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}

                    style={styles.input} />
                <TextInput
                    placeholder="password"
                    returnKeyType="go"
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                    maxLength={16}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    style={styles.input} />
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => {
                        if (this.state.email == "") {
                            //email address cannot be null
                            ToastAndroid.show('Please enter Email or Mobile number', ToastAndroid.SHORT)
                        } else
                            if (this.state.password == "") {
                                //password cannot be null
                                ToastAndroid.show('Please enter your password', ToastAndroid.SHORT)
                            } else if (!this.validateEmail(this.state.email)) {
                                // not a valid email
                                ToastAndroid.show('Not valid Email Address ' + this.state.email, ToastAndroid.SHORT)
                            } else {
                                // valid email
                                ToastAndroid.show('All forms are valid', ToastAndroid.SHORT)
                            }
                    }
                    }>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
        margin: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f4b350',
        paddingVertical: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        color: 'black'
    }
})