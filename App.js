import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyStack from './components/MyStack'
//import Register from './components/Register'
//import Login from './components/Login'
//import Me from './components/Me'

export default function App() {
  return (
    //<Register />
    //<Me />
    <MyStack/>
  );
}
