import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Login'
    };
    state = {
        email: 'admin',
        password: 'admin'
    }

    onLoginButton = () => {
      
            this.props.navigation.navigate('SignIn', { name:this.state.email});
           
    }
    
    onSignUpButton = () => {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return (
            <View>
                <View>
                    <Image 
                        source={{uri:"https://training.pyther.com/yara/15-day/03-BookStore/BookStore.jpg"}}
                        style={{height:340, width:390, marginTop:49,marginLeft:0}}
                    />
                </View>
                <View>
                    <Text style={styles.baseText}>Welcome</Text>
                    <Text style={styles.base2Text}>to Book Store</Text>
                    <Text style={styles.base1Text}>Let's get started!</Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <TouchableHighlight style={{flex:1}} onPress={() => this.onLoginButton()}>
                            <Text style={styles.loginText}></Text>
                        </TouchableHighlight>       
                        <TouchableHighlight style={{flex:3,
                            height: 70,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 250,
                            borderRadius: 0,
                            marginTop:40,
                            backgroundColor: "#9599B3"
                            }} onPress={() => this.onLoginButton()}>
                            <Text style={styles.loginText}>SIGN IN</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{flex:1,flexDirection:'row',marginTop:70}}>
                        <TouchableHighlight style={{flex:1}} onPress={() => this.onLoginButton()}>
                            <Text style={styles.loginText}></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{flex:3,
                            height: 100,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 250,
                            marginTop:40,
                            borderRadius: 0,
                            backgroundColor: "#6200EE"
                            }} onPress={() => this.onSignUpButton()}>
                            <Text style={styles.loginText}>SIGN UP</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText:{
        marginTop:20,
        fontFamily: "Montserrat-Bold",
        fontSize:35,
        marginHorizontal:105,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6200EE',
        marginBottom: 0,
    },
    base2Text:{
        marginTop:5,
        fontFamily: "Montserrat-Bold",
        marginHorizontal:70,
        fontSize:35,
        
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6200EE',
        marginBottom: 10,
    },
    base1Text:{
        marginTop:35,
        fontFamily: "Montserrat-Regular",
        fontSize:13,
        marginLeft:140,
        fontWeight:"400",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6200EE',
        marginBottom: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        borderRadius: 0,
    },
    buttonContainer1: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        borderRadius: 0,
    },
    loginButton: {
        backgroundColor: "#9599B3",
        justifyContent: 'center',
    },
    loginButton1: {
        backgroundColor: "#6200EE",
    },
    loginText: {
        color: 'white',
        fontWeight:"500",
        marginEnd:100,
        fontSize:15,
        fontFamily: "Montserrat-Regular"
    },
    abc: {
        marginTop:25,
        justifyContent: 'center',
        marginLeft:170,   
    },
    abc1: {
        marginTop:0,
        justifyContent: 'center',
        marginLeft:170,   
    },
});
