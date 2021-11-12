import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView,StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList,RefreshControl} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
import ValueProvider,{useValue} from './ValueContext';
import Activity from './Activity'
import TwoPartRow from './TwoPartRow'
import ScreenTemplate from './ScreenTemplate'



const Header = () => {
  return (
  <TwoPartRow
       right = {<Image source={require('./logo.jpg')}
               style = {{width:50,height:50,justifyContent: 'center',borderRadius:10,borderColor:'#f4511e',borderWidth:1}}/>}
       left = {<Text style={{fontSize:24,fontWeight:'bold',color:'white'}}> Home </Text>}
  />
)}

const Home = ({ navigation }) => {
  const appKey = '5686291'
  const appURL = 'https://desolate-brook-83944.herokuapp.com/appKey'
  const info = {appKey,appURL}
  const UserKeyScreen = () => {
    const [debugging,setDebugging] = useState('true')
    const {currentValue,setCurrentValue} = useValue()

      useEffect(() => { getUserKey()},
                [])

      const getUserKey = async () => {
        const appKey = currentValue.appKey
        const appURL = currentValue.appURL
         try {
           let jsonValue = await AsyncStorage.getItem('@userKey')
           let userKey = null
           if (jsonValue!=null) {
             userKey = JSON.parse(jsonValue)
             let newInfo = {appKey,appURL,userKey:userKey}
             setCurrentValue(newInfo)
           } else {
             let result =
               await Axios.post(appURL+'/getNewUserKey',{appKey:appKey})
             userKey = result.info.userKey
             setCurrentValue({appKey,appURL,userKey})

             await AsyncStorage.setItem(
               '@userKey',
               JSON.stringify(userKey))
           }
         } catch(e) {
         }
      }

    let ui = <View></View>
    if (debugging) {
      ui = (
        <View>
          <Text>
              currentValue={JSON.stringify(currentValue,null,5)}
          </Text>
        </View>
      )
    }

    return (
      <View>
          {ui}
          <Button title="Toggle Network data"
                  color="lightgreen"
                  onPress = {() => setDebugging(!debugging)} />

      </View>
    )
  }



  return (
    <ScreenTemplate
        header={<Header />}
    >
      <ValueProvider value={info}>
        <Activity/>
        <UserKeyScreen/>
      </ValueProvider>
    </ScreenTemplate>
  );
};


export default Home
