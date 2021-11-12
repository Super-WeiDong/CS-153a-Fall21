import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatBar from './ChatBar'
import TwoPartRow from './TwoPartRow'
import ScreenTemplate from './ScreenTemplate'

const Header = () => {
  return (
  <TwoPartRow
       right = {<Image source={require('./logo.jpg')}
               style = {{width:50,height:50,justifyContent: 'center',borderRadius:10,borderColor:'#f4511e',borderWidth:1}}/>}
       left = {<Text style={{fontSize:24,fontWeight:'bold',color:'white'}}> Chat </Text>}
  />
)}

export default function Chat() {
  return (
    <ScreenTemplate
        header={<Header />}
    >
      <View style={styles.container}>
        <ChatBar uri = "https://avatars.githubusercontent.com/u/195879?v=4"
        name="Tim"
        words="Today we will havs quiz 3a,3b,3c,3d"
        time="0:01 am"
        />
      </View>
    </ScreenTemplate>
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
