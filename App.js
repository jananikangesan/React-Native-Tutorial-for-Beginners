import { useState } from 'react';
import {View,Text, Image,ImageBackground, ScrollView, Button,Pressable,Modal, StatusBar, ActivityIndicator, Alert, StyleSheet} from  'react-native'
import Greet from './components/Greet';
import Styling from './components/Styling';
import Box from './components/Box';


const logoImg=require("./assets/adaptive-icon.png")


export default function App(){

  //const [isModalVisible,setIsModalVisible]=useState(false);

  return(
  <View style={[styles.container]}>
    {/* <ScrollView> */}
    {/* <View style={{width:200,height:200,backgroundColor:"lightblue"}}></View>
    <View style={{width:200,height:200,backgroundColor:"lightgreen"}}></View> */}
    {/* <Text>
       <Text style={{color:"white"}}>Hello</Text>   world
    </Text> */}

   
   
    {/* <Image source={{uri:'https://picsum.photos/200'}} style={{width:300, height:300}}/> */}

    {/* <Pressable onPress={()=>console.log("Image pressed!")}>
      <Image source={logoImg} style={{width:300, height:300}}/>  
    </Pressable> */}


    {/* <ImageBackground source={logoImg} style={{flex:1}}>
      <Text>Image Text</Text>
    </ImageBackground> */}
   

    {/* <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </Text>
     <Image source={logoImg} style={{width:300, height:300}}/>

  </ScrollView> */}
  {/* <Button title='press' onPress={()=>console.log("button pressed!")} color="midnightblue" disabled/> */}

{/* <Button title='press' onPress={()=>setIsModalVisible(true)} color="midnightblue" />

  <Modal visible={isModalVisible} onRequestClose={()=>setIsModalVisible(false) } animationType="fade" presentationStyle='pageSheet'>

    <View style={{flex:1, backgroundColor:"lightblue", padding:60}}>
      <Text>Modal Content</Text>
      <Button title='Close' color="midnightblue" onPress={()=>setIsModalVisible(false)}></Button>
    </View>
  </Modal> */}
  {/* <StatusBar backgroundColor="lightgreen" barStyle="default" hidden/> */}

  {/* <ActivityIndicator/>
  <ActivityIndicator size="large"/>
  <ActivityIndicator size="large" color="midnightblue"/>
  <ActivityIndicator size="large" color="midnightblue" animating={false}/><ActivityIndicator size="large"/> */}


{/* <Button title='Alert' onPress={()=>Alert.alert("Invalid data!")}/>
  <Button title='Alert 2' onPress={()=>Alert.alert("Invalid data!","DOB incorrect")}/>
    <Button title='Alert 3' onPress={()=>Alert.alert("Invalid data!","DOB incorrect",[
      {
        text:'Cancel',
        onPress:()=>console.log("cancel pressed")
      },
      {
        text:'ok',
        onPress:()=>console.log("ok pressed")
      },
    ])}/> */}
    {/* <Greet name="Bruce Wayne"/>
    <Greet name="Clark Kent"/> */}
    {/* <Styling/> */}

    
    <Box style={{backgroundColor:"#8e9b00"}} children="box1"/>
    <Box style={{backgroundColor:"#3d53c5ff"}}>box2</Box>
    <Box style={{backgroundColor:"#d8491eff"}}>box3</Box>
    {/* <Box style={{backgroundColor:"#9b0000ff"}}>box4</Box>
    <Box style={{backgroundColor:"#de37c7ff"}}>box5</Box> */}


  </View>);



}

const styles=StyleSheet.create({
  container:{
    //flex:1,
    //flexDirection:"row-reverse",
    //justifyContent:"flex-start",
    //alignItems:"flex-start",
    flexWrap: "nowrap",
    height:200,
    marginTop:64,
    borderWidth:6,
    borderColor:"red",
  },
})