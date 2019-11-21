import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

import TimeFormatter from 'minutes-seconds-milliseconds';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            runningTime: '',
            countdownTime: '',

            isRunning: false,
            mainTimer: null,
            lapTimer: null,
            mainStarterTime: null,
            lapStarterTime: null
        }
    }


    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.timerText}>
                    {TimeFormatter(this.state.lapTimer)}
                </Text>
        <TouchableOpacity onPress={this.handleLoopReset.bind(this)}>
                    <Text>{(this.state.mainStarterTime && !this.state.isRunning) ? 'Reset' : 'Lap'}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleStartStop.bind(this)}>
                    <Text>{(this.state.isRunning) ?  'Stop':'Start' }</Text>
                </TouchableOpacity>
                <Text style={styles.timerText}>
                {TimeFormatter(5400000-this.state.lapTimer)}
        </Text>

                

            </View>
        );
    }

    handleLoopReset() {
        let { isRunning, mainStarterTime } = this.state;
        // case reset button clicked
        if (mainStarterTime && !isRunning) {
            this.setState({
                mainStarterTime: null,
                lapStarterTime: null,
                mainTimer: 0,
                lapTimer: 0
            })
        }
    }
    handleStartStop() {
        let { isRunning, firstTime, mainTimer, lapTimer } = this.state;

        // stop button clicked
        if (isRunning) {
            clearInterval(this.interval);
            this.setState({
                isRunning: false
            })
            return;
        }

        //start button clicked
        this.setState({
            mainStarterTime: new Date(),
            lapStarterTime: new Date(),
            isRunning: true
        })

        this.interval = setInterval(() => {
            this.setState({
                mainTimer: new Date() + this.state.mainStarterTime + mainTimer,
                lapTimer: new Date() - this.state.lapStarterTime + lapTimer
            });
        }, 1000);
    }

    componentWillUnmount() {
        timer.clearTimeout(this);
    }

    showMsg() {
        this.setState({ showMsg: true }, () => timer.setTimeout(
            this, 'hideMsg', () => this.setState({ showMsg: false }), 5000
        ));
    }
}

const timer = require('react-native-timer');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    timerText: {
        // textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
