import React, { useState , useEffect} from "react";
import { Image,FlatList,
  SafeAreaView, StatusBar, Button,
   StyleSheet, Text, TouchableOpacity, 
   TouchableHighlight,Alert,
   View } from "react-native";
import { Appbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Entypo';

import { useNavigation } from '@react-navigation/native';
import orderplaced from "./OrderPlaced";

let DATA = [
    {id:'1', "title":"Thats not my bunny", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9780746066928_cover_image.jpg"},
    {id:'2', "title":"Spanish-Beginners", "author":"Taks", "publisher":"Mara House", "isbn":"73fs4222", "year":1978, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509202_cover_image.jpg"},
    

];
const showAlert = () =>{
  Alert.alert(
    "Are you sure ",
    "You want to delete item from cart?",
    
    [{text: "Cancel",style: "cancel", },
      {text: "OK",style: "ok",},
    ],
    {cancelable: true,}
  );
}
  
  const placeorder=(navigation)=>{
    //
  Alert.alert(
    "Are you sure ",
    "You want to Place order",
    
    [
        {text: 'Yes', onPress: () => navigation.navigate('orderplaced')},
        {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},
      ],
    {
      cancelable: true,
      
    }
  );
}


const Item = ({ item, onAddCart,onMore, onPress,onDelete, onEdit,style }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            height:160 }}>
              <TouchableHighlight style={styles.image}>
                <Image
                    style={styles.bookCover}
                    source={{
                    uri: 'https:'+item.cover,
                }}/>
                </TouchableHighlight>
               
                <View style={{flex:2,  height: 90}} >
                <Text style={[styles.title]}>{item.title}</Text>
                

              <Text style={styles.details}>By : {item.author}</Text>
              <Text style={styles.title}></Text>
              <Text style={[styles.setcolour1]}> $15 </Text>
              <Text style={styles.title}></Text>

              

       
        
        <View style={{
            flex: 1,
            flexDirection: 'row', }}>


                    <TouchableHighlight
                style={{backgroundColor: "#D3D3D3",
                height: 25,
            
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
                marginLeft:30,
                
                borderRadius:20,
                marginTop:12,}} 
                onPress={showAlert}>
                <Text style={styles.plusminusicon}>-</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={{backgroundColor: "#ffffff",
                height: 25,
                flex: 0.7,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
                borderRadius: 20,
                marginTop:10,}}  
                onPress={()=>{}}>

                <Text style={{fontSize:25}}>1</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={{backgroundColor: "#D3D3D3",
                height: 25,
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                borderRadius: 60,
                marginTop:12,}} >
                <Text style={styles.plusminusicon}>+</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{backgroundColor: "#ffffff",
                flex: 2.4,
                }} >
                <Text ></Text>
            </TouchableHighlight>
            
        </View>
    </View>
    </View>   
       
    
  </TouchableOpacity>
  
  
);

const CartPage =  () => {
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [customers, setCustomers] = useState([]);
  const navigation = useNavigation();
 /*
 reloadCustomer = async()=>{
    let customerlist= DATA;
    console.log("after get customers"+JSON.stringify(customerlist))
    setCustomers(customerlist);
    doRender(count+1)
  }
 
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      reloadCustomer();
      
    });
    return unsubscribe;
  },[navigation]);
  ondelete=async(item)=>{
   
      console.log("del"+item.id)
      let id=item.id;
      await deleteCustomer(id)
      reloadCustomer();
  }
   */
  
console.log("DATA: "+DATA)
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffffff" :"#ffffff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onEdit={()=>{
          console.log("user pressed edit button. Everything is :"+JSON.stringify(item));
          navigation.navigate('EditCustomer',item);
          }}
        onDelete={()=>{ondelete(item)
        }}
        style={{ backgroundColor }}
      />
    );
  };
 
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');


  return (
    <View style={styles.maincontainer}>
     <Appbar.Header>
        <Appbar.BackAction   onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Cart" subtitle="" titleStyle={{fontSize:20,fontFamily:"Montserrat-Regular"}} />
        <Appbar.Action icon="bell" onPress={_handleMore} />
        <Appbar.Action icon="share-variant" onPress={_handleSearch} />
        <Appbar.Action icon="magnify"  onPress={_handleSearch} />

      </Appbar.Header>
          <FlatList
          
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.submitButton]} onPress ={()=> placeorder(navigation)}>
                    <Text style={styles.loginText}>PLACE ORDER</Text>
                </TouchableHighlight>
      <Text style={styles.forTotal}>TOTAL
      </Text>
      <Text style={styles.forTotal1}>$24.00</Text>
      <Text style={styles.forTotal2}>Free Domestic Shipping</Text>
      <View style={{flex:1,flexDirection:'row',marginStart:20}}>
      <Icon1
                size={25}
                style={{flex:1,color:'#6200ee'}}
                name={'price-tag'}></Icon1>
      {/*<Image 
                // source={require('../components/Tag.png')}
                 style={styles.tinyLogo}
      />*/}
      <Text style={[styles.forpromocode,styles.setcolour]}>Add Promo Code</Text>
      </View>
      {/*<Image 
                // source={require('../components/arrow.png')}
                 style={styles.tinyLogoforarrow}
                />*/}
      </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor:"#ffffff"
  },
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor:"#fbfbfb",
    marginTop: StatusBar.currentHeight || 1,
  },
  buttonContainer: {
    height: 30,
    width:140,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    
    borderRadius: 50,
    marginTop:10,
   
   
},

loginButton: {
  backgroundColor: "#6200ee",
  fontWeight:"800"
},

loginText: {
    color: 'white',
    fontWeight:"800"
},
  item: {
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
   
  },
  title: {
    fontSize: 20,
    //fontFamily:'Montserrat-Regular',
    marginLeft:30
    
    

  },
  details: {
    fontSize: 20,
    marginLeft:30
    //fontFamily:'Montserrat-ExtraLight',
    
  },
  
  bookCover: {
    
    height: 40,
    width: 70,
    flex: 0.8,
    marginEnd:10,
    marginLeft:23,
    marginTop:18,
    

  },
  submitButton: {
    position: 'absolute',
    height: 45,
    bottom:10,
    left:230,
},
forTotal:{
    position: 'absolute',
    bottom:80,
    left:10,
    fontSize: 20,
},
forTotal1:{
    position: 'absolute',
    bottom:50,
    left:10,
    fontSize: 20,
},
forTotal2:{
    position: 'absolute',
    bottom:25,
    left:12,
    fontSize: 15,
},
forpromocode:{
    position: 'absolute',
    flex:1,
    bottom:170,
    left:10,
    fontSize: 20,
    marginLeft:40
    
    
},
setcolour:{
    color:"#6200ee",
},
setcolour1:{
    color:'#e75480',
    marginLeft:30
},
image:{
  width:120,
  height:130,
  borderRadius:51,
  //borderColor:'#c5c2c2',
  borderColor:'#ffffff',
  borderWidth:1,
  backgroundColor:'#ffffff',
  //backgroundColor:'#D3D3D3',
  shadowOpacity:0.1,
  shadowRadius:15
},
fortitle:{
  marginLeft:10,
},
tinyLogo: {
  width: 40,
  height: 30,
  position: 'absolute',
  bottom:168,

},
tinyLogoforarrow: {
  width: 60,
  height: 30,
  position: 'absolute',
  bottom:168,
  marginLeft:320,

},
plusminusicon: {
  color: 'gray',
  fontSize:20,
  
  fontWeight:"800",
 
 
},

  
});


export default CartPage;
