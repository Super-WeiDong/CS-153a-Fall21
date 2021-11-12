import React from "react";
import {View,  StyleSheet} from 'react-native'

const TwoPartRow = ({left,content,right}) => {
  return (
    <View style={styles.banner}>
       {left}
       {right}
    </View>
   )

}

const styles=StyleSheet.create({
  banner:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#f4511e',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:5,
    paddingBottom:5,
  }
})

export default TwoPartRow
