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

export default class Signup extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        name:'',
        email: '',
        password: ''
    }

    onSignin = () => {
        this.props.navigation.navigate('SignIn', {});
    }
    
    Continue = () => {
        this.props.navigation.navigate('HomePage',{})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={[ styles.loginButton2 ]} onPress={() => this.onSignin()}>
                        <Text style={[styles.login],[styles.setcolor]}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.loginButton1 ,{marginLeft:25}]}>
                        <Text style={[styles.login]}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={[styles.inputs]}
                        placeholder="Name"
                        keyboardType="email-address"
                        value={this.state.name}
                        underlineColorAndroid='transparent'
                        onChangeText={(name) => this.setState({ name })} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={this.state.email}
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        value = {this.state.password}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="ReEnter Password"
                        secureTextEntry={true}
                        value = {this.state.password}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View styles={styles.continue}>
                <TouchableHighlight style={[styles.continueContainer, styles.loginButton]} onPress={() => this.Continue()}>
                    <Text style={styles.loginText}>CONTINUE</Text>
                </TouchableHighlight>
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
        marginTop:80,
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
