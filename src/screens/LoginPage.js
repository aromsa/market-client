import React, { useState } from 'react'
import Card from '../components/Card'
import Colors from '../styles/colors'
import Input from '../components/Input'
// import PasswordInputText from 'react-native-hide-show-password-input';

import { 
  View, 
  StyleSheet, 
  Text, 
  Button, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Linking,
} from 'react-native'

const LoginPage = props => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  const usernameInputHandler = (username) => { 
    setUsername(username)
  }
  
  const passwordInputHandler = (password) => { 
    setPassword(password)
  }

  const handleSignInSubmit = () => {
    console.log("Login form has been submitted")
    fetch("http://localhost:3000/buyers/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(r => r.json())
    .then(handleResponse)
  }

  const handleResponse = (resp) => {
    setUsername('')
    setPassword('')
    if (resp.id) {
      // console.log("if", resp)
      setUser(resp)
      props.navigation.navigate('BuyerHomePage')
    } else {
      Alert.alert(resp.message)
      console.log("Login handleResponse else statement", resp)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.title} >WELCOME TO MARKET</Text>
        <Card style={styles.card}>
          <Text>SIGN IN</Text>
          <Input placeholder='username'
          onChangeText={usernameInputHandler}
          value={username}
          style={styles.input} 
          blurOnSubmit 
          autoCapitalize='none' 
          autoCorrect={false} 
         />
         <Input placeholder='password'
          onChangeText={passwordInputHandler}
          value={password}
          style={styles.input} 
          blurOnSubmit 
          autoCapitalize='none' 
          autoCorrect={false} 
         />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Sign In" onPress={handleSignInSubmit} color={Colors.accent}/>
            </View>
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