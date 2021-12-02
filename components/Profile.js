import React from 'react';
import {Image,Text, View } from 'react-native';
import {useValue} from './ValueContext';
import TwoPartRow from './TwoPartRow'
import ScreenTemplate from './ScreenTemplate'
const Header = () => {
  return (
  <TwoPartRow
       right = {<View style={{backgroundColor:'f4511e',height: 50,width: 50}}></View>}
       left = {<Text style={{fontSize:24,fontWeight:'bold',color:'white'}}> Peofile </Text>}
  />
)}

export default function Profile() {
  let {currentValue} = useValue()
  return (
    <ScreenTemplate
        header={<Header />}
    >
    <View style={{flex:1,padding:15,backgroundColor:"whitesmoke"}}>
        <Text></Text>
        <View style={{flexDirection:'row'}}>
          <Image source={{uri: "https://img1.baidu.com/it/u=2057074169,1310918818&fm=26&fmt=auto"}}
                  style = {{width:80,height:80,justifyContent: 'center',borderRadius:20}}/>
          <View>
          <Text></Text>
          <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>     Email:{currentValue.email}</Text>
          <Text style={{fontSize:20, color:'#f4511e',fontWeight:'bold'}}>     Secret:{currentValue.secret}</Text>
          </View>
        </View>
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize:18,fontWeight:'bold'}}>UserId:</Text>
        <Text style={{fontSize:17}}>{currentValue.userid}</Text>
        <Text></Text>
        <Text style={{fontSize:18,fontWeight:'bold'}}>AppURL:</Text>
        <Text style={{fontSize:17}}>{currentValue.appURL}</Text>
    </View>
    </ScreenTemplate>
  )
}
