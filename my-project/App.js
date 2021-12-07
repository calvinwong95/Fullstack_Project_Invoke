// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import SignIn from './src/containers/SignIn';
import Register from './src/containers/Register';
import Booking from './src/containers/Booking';
import Dashboard from './src/containers/Dashboard';
import Logout from './src/containers/LogOut';


import {Ionicons} from '@expo/vector-icons';

import {store, persistor} from './src/store/configureStore';
import { Provider } from 'react-redux';


export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator() ;

  function TabNav() {
    return (
      <Tab.Navigator 

        screenOptions={({route}) => ({
        tabBarIcon: ({ color,size }) => {
  
          let iconName ;
          if (route.name === 'Booking') {
            iconName =  'duplicate-outline';
          } else if (route.name === 'Dashboard') {
            iconName =  'document-outline';
            
          } else if (route.name === 'Logout') {
            iconName =  'power-outline';
          }
  
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        
      })}>

        <Tab.Screen name="Booking" component={Booking}></Tab.Screen>
        <Tab.Screen name="Dashboard" component={Dashboard}></Tab.Screen>
        <Tab.Screen name="Logout" component={Logout}></Tab.Screen>
        
      </Tab.Navigator>
    )
  };

  return (
    <Provider store={store} persistor={persistor}>
      <NavigationContainer>
      <Stack.Navigator style={styles.container} initialRouteName="Welcome">
        <Stack.Screen name="Welcome"  component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="TabNav" component={TabNav} options={{headerShown: false}}/>
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    color:'white',
    
  },
});
