import React,{useState,useEffect} from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, TextInput, Button, StatusBar, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'

import {useValue} from './ValueContext';
const createJoinButtonAlert = () =>
  Alert.alert(
    "Join Successfully",
    "Enjoy your activity!",
  [
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ]
);

const Item = ({name,location,time,information}) => (
  <View style={styles.content}>
    <View style={{flex:4,alignItems: 'flex-start',justifyContent: 'center',padding:15}}>
      <Text style={{fontSize:15}}>Activity: {name}</Text>
      <Text style={{fontSize:15}}>Location: {location}</Text>
      <Text style={{fontSize:15}}>Time: {time}</Text>
      <Text style={{fontSize:15}}>Info: {information}</Text>
    </View>
    <View style={{flex:2,alignItems: 'center',justifyContent: 'space-between'}}>
      <View>
        <Button title={">"} color='grey' />
      </View>
        <Button title={"+"} color='#f4511e' onPress={createJoinButtonAlert}/>
    </View>
  </View>
);

export default function Activity () {
  const {currentValue,setCurrentValue} = useValue();
  const appKey = currentValue.appKey
  const appURL = currentValue.appURL
  const userKey = currentValue.userKey

  const [data,setData] = useState([])
  const [name,setName] = useState("")
  const [location,setLocation] = useState("")
  const [time,setTime] = useState("")
  const [information,setInformation] = useState("")

  useEffect(() => {
    getCloudData()
  },[])

  const storeCloudData = async (value) => {
    let data = {appKey:appKey,
                userKey:userKey,
                valueKey:'@activity',
                value:value}
    let result =
      await Axios.post(appURL+'/storeData',data)
  }

  const getCloudData = async () => {
    let data = {appKey:appKey,
                userKey:userKey,
                valueKey:'@activity'}
    let result =
      await Axios.post(appURL+'/getData',data)
    const activity =
       result.data.map(
          (x) => {return {id:x._id, activity:JSON.parse(x.value)}})
    setData(activity)
  }

  const clearCloudData = async () => {
    let data = {appKey:appKey,
                userKey:userKey,
                valueKey:'@activity'}

    let result =
      await Axios.post(appURL+'/clearData',data)
    setData([])
  }

  const renderItem = ({item}) => (
    <View>
      <Item
          style={styles.item}
          name={item.activity.name}
          location={item.activity.location}
          time={item.activity.time}
          information={item.activity.information}/>
    </View>
  );

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
          <View style={styles.inputpage}>
            <Text style={{fontSize:28, color:'#f4511e',fontWeight:'bold'}}>Create Activity</Text>
            <TextInput style={styles.input} placeholder="name" onChangeText={(text) => setName(text)} />
             <Text></Text>
            <TextInput style={styles.input} placeholder="location" onChangeText={(text) => setLocation(text)} />
             <Text></Text>
            <TextInput style={styles.input} placeholder="time" onChangeText={(text) => setTime(text)} />
             <Text></Text>
            <TextInput style={styles.input} placeholder="information" onChangeText={(text) => setInformation(text)} />
              <Text></Text>
            <View style={{flexDirection:'column'}}>
            <View style ={{backgroundColor:"#f4511e"}}>
              <Button title="Save" color='white' onPress={() =>{
                const activity = {name,location,time,information}
                storeCloudData(activity)
              }} />
            </View>
             <Text></Text>
            <View style ={{backgroundColor:"#f4511e"}}>
              <Button title="Post" color='white' onPress={() => getCloudData()} />
            </View>
             <Text></Text>
            <View style ={{backgroundColor:"#f4511e"}}>
              <Button title="clear" color='white' onPress={() => clearCloudData()} />
            </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

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
  container: {
    height: 860,
    width: 395,
    flexDirection:'column',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  input:{
    height: 50,
    width: 350,
    borderColor: 'gray',
    borderWidth: 2
  },
});
