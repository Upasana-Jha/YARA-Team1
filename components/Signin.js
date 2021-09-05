import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
//import { getUsersByEmail, addUsers } from '../services/Users';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

export default class Signin extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        email: '',
        password: ''
    }

    

    onLoginButton = () => {   
            this.props.navigation.navigate('HomePage', {});           
    }
    
    onSignup = () => {
        this.props.navigation.navigate('SignUp', {});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={[ styles.loginButton1 ]}>
                        <Text style={[styles.login]}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.loginButton2 ]} onPress={() => this.onSignup()} >
                        <Text style={[[styles.login],[styles.setcolor],{marginStart:10}]}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.inputContainer,{marginTop:25}]}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={this.state.email}
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={[styles.inputContainer,{marginTop:20}]}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        value = {this.state.password}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View styles={styles.continue}>
                <TouchableHighlight style={[styles.continueContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>CONTINUE</Text>
                </TouchableHighlight>
                </View>

                <View>
                    <Text style={styles.forgotPassword}>FORGOT PASSWORD</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    continue: {
        marginTop: 200,
        
    },
    inputContainer: {
        width: 350,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        marginTop: 29,
        height: 45,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flex: 1,
        color: 'black',
        fontSize: 18,
        fontFamily:'Montserrat-Regular',
        fontWeight:'400'
    },
   
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    continueContainer: {
        marginTop: 70,
        height: 50,
        width: 300,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6200EE",
    },
    loginButton1: {
        backgroundColor: "#6200EE",
        borderRadius: 60,
        height:35,
        width:85,
        marginRight: 25,
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Montserrat-Bold',
    },
    loginButton2: {
        borderRadius: 60,
        
        height:35,
        width:85,
       
    },
    login: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        fontFamily:'Montserrat-Bold',
    },
    loginText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        fontFamily:'Montserrat-Bold',
    },
    forgotPassword:{
        padding: 40,
        fontSize: 14,
        color: "#6200EE",
        fontFamily:'Montserrat-SemiBold',
    },
    setcolor:{
        color:'#B2BEB5',
        fontSize:14,
        marginTop:8,
        marginLeft:18,
        fontFamily:'Montserrat-Regular',
        fontWeight:'500'
    },
    loginButton:{
        width:380,
    }
});
