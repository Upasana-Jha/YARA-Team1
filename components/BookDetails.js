import React, { useState , useEffect} from "react";
import { Image,FlatList,
  SafeAreaView, StatusBar, Button,
   StyleSheet, Text, TouchableOpacity,
   TouchableHighlight,Alert,
   View } from "react-native";
   import Student from './Student'
import { deleteCustomer, getCustomers, updateCustomer } from "../service/CustomerSQL";
import Menu from './Menu';
import { useNavigation } from '@react-navigation/native';
import { ceil } from "react-native-reanimated";

let DATA = [
    {id:'1', "title":"Thats not my bunny", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9780746066928_cover_image.jpg"},
    {id:'2', "title":"Spanish-Beginners", "author":"Taks", "publisher":"Mara House", "isbn":"73fs4222", "year":1978, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509202_cover_image.jpg"},
    {id:'3', "title":"Fat Cat on Mat", "author":"Mat", "publisher":"Indus House", "isbn":"746fs4222", "year":1999, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509233_cover_image.jpg"}

];

const showAlert = (item, navigation) =>
  Alert.alert(
    "Are you sure ",
    "You want to add '"+item.title+"' to cart?",
    
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        style: "ok",
       
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

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
                <Text style={styles.title}></Text>

              <Text style={styles.details}>By : {item.author}</Text>
              <Text style={styles.details}>Year : {item.year}</Text>
              <Text style={styles.details}>Buy : $15 </Text>
              <Text style={styles.title}></Text>

       
        <View style={{
            flex: 1,
            flexDirection: 'row', }}>
              <TouchableHighlight
        style={{flex:1,backgroundColor: "#6200ee",
        height: 30,
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        
        borderRadius: 5,
        marginTop:10,}} 
       onPress={() => {}}>
        <Text style={styles.loginText}>More</Text>
      </TouchableHighlight>
      <TouchableHighlight
          style={{backgroundColor: "#ffffff",
          height: 15,
          flex: 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,
          borderRadius: 5,
          marginTop:10,}}  
      onPress={()=>{}}>
        <Button title=""></Button>
      </TouchableHighlight>
      <TouchableHighlight
          style={{flex:2,backgroundColor: "#6200ee",
          height: 30,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,

          borderRadius: 5,
          marginTop:10,}} 
       onPress={()=>showAlert(item)}>
        <Text style={styles.loginText}>+ ADD CART</Text>
      </TouchableHighlight>
      
      

        </View>


    </View>
    </View> 
        
  </TouchableOpacity>
);

const CustomerApp =  () => {
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
      <Student/>
    <Menu/>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
       
      </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor:"#ffffff",
    
  },
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor:"#fbfbfb",
    marginTop: StatusBar.currentHeight || 1,
  },
  buttonContainer: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    
    borderRadius: 5,
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
    fontFamily:"Montserrat-Light",

  },
  details: {
    fontSize: 15,
    fontFamily:"Montserrat-ExtraLight"
  },
  
  bookCover: {
    
    height: 150,
    width: 90,
    flex: 0.9,
    marginEnd:10

  }
  
});

export default CustomerApp;
