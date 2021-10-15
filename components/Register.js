import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [result,setResult] = React.useState("fail")
  const [info,setInfo]= React.useState({"username":"","password":"","nickname":""})
  React.useEffect(() => {getData()}
          ,[info,username,password])

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
  }

  const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@userinfo', jsonValue)
        console.log('just stored '+ jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }

  const registerButton =
    (<View>
      <Button
             title={"Register"}
             color="#f4511e"
             onPress = {() => {
               if (username!=""&&password!=""&&nickname!="") {
                 const newInfo =
                     {'username':username,
                      'password':password,
                      'nickname':nickname
                    }
                 setInfo(newInfo)
                 storeData(newInfo)
                 setResult("Successful")
                 Alert.alert(
                   "Bingo!",
                   "Register Successfully",
                 [
                   { text: "OK", onPress: () => console.log("OK Pressed") }
                 ]
               )
               }else{
                 Alert.alert(
                   "Sorry",
                   "Please key in valid Information",
                 [
                   { text: "OK", onPress: () => console.log("OK Pressed") }
                 ]
               )
               }
             }}
      />
      </View>
    );

    const toLoginButton =
      (<View>
        <Button
               title={"To login page"}
               color="#f4511e"
               onPress={() =>navigation.navigate('Login')}
        />
        </View>
      );
  return (
    <View style={styles.register}>
      <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>User Name:</Text>
      <TextInput style={styles.input}
              onChangeText={text => setUsername(text)}
              placeholder="key in your email or phonenumber"
              value={username}
      />
      <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>Password:</Text>
      <TextInput style={styles.input}
              onChangeText={text => setPassword(text)}
              placeholder="must include at less one digit and one letter"
              value={password}
      />
      <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>Nickname:</Text>
      <TextInput style={styles.input}
              onChangeText={text => setNickname(text)}
              placeholder="key in your email or phonenumber"
              value={nickname}
      />
      {result=="fail"?registerButton:toLoginButton}
      <Text> info: {JSON.stringify(info)}</Text>
    </View>
  )
}

  const styles = StyleSheet.create({
    register:{
      backgroundColor: 'whitesmoke',
      height: 860,
      width: 395,
      flexDirection:'column',
      justifyContent: 'flex-start',
      padding:20
    },
    input:{
      height: 50,
      width: 350,
      borderColor: 'gray',
      borderWidth: 2
    },
  });
