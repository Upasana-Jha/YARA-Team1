import React, { useState , useEffect} from "react";
import { Image,FlatList, StatusBar,
   StyleSheet, Text, TouchableOpacity, 
   TouchableHighlight,Alert,
   View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/Entypo';
import { Appbar } from "react-native-paper";
import Icon3 from 'react-native-vector-icons/AntDesign';
import { delBookFromCart, getCartBooks } from "../service/BookData";


const showAlert = (item) =>{
  Alert.alert(
    "Are you sure ",
    "You want to delete item from cart?",
    
    [{text: "Cancel",style: "cancel", },
      {text: "OK",style: "ok",onPress:()=>ondelete(item)},
    ],
    {cancelable: true,}
  );
}
  
const placeorder=(navigation)=>{
  Alert.alert(
    "Are you sure ",
    "You want to Place order",   
    [
        {text: 'Yes', onPress: () => navigation.navigate('OrderPlaced')},
        {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},
      ],
    {
      cancelable: true,  
    }
  );
}

const Item = ({ item,  onPress,onDelete, onEdit,style }) => (

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
                onPress={onDelete}>
                  <Icon1
                size={18}
                name={'minus'}></Icon1>
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

                <Text style={{fontSize:18,marginTop:5,color:'#585858'}}>1</Text>
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
                <Icon1
                size={20}
                name={'plus'}></Icon1>
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
 

  reloadCustomer = ()=>{
    let booklist=  getCartBooks();
    console.log("after get customers"+JSON.stringify(booklist))
    setCustomers(booklist);
    doRender(count+1)
    
  }
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      reloadCustomer();
      
    });
    return unsubscribe;
  },[navigation]);

  ondelete=(item)=>{
   
    console.log("del"+item.id)
    let id=item.id;
     delBookFromCart(item);
    reloadCustomer();

}


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
        onDelete={()=>{showAlert(item)
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
        <Appbar.Action icon="menu"   onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Cart" subtitle="" titleStyle={{fontSize:20,fontFamily:"Montserrat-Regular"}} />
        <Appbar.Action icon="bell" onPress={_handleMore} />
        <Appbar.Action icon="share-variant" onPress={_handleSearch} />
        <Appbar.Action icon="magnify"  onPress={_handleSearch} />
     </Appbar.Header>
          <FlatList
          
        data={customers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <TouchableOpacity>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.submitButton]} onPress ={()=> placeorder(navigation)}>
                    <Text style={styles.loginText}>PLACE ORDER</Text>
                </TouchableHighlight>
                <Icon3
                size={31}
                //style={{flex:1,color:'#6200ee'}}
                style={styles.submitButton1}
                name={'rightcircle'}></Icon3>
                
      <Text style={styles.forTotal}>TOTAL
      </Text>
      <Text style={styles.forTotal1}>$24.00</Text>
      <Text style={styles.forTotal2}>Free Domestic Shipping</Text>
      
      <Icon1
                size={25}
                style={{color:'#6200ee',bottom:173,left:20}}
                name={'price-tag'}></Icon1>
      <Text style={[styles.forpromocode]}>Add Promo Code</Text>

    
      <Icon3
                size={20}
                //style={{flex:1,color:'#6200ee'}}
                style={styles.tinyLogoforarrow}
                name={'rightcircleo'}></Icon3>
                </TouchableOpacity>

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
    width:180,
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
    fontWeight:"800",
    marginRight:23,
},
  item: {
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
   
  },
  title: {
    fontSize: 18,
    fontFamily:'Montserrat-Light',
    marginLeft:30,
    top:17,
    marginTop:10,
    fontWeight:'300'
    
    

  },
  details: {
    fontSize: 18,
    marginLeft:30,
    top:17,
    fontFamily:'Montserrat-ExtraLight',
    
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
    left:200,
},
submitButton1: {
  position: 'absolute',
  height: 40,
  bottom:24,
  left:340,
  
  color:'white',
},
forTotal:{
    position: 'absolute',
    bottom:80,
    left:20,
    fontSize: 12,
    fontFamily:'Montserrat-Light'
},
forTotal1:{
    position: 'absolute',
    bottom:50,
    left:20,
    fontSize: 22,
    color:'#585858',
    fontFamily:'Montserrat-Bold'
},
forTotal2:{
    position: 'absolute',
    bottom:32,
    left:20,
    fontSize: 12,
    fontWeight:'400',
    color:'#585858',
    fontFamily:'Montserrat-Light'

},
forpromocode:{
    position: 'absolute',
    bottom:174,
    left:20,
    fontSize: 16,
    marginLeft:40,
    color:"#6200ee",
    fontFamily:'Montserrat-Regular',
    fontWeight:'400'   
},
setcolour1:{
    color:'#e75480',
    marginLeft:30,
    top:7,
},
image:{
  width:120,
  height:130,
  borderRadius:51,
  borderColor:'#ffffff',
  borderWidth:1,
  backgroundColor:'#ffffff',
  shadowOffset:{
    width:-15,
    height:-15
    },
    shadowOpacity:0.5,
    shadowRadius:1,
    shadowColor:"#ffffff",
    marginTop: 20,
    shadowOffset:{
    width:5,
    height:5
    },
    shadowOpacity:0.5,
    shadowRadius:6,
    shadowColor:"#b7c4dd",
    marginTop: 20
  
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
  bottom:160,
  marginLeft:340,
  color:"gray"
},
plusminusicon: {
  color: 'gray',
  fontSize:20,
  fontWeight:"800",
}, 
});


export default CartPage;
