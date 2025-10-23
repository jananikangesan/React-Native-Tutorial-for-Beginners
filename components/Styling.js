import { View, Text,StyleSheet } from 'react-native'



export default function Styling() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightgreenBg,styles.box,styles.androidShadow]}>
          <Text style={styles.title}>StylSheet API Creation</Text>
      </View>
      <View style={[styles.box,styles.lightblueBg,styles.boxShadow]}>
        <Text>Lightgreen box</Text>
      </View>
      <View style={[styles.darkMode]}> 
        <Text style={[styles.darkModeText, styles.boldText]}>Style inheritance</Text>
      </View>
    </View>
    
  )
}

const styles=StyleSheet.create({
    container:{flex:1, backgroundColor:"yellow", padding:60},
    title:{fontStyle:"italic"},
    darkMode:{
       backgroundColor:"black",
     
    },
    darkModeText:{
      color:"white",
    },
    boldText:{
      fontWeight:"bold",
    },
    box:{
      width:200,
       height:200,
      //  padding:"10%",
      paddingHorizontal:10,
      paddingVertical:20,
       backgroundColor:"pink",
       marginVertical:10,
       borderWidth:2,
       borderColor:"purple",
       borderRadius:5,

    },
    lightblueBg:{
       backgroundColor:"lightblue",
      
    },
    lightgreenBg:{
       backgroundColor:"lightgreen",
      
    },
    boxShadow:{
      shadowColor: "#3333333",
      shadowOffset:{
        width:6,
        height:6
      },
      shadowOpacity:0.6,
      shadowRadius:4,
    },
    androidShadow:{
      elevation:10,
    }


})