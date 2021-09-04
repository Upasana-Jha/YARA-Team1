import React, { useState} from "react";
import { Image,FlatList, Button,
   StyleSheet, Text, TouchableOpacity,
   TouchableHighlight,Alert,
   View } from "react-native";
import { getCustomers } from "../service/BookData";
import Menu from './Menu';

const showAlert = (item) =>
  Alert.alert(
    "Are you sure ",
    "You want to add '"+item.title+"' to cart?",
    [{
        text: "Cancel", style: "cancel",
      },
      {
        text: "OK", style: "ok",
      },
    ]);

const Item = ({ item, onAddCart,onMore, onPress,style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' }}>
        <Image style={styles.bookCover} source={{uri: 'https:'+item.cover}}/>
        <View style={{flex:2,  height: 60}} >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}></Text>
          <Text style={styles.details}>By : {item.author}</Text>
          <Text style={styles.details}>Year : {item.year}</Text>
          <Text style={styles.details}>Buy : $15 </Text>
          <Text style={styles.title}></Text>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <TouchableHighlight style={styles.moreButton} onPress={() => {}}>
              <Text style={styles.loginText}>More</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.invisibleButton} onPress={()=>{}}>
              <Button title=""></Button>
            </TouchableHighlight>
            <TouchableHighlight style={styles.AddCartButton} onPress={()=>showAlert(item)}>
              <Text style={styles.loginText}>+ ADD CART</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View> 
  </TouchableOpacity>
);

const BookDetails =  () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffffff" :"#ffffff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onEdit={()=>{}}
        onDelete={()=>{}}
        style={{ backgroundColor }}
      />
    );
  };
 
  return (
    <View style={styles.maincontainer}>
      <View style={{flex:1}}>
        <Menu/>
        <FlatList 
        style={{flex:5}}
          data={getCustomers()}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
    flexDirection:'column',
    backgroundColor:"#ffffff",
  },
  moreButton:{
    backgroundColor: "#6200ee",
    height: 30,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 5,
    marginTop:2,
  },
  AddCartButton:{
    backgroundColor: "#6200ee",
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 5,
    marginTop:2,
  },
  invisibleButton:{
    backgroundColor: "#ffffff",
    height: 15,
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 5,
    marginTop:10,
  },
  loginText: {
      color: 'white',
      fontWeight:"500",
      fontSize:16, 
  },
  item: {
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontFamily:"Montserrat-Light",
  },
  details: {
    fontSize: 14,
    fontFamily:"Montserrat-Light",
    marginBottom:3
  },
  bookCover: {
    height: 150,
    width: 90,
    flex: 0.9,
    marginEnd:10
  }  
});

export default BookDetails;
