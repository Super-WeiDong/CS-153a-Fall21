import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TwoPartRow from './TwoPartRow'
import ScreenTemplate from './ScreenTemplate'

const Header = () => {
  return (
  <TwoPartRow
       right = {<View style={{backgroundColor:'f4511e',height: 50,width: 50}}></View>}
       left = {<Text style={{fontSize:24,fontWeight:'bold',color:'white'}}> About </Text>}
  />
)}
export default function About({navigation}) {
  return (
    <ScreenTemplate
        header={<Header />}
    >
    <View style={styles.about}>
      <View style={{flex:5,alignItems: 'center',justifyContent: 'center'}}>
      <Image source={require('./logo.jpg')}
              style = {{width:100,height:100,justifyContent: 'center',borderRadius:20,borderColor:'#f4511e',borderWidth:1}}/>
      </View>
      <View style={{flex:1,alignItems: 'center',justifyContent: 'flex-end'}}>
        <Text style={{fontSize:30,color:'#f4511e',fontWeight:'bold'}}>Teammate</Text>
        <Text style={{fontSize:15,color:'grey'}}>Version 4.0.0</Text>
      </View>
      <View style={{flex:4,justifyContent: 'flex-start'}}>
      </View>
      <View style={{flex:10,justifyContent: 'flex-start'}}>
      <View style ={{backgroundColor:"white"}}>
        <Button title={"√  Rate at AppStroe                     >"} color='#f4511e'/>
      </View>
      <View><Text></Text></View>
      <View style ={{backgroundColor:"white"}}>
        <Button title={"?  What's Fresh                             >"} color='#f4511e'
        onPress={() =>navigation.navigate('Fresh')}/>
      </View>
      <View><Text></Text></View>
      <View style ={{backgroundColor:"white"}}>
        <Button title={"↑  Version Update                         >"} color='#f4511e'/>
      </View>
      <View><Text></Text></View>
      <View style ={{backgroundColor:"white"}}>
        <Button title={"@  About Developer                       >"} color='#f4511e'/>
      </View>
      </View>
    </View>
    </ScreenTemplate>
    );
  };

  const styles = StyleSheet.create({
    about: {
      backgroundColor:'whitesmoke',
      height: 860,
      width: 395,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });
