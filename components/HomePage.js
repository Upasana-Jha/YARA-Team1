import React, { useEffect, useState} from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Button, Dimensions } from "react-native";
//mport { RadioButton } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Icon } from "react-native-elements";
import Menu from "./Menu";
import {getBooks} from "../service/BookData"
//import {addCustomer,deleteCustomer,getCustomers,updateAsyncData} from "../service/CustomerSQLDB"


let DATA = getBooks();


const numColumns=2
const WIDTH=Dimensions.get('window').width



const CustomerApp = ({navigation}) => {
  
    
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
        <TouchableOpacity   
        style={itemStyle} backgroundColor={"#ffffff"}> 
         <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https:'+item.cover,
              }}/>
        <Text style={styles.title}>{item.faketitle}</Text>

          <Text style={styles.subtitle}>{item.title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  let {container,itemText}=styles
  return(  
    <View style={container}>
        
      <Appbar.Header>
      <Appbar.Action icon="menu"  onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Home" subtitle="" titleStyle={{fontSize:20,fontFamily:"Montserrat-Regular",fontWeight:"400"}} />
        <Appbar.Action icon="bell" onPress={_handleMore} />
        <Appbar.Action icon="share-variant" onPress={_handleSearch} />
        <Appbar.Action icon="magnify"  onPress={_handleSearch} />
      </Appbar.Header>
     
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
    alignItems:'flex-start',
    justifyContent:'center',
    height:100,
    flex:1,
    paddingLeft:8,
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
  icon: {
    paddingLeft: 40
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    marginTop:10,
    fontSize: 18,
    fontFamily:'Montserrat-Regular',
    color:'black'
  },
  subtitle: {
    fontSize: 14,
    fontFamily:'Montserrat-Light'

  },
  
  tinyLogo: {
    width: 99,
    height: 130,
    marginLeft:23
  },
});
export default CustomerApp;

