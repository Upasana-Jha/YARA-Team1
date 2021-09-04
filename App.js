
import 'react-native-gesture-handler';
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Button } from "react-native";
import * as React from 'react';
//import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages/HomePage';
import CustomerApp from './pages/Book_Details';
import Login from './pages/Login';
import CartPage from './pages/CartPage';
import OrderPlaced from './pages/OrderPlaced';


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
            'https://cdn.w600.comps.canstockphoto.com/three-lines-blue-circle-icon-clip-art-vector_csp50754261.jpg',
          }}
          style={styles.tinyLogo}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
         
      />
    </Stack.Navigator>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
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
        <Drawer.Screen name="Home" 
        options={{drawerLabel: 'Home',      /// tiny icon home
       drawerIcon: ({ focused, size }) => (
        <Image
        source={{
          uri:
          'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png',
        }}
          style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]}
        />),}} 
        component={firstScreenStack} />

        
       
        <Drawer.Screen name="BookDetails" 
        options={{drawerLabel: 'Book Details',      /// tiny icon home
        drawerIcon: ({ focused, size }) => (
         <Image
         source={{
           uri:
           'https://icon-library.com/images/more-details-icon/more-details-icon-7.jpg',
         }}
           style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]}
         />),}} 
        component={CustomerApp} />
        <Drawer.Screen name="Cart"  options={{drawerLabel: 'Cart', 
        drawerIcon: ({ focused, size }) => (
          <Image
          source={{
            uri:
            'https://www.nicepng.com/png/full/829-8298681_free-png-download-shopping-cart-clipart-png-photo.png',
          }}
            style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]}
          />),}} 
          component={CartPage} />
        <Drawer.Screen name="Orders"  options={{drawerLabel: 'Orders', 
        drawerIcon: ({ focused, size }) => (
          <Image
          source={{
            uri:
            'https://image.shutterstock.com/image-vector/logistics-package-vector-icon-600w-1298913529.jpg',
          }}
            style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]}
          />),}} 
        component={OrderPlaced} />

        <Drawer.Screen name="LOGOUT" component={Login} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
