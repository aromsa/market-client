import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  Text, 
  Button, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const HomePage = props => {

  const [enterValue, setEnteredValue] = useState('')

  const numberInputHander = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    Alert.alert("test")
    let value = ""
    setEnteredValue(value)
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.title} >Home Page</Text>
        <Card style={styles.card}>
          <Text>Designer</Text>
          <Input 
          style={styles.input} 
          blurOnSubmit 
          autoCapitalize='none' 
          autoCorrect={false} 
          keyboardType='number-pad' 
          maxLength={2}
          onChangeText={numberInputHander}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Like" onPress={() => {}} color={Colors.accent}/></View>
            <View style={styles.button}><Button title="Unlike" onPress={resetInputHandler} color={Colors.primary}/></View>
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
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width:100
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: 100,
    textAlign: 'center'
  }
})

export default HomePage