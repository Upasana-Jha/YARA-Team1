import React,{useState,useEffect} from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Text, Alert, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => (
  <View style={styles.separator} />
);
var updateCount = 0;
const Menu = (props) => {
    const [value, onChangeText] = React.useState('9');
    const [count, setCount] = React.useState(0);
    const [init, setInit] = React.useState(0);
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]} 
        onPress={() => navigation.navigate('CartPage')}>
       <Text style={styles.title}> CartPage |</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]} 
        onPress={() => navigation.navigate('BookDetails')}>
       <Text style={styles.title}> BookDetails |</Text>
      </TouchableHighlight>


            <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]} 
        onPress={() => navigation.navigate('HomePage')}>
                            <Text style={styles.title}> HomePage | </Text>
      </TouchableHighlight>


            <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]} 
        onPress={() => navigation.navigate('About')}>
                  <Text style={styles.title}> About </Text>
      </TouchableHighlight>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    marginHorizontal: 0,
    marginTop:35,
    padding: 5,
    backgroundColor: "#1541a8",
    maxHeight:"7%",
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    color:'white'
  },
  opacity: {
    alignItems: "center",
    backgroundColor: "#737373",
    padding: 10
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    color:'white',
    fontSize:18,
    justifyContent: "space-between",
    fontWeight:"500"
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Menu;
