import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { 
  View, 
  StyleSheet, 
  Text, 
  Button, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Platform,
  TouchableOpacity,
  Linking,
  AppRegistry
} from 'react-native'
import Card from '../components/Card'
import Colors from '../styles/colors'
import Input from '../components/Input'

const LoginPage = props => {


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.title} >WELCOME TO MARKET</Text>
        <Card style={styles.card}>
          <Text>SIGN IN</Text>
          <Input placeholder='username'
          style={styles.input} 
          blurOnSubmit 
          autoCapitalize='none' 
          autoCorrect={false} 
         />
         <Input placeholder='password'
          style={styles.input} 
          blurOnSubmit 
          autoCapitalize='none' 
          autoCorrect={false} 
         />
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Sign In" onPress={props.onSelectedStyle} color={Colors.accent}/></View>
          </View>
          <View>
            <Text style={styles.cardFooter}>Don't have an account?</Text>
            <Text style={styles.textUnderline} onPress={() => Linking.openURL('http://google.com')}>Brand Registration | Buyer Registration</Text>
            <Text style={styles.textUnderline}>Reset your password</Text>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  card: {
    width: 300,
    maxWidth: '90%',
    // alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10
  },
  button: {
    width:100
  },
  title: {
    fontSize: 20,
    marginVertical: 50,
  },
  input: {
    width: "100%",
    textAlign: 'center'
  },
  cardFooter: {
    width: "100%",
    textAlign: 'center'
  },
 textUnderline: {
  width: "100%",
  textAlign: 'center',
  textDecorationLine: 'underline'
 }
})

export default LoginPage

// Alert.alert("test")