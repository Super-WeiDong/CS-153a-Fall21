import React, { useState, useEffect } from "react";
import {Image,SafeAreaView, View,Text,TextInput,
        Button,TouchableOpacity,
        FlatList,StyleSheet, ScrollView} from 'react-native'
import Axios from 'axios'
import TwoPartRow from './TwoPartRow'
import ScreenTemplate from './ScreenTemplate'
import ValueProvider,{useValue} from './ValueContext';

const Header = () => {
  return (
  <TwoPartRow
       right = {<View style={{backgroundColor:'f4511e',height: 50,width: 50}}></View>}
       left = {<Text style={{fontSize:24,fontWeight:'bold',color:'white'}}> Home </Text>}
  />
)}

const flagPost = (item) => {return 0}


const Home = () => {
  const {currentValue} = useValue();
  const [title,setTitle] = useState("");
  const [text,setText] = useState("");
  const [bboard,setBboard] = useState("");
  const [posts,setPosts] = useState([]);
  const [numNewPosts,setNumNewPosts] = useState(0)

  useEffect(() => {
    // go out to the server and get the posts for the current bboard

    const getPosts = async () => {
      let result = {data:[]}
      result =
        await Axios.post(
          currentValue.appURL+"/posts",
          {bboard:bboard}
        )
      setPosts(result.data)
      return result.data
    }

    const ps = getPosts()

  },[bboard,numNewPosts])


  const addPost = async () =>{

    await Axios.post(currentValue.appURL+"/addComment",
        {email:currentValue.email,
         secret:currentValue.secret,
         bboard:bboard,
         title:title,
         text:text,
       });
    setTitle("");
    setText("");

    setNumNewPosts(numNewPosts+1)
  }

  const remove = async (item) => {
    console.log('remove is called on item: ')
    console.log(item)
    const result = await Axios.post(currentValue.appURL+"/deletePost",
       {email:currentValue.email,
        secret:currentValue.secret,
        postid:item._id})
    console.log(result)
    setNumNewPosts(numNewPosts+1)
  }

  const Item = ({item}) => {
       const userid = currentValue.userid;
       const isAuthor = userid === item.author;


    return (
      <View style={{borderColor:'white',borderWidth:5,borderRadius:20,padding:10,margin:10,backgroundColor:"white"}}>
        <Text style={{marginRight:5,fontSize:22, color:'#f4511e',fontWeight:'bold'}}>{item.title}</Text>
        <Text style={{marginRight:5,fontSize:18, color:'black'}}>{item.text}</Text>
        <Text style={{marginRight:5,fontSize:15, color:'black'}}>Post Data:{item.createdAt}</Text>

        {isAuthor &&
        <Button
            color='#f4511e'
            title="Delete"
            onPress={()=>remove(item)}/> }
        <Button
          color='#f4511e'
          title="Join"
          onPress={() => flagPost(item)}
        />
      </View>
    )
  }


  return (
    <ScreenTemplate
        header={<Header />}
    >
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        <View style={styles.input}>
          <Text style={{marginRight:5,fontSize:20, color:'#f4511e',fontWeight:'bold'}}>Activity Type</Text>
          <Text style={{marginRight:5,fontSize:15, color:'#f4511e'}}>{""+posts.length} types of activities in teammate</Text>
          <TextInput
              style={{ height: 40,width: 350,fontSize:18 }}
              onChangeText={(text) => setBboard(text)}
              placeholder="sport/music/shopping/lecture..etc"/>
        </View>

        <View style={styles.input}>
            <Text style={{marginRight:5,fontSize:20, color:'#f4511e',fontWeight:'bold'}}> Create your own activity</Text>
            <TextInput
                style={{ height: 40,width: 350,fontSize:18 }}
                onChangeText={(text) => setTitle(text)}
                value={title}
                placeholder="Activity name"/>
            <TextInput
                style={{ height: 40,width: 350,fontSize:18 }}
                onChangeText={(text) => setText(text)}
                value={text}
                placeholder="Data/Location/Requirement..."/>
            <TouchableOpacity
                onPress = {() => addPost()}
                style={{height:30,width:300,backgroundColor:"white"}}>
                <Text style={{marginRight:5,fontSize:22, color:'#f4511e',fontWeight:'bold'}}>                         Submit</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            style={{flex:1}}
            data = {posts}
            renderItem = {({item}) => (<Item item={item}/>)}
            keyExtractor = {(item) => item._id}
        />
      </ScrollView>
      </SafeAreaView>
    </ScreenTemplate>
  )
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
  input:{
    borderColor:'#f4511e',
    borderWidth:5,
    borderRadius:20,
    backgroundColor:'white',
    padding:5,
    margin:5,

  },
  posts:{
    borderColor:'#f4511e',
    borderWidth:5,
    borderRadius:20,
    backgroundColor:'white',
    padding:5,
    margin:5,

  },
})

export default Home;
