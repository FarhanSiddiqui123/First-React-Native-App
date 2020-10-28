//import { styles } from "../../styles/styles";

import React,{Component} from 'react';
import styles from "../../styles/auth-style";
import {Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TextInput,TouchableOpacity, TouchableWithoutFeedback,View} from "react-native";


export default class Login extends Component {
     
myFunction(){
  this.props.navigation.navigate('app')
}
  render() {
      return (
          <SafeAreaView style={styles.container}>
              <KeyboardAvoidingView behavior='padding' style={styles.container}>
                  <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                      <View style={styles.container}>
                          <View style={styles.container}>
                              <Text style={styles.title}>
                                  LOGIN INFO
                              </Text>
                              <View style={styles.infoContainer}>
                                  <TextInput style={styles.input}
                                      placeholder='Username/Email'
                                      placeholderTextColor='rgba(255,255,255,0.8)'
                                      keyboardType='email-address'
                                      returnKeyType='next'
                                      autoCorrect={false}
                                      onSubmitEditing={()=>this.refs.txtPassword.focus()}
                                  />
                                  <TextInput style={styles.input}
                                      placeholder='Password'
                                      placeholderTextColor='rgba(255,255,255,0.8)'
                                      returnKeyType='go'
                                      autoCorrect={false}
                                      secureTextEntry
                                      ref={"txtPassword"}
                                  />
                                  <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.myFunction()} >
                                      <Text style={styles.buttonText}>
                                          LOGIN
                                      </Text>
                                      </TouchableOpacity>
                              </View>
                          </View>
                      </View>
                  </TouchableWithoutFeedback>
              </KeyboardAvoidingView>

          </SafeAreaView>
      )
  }
}