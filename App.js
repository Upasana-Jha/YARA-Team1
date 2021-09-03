
import 'react-native-gesture-handler';
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Button } from "react-native";
import * as React from 'react';
//import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages/FirstPage';


// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://thumbs.dreamstime.com/z/default-avatar-profile-flat-icon-vector-contact-symbol-illustration-184752213.jpg',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{activeTintColor: '#e91e63',itemStyle: {marginVertical: 5},}}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen name="Home" options={{drawerLabel: 'Home',
       drawerIcon: ({ focused, size }) => (
        <Image
        source={{
          uri:
          'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png',
        }}
          style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]}
        />),}} 
        component={firstScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
