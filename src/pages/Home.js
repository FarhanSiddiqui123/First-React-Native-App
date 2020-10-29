import React,{Component} from 'react';
import {Text,View,Button} from "react-native";
export default class Home extends Component{
  myFunction(){
    this.props.navigation.navigate('login')
  }
    render()
    {
     return(
       
  <View >
  <Button onPress={()=>this.myFunction()} title="Logout" />
    <Text>Home Page</Text>
  </View>
    )
    }
  }