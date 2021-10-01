import React from 'react';
import { StyleSheet, Button,Text, View, Image,TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        title: 'My home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
        <Stack.Screen name="Chat" component={Chat} options={{
          title: 'Chat',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Input" component={Input} options={{
          title: 'Creat',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="About" component={About} options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Fresh" component={Fresh} options={{
          title: 'Fresh',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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

const createPostButtonAlert = () =>
  Alert.alert(
    "Bingo!",
    "Post Successfully",
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

const Home = ({ navigation }) => {
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
      </View>
    </View>
  );
};

const About = ({navigation}) =>{
  return (
    <View style={styles.about}>
      <View style={{flex:5,alignItems: 'center',justifyContent: 'center'}}>
      <Image source={require('./logo.jpg')}
              style = {{width:100,height:100,justifyContent: 'center',borderRadius:20,borderColor:'#f4511e',borderWidth:1}}/>
      </View>
      <View style={{flex:1,alignItems: 'center',justifyContent: 'flex-end'}}>
        <Text style={{fontSize:30,color:'#f4511e',fontWeight:'bold'}}>Teammate</Text>
        <Text style={{fontSize:15,color:'grey'}}>Version 0.0.1</Text>
      </View>
      <View style={{flex:4,justifyContent: 'flex-start'}}>
      </View>
      <View style={{flex:10,justifyContent: 'flex-start'}}>
      <View style ={{backgroundColor:"white"}}>
        <Button title={"√  Rate at AppStroe                     >"} color='#f4511e'/>
      </View>
      <View><Text></Text></View>
      <View style ={{backgroundColor:"white"}}>
        <Button title={"?  What's Fresh                             >"} color='#f4511e'
        onPress={() =>navigation.navigate('Fresh')}/>
      </View>
      <View><Text></Text></View>
      <View style ={{backgroundColor:"white"}}>
        <Button title={"↑  Version Update                         >"} color='#f4511e'/>
      </View>
      <View><Text></Text></View>
      <View style ={{backgroundColor:"white"}}>
        <Button title={"@  About Developer                       >"} color='#f4511e'/>
      </View>
      </View>
    </View>
  );
};

const Input = () =>{
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

const Chat = () =>{
  return (
    <View style={styles.container}>
      <ChatBar uri = "https://avatars.githubusercontent.com/u/195879?v=4"
      name="Tim"
      words="Today we will havs quiz 3a,3b,3c,3d"
      time="0:01 am"
      />
    </View>
  );
}

const ChatBar = ({uri,name,words,time}) =>{
  return (
    <View style={{backgroundColor:'white',flexDirection:'row',alignItems: 'center',justifyContent: 'flex-start',padding:15}}>
      <View style={{flex:5}}>
        <Image source={{uri: uri}}
              style = {{width:60,height:60,justifyContent: 'center',borderRadius:20}}/>
      </View>
      <View style={{flex:15,alignItems: 'flex-start',justifyContent: 'flex-start'}}>
        <Text style={{fontSize:20}}>{name}</Text>
        <Text style={{fontSize:12}}>{words}</Text>
      </View>
      <View style={{flex:3,alignItems: 'flex-start',justifyContent: 'flex-start'}}>
        <Text style={{fontSize:10,color:'grey'}}>{time}</Text>
      </View>
    </View>
  );
}

const Fresh = () =>{
  return (
    <View style={styles.fresh}>
      <View>
      <Text></Text><Text></Text><Text></Text>
      </View>
      <View >
        <Image source={require('./logo.jpg')}
            style = {{width:100,height:100,justifyContent: 'center',borderRadius:20,borderColor:'#f4511e',borderWidth:1}}/>
      </View>
      <View>
       <Text></Text><Text></Text><Text></Text>
      </View>
      <View style={styles.fresh}>
        <Text style={{fontSize:20,color:'#f4511e',fontWeight:'bold'}}>Teammate is an app helps you find your teammates easily
         when you want to initiate or join an activity! </Text>
      </View>
    </View>
  );
}

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
  about: {
    backgroundColor:'whitesmoke',
    height: 860,
    width: 395,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  item:{
    borderColor: "grey",
    borderWidth: 2,
  },
  fresh: {
    height: 860,
    width: 395,
    flexDirection:'column',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:30
  },
});

export default MyStack;
