import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ newSubject }) =>{
  const [input,setInput]=useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foco-Doro</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} onChangeText={val => setInput(val)} label="What's in your mind?" />
        <View style={styles.button}>
          <RoundedButton title='+' size={50} onPress={() => newSubject(input)} />
        </View>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  inputContainer: {
    justifyContent: 'center',
    flexDirection:'row'
  },
  TextInput:{
    flex:1,
    marginRight:10,
    marginVertical:10
  },
  button:{
    justifyContent:'center'
  },
  title:{
    flex: 0.6,
    textAlign:'center',
    color:colors.white,
    fontWeight:'bold',
    fontSize:40,
    fontFamily: 'sans-serif-medium'
  }
});

