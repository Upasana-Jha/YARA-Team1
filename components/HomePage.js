
import React, { useEffect, useState} from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Button, Dimensions } from "react-native";
//mport { RadioButton } from 'react-native-paper';

//import {addCustomer,deleteCustomer,getCustomers,updateAsyncData} from "../service/CustomerSQLDB"


let DATA = [

  {id:'1', "title":"That's not my bunny", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9780746066928_cover_image.jpg"},
  
  {id:'2', "title":"Spanish for Beginners", "author":"Taks", "publisher":"Mara House", "isbn":"73fs4222", "year":1978, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509202_cover_image.jpg"},
  
  {id:'3', "title":"Fat Cat on Mat", "author":"Mat", "publisher":"Indus House", "isbn":"746fs4222", "year":1999, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509233_cover_image.jpg"},
  {id:'20',"title":"First Colouring", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474985420_cover_image.jpg"},
  {id:'21',"title":"Ready for Writing", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474986694_cover_image.jpg"},
  {id:'22',"title":"corona virus", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474991513_cover_image.jpg"}

  
  
  ];

const numColumns=2
const WIDTH=Dimensions.get('window').width



const CustomerApp = () => {
    
  FormData=(DATA,numColumns)=>{
    const totalRows =Math.floor(DATA.length/numColumns)
    let totalLastRow=DATA.length-(totalRows*numColumns)

    while(totalLastRow!==0 && totalLastRow!==numColumns){
      DATA.publisher({id:'blank',empty:true})
      totalLastRow++
    }
    return DATA
  }
  _renderItems=({item,index})=>{
    let {itemStyle,itemText}=styles
    return(
      <View style={itemStyle}>
        <TouchableOpacity   style={itemStyle} backgroundColor={"#ffffff"}> 
         <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https:'+item.cover,
              }}/>
             
          <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
  let {container,itemText}=styles
  return(
    <View style={container}>
      <FlatList
      data={FormData(DATA,numColumns)}
      renderItem={_renderItems}
      keyExtractor={(item,index)=>index.toString()}
      numColumns={numColumns}
      />
    </View>
  )
  

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container1:{
    width:"100%",
    height:"85%",
    padding:5,
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  itemStyle:{
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent:'center',
    height:100,
    flex:1,
    margin:1,
    height: WIDTH/numColumns
  },
  box:{
    width:'50%',
    height:"50%",
    padding:5
  },
  inner:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
  },
  email: {
    fontSize: 20,
  },
  phone: {
    fontSize: 18,
  },
  tinyLogo: {
    width: 120,
    height: 150,
  },
});
export default CustomerApp;

//export default Home;
