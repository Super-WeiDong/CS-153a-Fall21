import React, { useState, useEffect } from "react";
import {Image,View,StyleSheet,Text,TextInput,Button,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
import TwoPartRow from './TwoPartRow'
import ScreenTemplate from './ScreenTemplate'
import ValueProvider,{useValue} from './ValueContext';

const Header = () => {
  return (
  <TwoPartRow
       right = {<View style={{backgroundColor:'f4511e',height: 50,width: 50}}></View>}
       left = {<Text style={{fontSize:24,fontWeight:'bold',color:'white'}}> Registration </Text>}
  />
)}
const Registration = () => {
    const {currentValue,setCurrentValue} = useValue()
    const [debugging,setDebugging] = useState(true)
    const [email,setEmail] = useState("")
    const [checkedRegistration, setCheckedRegistration] = useState(false)


    useEffect(() => { getUserData()}, [])

    const registerEmail = async (email) => {
      try{
          let appURL = currentValue.appURL
          let result = await Axios.post(appURL+'/register',{email:email})
          let secret = result.data.secret
          let userid = result.data.userid

          await AsyncStorage.setItem(
            '@userData',
            JSON.stringify({...currentValue,email,secret,userid}))
          setEmail(email)
          setCurrentValue({...currentValue,email,secret,userid})
        }catch(e){
          console.log('error'+e)
          console.dir(e)

        }
    }

    const getUserData = async () => {
      let email = currentValue.email
      let secret = currentValue.secret
      const appURL = currentValue.appURL
      // this function gets the userKey from asyncStorage if it is there
      // if not, it goes to the appURL to get a userKey which it stores in asyncStorage
       try {
         console.log('in getUserData')
         let jsonValue = await AsyncStorage.getItem('@userData')
         //jsonValue=null
         console.log('jsonValue = '+jsonValue)

         let userData = null
         if (jsonValue!=null) {
           userData = JSON.parse(jsonValue)
           let newData =
            {appURL:currentValue.appURL,
              email:userData.email,
              userid:userData.userid,
              secret:userData.secret}
           setCurrentValue(newData)
           setEmail(userData.email)
           setCheckedRegistration(true)

         } else {
              console.log('else clause of Registration')
              setCheckedRegistration(true)
              console.log('no async, set checked to true')
         }
       } catch(e) {
         console.dir(e)
       }
    }

  return (
    <ScreenTemplate
        header={<Header />}
    >
      <View style={styles.login}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Image source={require('./logo.jpg')}
                  style = {{width:100,height:100,justifyContent: 'center',borderRadius:20,borderColor:'#f4511e',borderWidth:1}}/>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={{fontSize:26, color:'#f4511e',fontWeight:'bold'}}>Welcome to Teammate</Text>
          <Text style={{fontSize:15,color:'grey'}}>Create a new account</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <View style={{padding:10,margin:10,backgroundColor:"white",alignItems:'center'}}>
               <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                  <Text style={{fontSize:20,color:'#f4511e'}}>Email: </Text>
                  <TextInput
                       style={{fontSize:20,color:'black',width:230}}
                       placeholder="   Enter your email "
                       value={email}
                       onChangeText={text =>{ setEmail(text) }}
                  />
               </View>
               <Text></Text>
               {currentValue.email==""?
               (<TouchableOpacity
                  onPress = {() => registerEmail(email)}
               >
                 <Text style={{fontSize:20,color:'#f4511e'}}>Register </Text>
               </TouchableOpacity>)
               :
               (<TouchableOpacity
                  onPress={async () => {
                    AsyncStorage.clear()
                    setEmail("")
                    setCurrentValue(
                      {appURL:currentValue.appURL,email:"",secret:""})
                  }}
               >
                 <Text style={{fontSize:20,color:'#f4511e'}}> Logout </Text>
               </TouchableOpacity>
             )}

          </View>
       </View>
     </ScreenTemplate>
   )
}

const styles = StyleSheet.create({
  login:{
    backgroundColor: 'whitesmoke',
    height: 860,
    width: 395,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'center',
    padding:20,
  },
});

export default Registration;
