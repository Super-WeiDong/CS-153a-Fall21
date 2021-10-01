import * as React from 'react';

import { StyleSheet, Text, View, Button, } from 'react-native';
import Content from './Content'
import About from './About'
import Input from './Input'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Input" component={Input}/>
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Content/>
        <Content/>
      </View>
      <View style={styles.bottom}>
        <View style={{flex:1,backgroundColor:'black'}}>
          <Button title="Forum" onPress={() =>navigation.navigate('About')} color='white'/>
        </View>
        <View style={{flex:1,backgroundColor:'black'}}>
          <Button title="+" onPress={() =>navigation.navigate('Input')} color='white'/>
        </View>
        <View style={{flex:1,backgroundColor:'black'}}>
          <Button title="About" onPress={() =>navigation.navigate('About')} color='white'/>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    height: 860,
    width: 400,
    flexDirection:'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottom:{
    height: 50,
    width: 400,
    flexDirection:'row',
    alignItems: 'flex-end',
    justifyContent:'flex-start',
  },
  content:{
    height: 660,
    width: 400,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export default MyStack;
