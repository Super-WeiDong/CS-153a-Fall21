import React from "react";
import { SafeAreaView, View} from 'react-native'

const ScreenTemplate = ({header,children}) => {
  return (
    <SafeAreaView style={{flex:1,padding:0,margin:0}}>
      {header}
      <View style={{flex:1, backgroundColor:"#eee"}}>
            {children}
      </View>
    </SafeAreaView>
  )
}
export default ScreenTemplate
