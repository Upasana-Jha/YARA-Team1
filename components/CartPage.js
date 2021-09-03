import React, { useState , useEffect} from "react";
import { Image,FlatList,
  SafeAreaView, StatusBar, Button,
   StyleSheet, Text, TouchableOpacity, 
   TouchableHighlight,Alert,
   View } from "react-native";
import { deleteCustomer, getCustomers, updateCustomer } from "../service/CustomerSQL";
import Menunew from "./AppMenunew";
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
            alignItems: 'stretch' }}>
                <Image
                    style={styles.bookCover}
                    source={{
                    uri: 'https:'+item.cover,
                }}/>
                <View style={{flex:2,  height: 60}} >
                <Text style={styles.title}>{item.title}</Text>
                

              <Text style={styles.details}>By : {item.author}</Text>
              <Text style={styles.title}></Text>
              <Text style={[styles.details],[styles.setcolour1]}> $15 </Text>
              <Text style={styles.title}></Text>

              

       
        <View style={{
            flex: 1,
            flexDirection: 'row', }}>
              <TouchableHighlight
        style={{flex:1,backgroundColor: "#B2BEB5",
        height: 30,
    
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        
        borderRadius:20,
        marginTop:10,}} 
        onPress={showAlert}>
        <Text style={styles.loginText}>-</Text>
      </TouchableHighlight>
      <TouchableHighlight
          style={{backgroundColor: "#ffffff",
          height: 15,
          flex: 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,
          borderRadius: 20,
          marginTop:10,}}  
      onPress={()=>{}}>
        <Text style={styles.loginText}>1</Text>
      </TouchableHighlight>
      <TouchableHighlight
          style={{flex:2,backgroundColor: "#B2BEB5",
          height: 30,
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,

          borderRadius: 20,
          marginTop:10,}} 
       >
        <Text style={styles.loginText}>+</Text>
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
 
  

  return (
    <View style={styles.maincontainer}>
    
          <FlatList
          
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.submitButton]} onPress ={()=> placeorder(navigation)}>
                    <Text style={styles.loginText}>Place Order</Text>
                </TouchableHighlight>
      <Text style={styles.forTotal}>TOTAL
      </Text>
      <Text style={styles.forTotal1}>$24.00</Text>
      <Text style={styles.forTotal2}>Free Domestic Shipping</Text>
       
      <Text style={[styles.forpromocode,styles.setcolour]}>Apply Promo Code</Text>
       
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
    
    borderRadius: 8,
    marginTop:10,
   
   
},
buttonContainer1: {
  height: 45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  marginTop:30,
  width: 250,
  marginStart:65,
  borderRadius: 20,
  
},
loginButton: {
  backgroundColor: "#6200ee",
  fontWeight:"800"
},
loginButton1: {
  backgroundColor: "#ffffff",
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
    fontSize: 24,
    
    
    

  },
  details: {
    fontSize: 20,
    
  },
  
  bookCover: {
    
    height: 150,
    width: 90,
    flex: 0.9,
    marginEnd:10

  },
  submitButton: {
    position: 'absolute',
    height: 45,
    bottom:0,
    left:230,
},
forTotal:{
    position: 'absolute',
    bottom:63,
    left:10,
    fontSize: 20,
},
forTotal1:{
    position: 'absolute',
    bottom:38,
    left:10,
    fontSize: 20,
},
forTotal2:{
    position: 'absolute',
    bottom:18,
    left:12,
    fontSize: 15,
},
forpromocode:{
    position: 'absolute',
    bottom:170,
    left:10,
    fontSize: 30,
    
    
},
setcolour:{
    color:"#6200ee",
},
setcolour1:{
    color:'#e75480',
},
  
});


export default CartPage;