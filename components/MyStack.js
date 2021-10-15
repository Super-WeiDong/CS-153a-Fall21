import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About'
import Fresh from './Fresh'
import Home from './Home'
import Input from './Input'
import Chat from './Chat'
import Register from './Register'
import Login from './Login'
import Me from './Me'

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

 const TabNav = () =>{
  return (
      <Tab.Navigator showLabel='true'
        screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={Home} options={{
          title: 'My home',
          headerStyle: {
          backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },

        }}/>
        <Tab.Screen name="Chat" component={Chat} options={{
          title: 'Chat',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Input" component={Input} options={{
          title: 'Creat',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Tab.Screen name="About" component={About} options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Tab.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Tab.Navigator>

    );
  };
 export default function MyStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabNav} options={{ headerShown: false}} />
        <Stack.Screen name="Fresh" component={Fresh} options={{
          title: 'Fresh',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Register" component={Register} options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        <Stack.Screen name="Me" component={Me} options={{
          title: 'Me',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
