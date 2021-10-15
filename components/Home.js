import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Play football",
    location:"Brandeis Stadium",
    time:"10/02 Saturday 6pm",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Go shopping",
    location:"Back bay",
    time:"10/03 Sunday 2pm",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "CS 153a Fall21",
    location:"Golding Judaica 101",
    time:"10/04 Monday 10am",
  },
];

const createJoinButtonAlert = () =>
  Alert.alert(
    "Join Successfully",
    "Enjoy your activity!",
  [
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ]
);

const Item = ({name,location,time}) => (

  <View style={styles.content}>
    <View style={{flex:4,alignItems: 'flex-start',justifyContent: 'center',padding:15}}>
      <Text style={{fontSize:15}}> {name}</Text>
      <Text style={{fontSize:15}}> {location}</Text>
      <Text style={{fontSize:15}}> {time}</Text>
    </View>
    <View style={{flex:2,alignItems: 'center',justifyContent: 'space-between'}}>
      <View>
        <Button title={">"} color='grey' />
      </View>
        <Button title={"+"} color='#f4511e' onPress={createJoinButtonAlert}/>
    </View>
  </View>
);

export default function Home ({ navigation }) {
  const renderItem = ({item}) => (
    <View>
      <Item
          style={styles.item}
          name={item.name}
          location={item.location}
          time={item.time}/>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
      </View>
      <View style={styles.bottom}>
        <View style={{flex:1,backgroundColor:'#f4511e'}}>
          <Button title="Chat" onPress={() =>navigation.navigate('Chat')} color='white'/>
        </View>
        <View style={{flex:1,backgroundColor:'#f4511e'}}>
          <Button title="+" onPress={() =>navigation.navigate('Input')} color='white'/>
        </View>
        <View style={{flex:1,backgroundColor:'#f4511e'}}>
          <Button title="About" onPress={() =>navigation.navigate('About')} color='white'/>
        </View>
        <View style={{flex:1,backgroundColor:'#f4511e'}}>
          <Button title="Me" onPress={() =>navigation.navigate('Login')} color='white'/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 860,
    width: 395,
    flexDirection:'column',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottom:{
    height: 50,
    width: 395,
    flexDirection:'row',
    alignItems: 'flex-end',
    justifyContent:'flex-start',
  },
  contents:{
    height: 703,
    width: 395,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    height: 100,
    width: 395,
    flexDirection:'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  item:{
    borderColor: "grey",
    borderWidth: 2,
  },
});
