import React, { useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View ,Button, TouchableHighlight} from "react-native";
import { Router } from "express";
import { useNavigation } from '@react-navigation/native';
import { require } from "yargs";

export default function orderplaced(){
    return(

    
    <TouchableOpacity >
      
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
        
            <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://www.pikpng.com/pngl/m/6-63180_images-for-blue-tick-mark-png-facebook-page.png" ,
            }}
          />
          
         
         
      </View>
      
      <Text style={styles.title}>Order Placed </Text>
      <Text style={styles.email}>Your order was placed successfully .</Text>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.submitButton]} onPress={() => placeorder()}>
                    <Text style={styles.loginText}>Go To My Orders</Text>
                </TouchableHighlight>
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
        justifyContent: 'center',
        alignItems: 'center',
      fontSize: 32,
      marginLeft:100,
      marginTop:200,
    },
    email: {
      fontSize: 20,
      marginLeft:40,
      marginTop:40,
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
      width: 100,
      height: 100,
      marginTop:260,

    },
    buttonContainer: {
      height: 30,
      width:140,
      
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 0,
      
      borderRadius:50,
      marginTop:0,
     
     
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
    marginTop:60,
    
},
loginText: {
  color: 'white',
  fontWeight:"800"
},
  });