

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
  Linking,
  Button,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://m.media-amazon.com/images/I/41jLBhDISxL.jpg';
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={{uri: BASE_PATH }}
        style={styles.sideMenuProfileIcon}

      />
      <View style={{position: 'absolute', top:0, left: 0, right: 0, bottom: 640, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 26,
          color: 'black',
          fontWeight: "bold",
          paddingBottom:20,
        }}>Jane Doe</Text>
      </View>
     
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
                    <Text style={styles.loginText}>Edit Profile</Text>
          </TouchableHighlight>
    

     <View style={styles.separator} />


      <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      </DrawerContentScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'contain',
    marginTop:20,
    marginBottom: 20,
    width: 50,
    height: 50,
    borderRadius: 50/ 2,
    marginLeft:20,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
},
separator: {
  marginLeft:15,
  marginRight:30,
  borderBottomColor: '#737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
buttonContainer: {
  height: 45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:20,
  marginBottom: 30,
  marginLeft:15,
  width: 150,
  borderRadius: 30,
  borderColor:'grey',
  borderWidth:1,
 
},
loginButton: {
  backgroundColor: "#fff",
 
},
loginText: {
  color: '#000',
  fontSize: 20,
  alignSelf: "center",
  
}
});

export default CustomSidebarMenu;
