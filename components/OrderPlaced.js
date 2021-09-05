import React, { useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View ,Button, TouchableHighlight} from "react-native";
import { Router } from "express";
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from  'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/AntDesign';
//import { require } from "yargs";

export default function orderplaced(){
  const navigation = useNavigation();

    const placeorder=(navigation)=>{
        navigation.navigate('CartPage')
      
    }

    return(

    
    <TouchableOpacity style={{marginTop:40}}>
      
      
          <Icon1
          size={100}
          style={{color:'#ffffff',borderColor:'#6200ee',top:148,justifyContent:'center',left:143}}
          name={'checkcircle'}></Icon1>
          <View style={styles.cirlce}/>
          <Icon3
          size={64}
          style={{color:'#6200ee',borderColor:'#6200ee',top:68,justifyContent:'center',left:161}}
          name={'check'}></Icon3>
           
        <Text style={styles.title}>Order Placed!</Text>
        <Text style={styles.successMessage}>Your order was placed successfully.</Text>
        <Icon4
                  size={40}
                  style={{color:'#6200ee',bottom:370,left:340}}
                  name={'close-outline'} onPress={() => placeorder(navigation)}
                  ></Icon4>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.submitButton]} onPress={() => placeorder(navigation)}>
                    <Text style={styles.myOrders}> MY ORDERS</Text>
                </TouchableHighlight>
                <Icon5
                size={31}
                style={styles.submitButton1}
                name={'rightcircle'}></Icon5>
  </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 20,
    },
    item: {
      padding: 20,
      marginVertical: 9,
      marginHorizontal: 20, 
    },
    title: {
        //justifyContent: 'center',
        //alignItems: 'center',
      fontSize: 32,
      marginLeft:100,
      marginTop:130,
      color:"#585858",
    },
    successMessage: {
      fontSize: 16,
      marginLeft:65,
      marginTop:20,
      color:'#585858'
    },
    phone: {
      fontSize: 16,
    },
    address: {
      fontSize: 15,
    },
    city: {
      fontSize: 14,
    },
    tinyLogo: {
      width: 400,
      height: 400,
      marginTop:400,
      marginLeft:20
    },
    buttonContainer: {
      height: 30,
      width:160,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
      borderRadius:50,
      marginTop:90,
  },
  loginButton: {
    backgroundColor: "#6200ee",
    fontWeight:"800",
    color:'white',
  },
  submitButton: {
    height: 45,
    bottom:0,
    marginLeft:120,
    marginTop:20, 
},
submitButton1: {
    
  height: 45,
  bottom:43,
  marginLeft:235,
  //marginTop:400,
  color: "white",
  marginBottom:0
},
myOrders: {
  color: 'white',
  fontWeight:"800",
  fontSize:13,
  right:20 
},
});
