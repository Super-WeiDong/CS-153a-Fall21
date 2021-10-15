import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login'

export default function Me({navigation}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [info,setInfo]= React.useState({"username":"","password":"","nickname":""})
  React.useEffect(() => {getData()}
          ,[])
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userinfo')
      let data = null
      if (jsonValue!=null) {
      data = JSON.parse(jsonValue)
      setInfo(data)
      console.log('just set info')
      } else {
        console.log('just read a null value from Storage')
        setUsername("")
        setPassword("")
        setNickname("")
      }
      } catch(e) {
        console.log("error in getData ")
        console.dir(e)
        }
  };

  return (
    <View style={styles.me}>
    <View>
    <Text></Text>
    <Image source={{uri: "https://img1.baidu.com/it/u=2057074169,1310918818&fm=26&fmt=auto"}}
            style = {{width:80,height:80,justifyContent: 'center',borderRadius:20}}/>
    </View>
    <View style ={{justifyContent: 'flex-start'}}>
      <Text></Text>
      <Text style={{fontSize:30, color:'black',fontWeight:'bold'}}> {info.nickname.toString()}</Text>
      <Text></Text>
      <Text style={{fontSize:15, color:'black'}}> ID：{info.username.toString()}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  me:{
    backgroundColor: 'whitesmoke',
    height: 860,
    width: 395,
    flexDirection:'row',
    justifyContent: 'flex-start',
    padding:30,
  },
});
