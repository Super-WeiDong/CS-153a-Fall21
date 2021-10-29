import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Fresh({navigation}) {
  return (
    <View style={styles.fresh}>
      <View>
      <Text></Text><Text></Text><Text></Text>
      </View>
      <View >
        <Image source={require('./logo.jpg')}
            style = {{width:100,height:100,justifyContent: 'center',borderRadius:20,borderColor:'#f4511e',borderWidth:1}}/>
      </View>
      <View>
       <Text></Text><Text></Text><Text></Text>
      </View>
      <View >
        <Text style={{fontSize:20,color:'#f4511e',fontWeight:'bold'}}>Teammate is an app helps you find your teammates easily
         when you want to initiate or join an activity! </Text>
         <Text> </Text>
        <Text> </Text>
        <Text style={{fontSize:20,color:'#f4511e',fontWeight:'bold'}}>Cloud Storage, Context are added in 2.0.0 Version</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fresh: {
    height: 860,
    width: 395,
    flexDirection:'column',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:30
  },
});
