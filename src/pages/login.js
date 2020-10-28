//import { styles } from "../../styles/styles";

import React,{Component} from 'react';
import Button from "../styles/button";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";
export default class Login extends Component{
   
myFunction(){
  this.props.navigation.navigate('app')
}
  
 render(){ 
   return (
<View style={styles.container}>
  
<Text style={styles.title}>Welcome..</Text>
<Button text='Login Here' color='#009688' onPress={()=>this.myFunction()}/>

</View>
    
  );
}

}
    /////// NOT A GOOD PRACTICE BUT JUST FOR TEST CASE ///// 
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  title:{
    fontSize:38,
    fontWeight: "bold",
    textAlign:'center',
    color:'black'
  }
})
