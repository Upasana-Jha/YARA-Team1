import 'react-native-gesture-handler';
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Button } from "react-native";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/HomePage';
import CustomerApp from './components/BookDetails';
import Login from './components/Login';
import CartPage from './components/CartPage';
import OrderPlaced from './components/OrderPlaced';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSideBarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        
        screenOptions={{activeTintColor: '#e91e63',itemStyle: {marginVertical: 5},}}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      
        <Drawer.Screen name="Home" 
            options={{drawerLabel: 'Home', headerTitle:"Home", headerShown:false,  /// tiny icon home
            drawerIcon: ({ focused, size }) => 

              <Icon
                size={23}
                name={'home-outline'}></Icon>
             ,}} 
        component={Home} header={false} />
       
        <Drawer.Screen name="BookDetails"
        options={{drawerLabel: 'Book Details',    headerShown:false,   /// tiny icon home
        drawerIcon: ({ focused, size }) =>  <Icon
        size={23}
        name={'newspaper-outline'}></Icon>,}} 
        component={CustomerApp} />
        <Drawer.Screen name="Cart"  options={{drawerLabel: 'Cart', headerShown:false,
        drawerIcon: ({ focused, size }) =>  <Icon
        size={23}
        name={'cart-outline'}></Icon>,}} 
          component={CartPage} />
        <Drawer.Screen name="Orders"  options={{drawerLabel: 'Orders', headerShown:false,
        drawerIcon: ({ focused, size }) =>  <Icon1
        size={23}
        name={'shopping-outline'}></Icon1>,}} 
        component={OrderPlaced} />

        <Drawer.Screen name="LOGOUT" options={{headerShown:false}} component={Login} />
        <Drawer.Screen name="SignIn" options={{headerShown:false,
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }} component={SignIn} />
        <Drawer.Screen name="SignUp" options={{headerShown:false,
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }} component={SignUp} />
          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
