import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ValueProvider from './ValueContext';
import About from './About'
import Fresh from './Fresh'
import Home from './Home'
import Registration from './Registration'
import Profile from './Profile'

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
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Tab.Screen name="About" component={About} options={{ headerShown: false}}/>
        <Tab.Screen name="Registration" component={Registration} options={{ headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false}}/>
      </Tab.Navigator>
    );
  };
 export default function MyStack () {
  const data =
     {name:"",
      email:"",
      appURL: 'https://salty-spire-31298.herokuapp.com',
      secret: "",
    }
  return (
    <ValueProvider value={data}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </ValueProvider>
  );
};
