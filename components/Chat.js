import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatBar from './ChatBar'

export default function Chat() {
  return (
    <View style={styles.container}>
      <ChatBar uri = "https://avatars.githubusercontent.com/u/195879?v=4"
      name="Tim"
      words="Today we will havs quiz 3a,3b,3c,3d"
      time="0:01 am"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 860,
    width: 395,
    flexDirection:'column',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
