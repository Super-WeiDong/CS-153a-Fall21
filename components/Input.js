import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const createPostButtonAlert = () =>
  Alert.alert(
    "Bingo!",
    "Post Successfully",
  [
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ]
);
export default function Input(){
  const [value1, onChangeText1] = React.useState();
  const [value2, onChangeText2] = React.useState();
  const [value3, onChangeText3] = React.useState();
  const [value4, onChangeText4] = React.useState();

  return (
    <View style={styles.inputpage}>
      <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>Activity Name:</Text>
      <TextInput style={styles.input}
              onChangeText={text => onChangeText1(text)}
              placeholder="pick a good name!"
              value={value1}
      />
      <View>
       <Text></Text>
      </View>
      <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>Location:</Text>
      <TextInput style={styles.input}
              onChangeText={text => onChangeText2(text)}
              placeholder="where's your venue?"
              value={value2}
      />
      <View>
       <Text></Text>
      </View>
      <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>Time:</Text>
      <TextInput style={styles.input}
              onChangeText={text => onChangeText3(text)}
              placeholder="choose a good time!"
              value={value3}
      />
      <View>
       <Text styles={{fontSize:3}}></Text>
      </View>
      <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>Other Information:</Text>
      <TextInput style={styles.detailinput}
              onChangeText={text => onChangeText4(text)}
              placeholder="any other interesting information?"
              value={value4}
      />
      <View>
       <Text></Text>
      </View>
      <View style ={{backgroundColor:"#f4511e"}}>
        <Button title={"Add Photo"} color='white'/>
      </View>
      <View>
       <Text></Text>
      </View>
      <View style ={{backgroundColor:"#f4511e"}}>
        <Button title={"Post"} color='white' onPress={createPostButtonAlert}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputpage:{
    backgroundColor: 'whitesmoke',
    height: 860,
    width: 395,
    flexDirection:'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    padding:20
  },
  input:{
    height: 50,
    width: 350,
    borderColor: 'gray',
    borderWidth: 2
  },
  detailinput:{
    height: 150,
    width: 350,
    borderColor: 'gray',
    borderWidth: 2
  },
});
