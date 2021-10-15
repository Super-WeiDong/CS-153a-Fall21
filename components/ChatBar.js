import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ChatBar({uri,name,words,time}) {
  return (
    <View style={{backgroundColor:'white',flexDirection:'row',alignItems: 'center',justifyContent: 'flex-start',padding:15}}>
      <View style={{flex:5}}>
        <Image source={{uri: uri}}
              style = {{width:60,height:60,justifyContent: 'center',borderRadius:20}}/>
      </View>
      <View style={{flex:15,alignItems: 'flex-start',justifyContent: 'flex-start'}}>
        <Text style={{fontSize:20}}>{name}</Text>
        <Text style={{fontSize:12}}>{words}</Text>
      </View>
      <View style={{flex:3,alignItems: 'flex-start',justifyContent: 'flex-start'}}>
        <Text style={{fontSize:10,color:'grey'}}>{time}</Text>
      </View>
    </View>
  );
}
