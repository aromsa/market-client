import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Colors from '../styles/colors'
import DesignerCard from '../components/DesignerCard'

import { connect } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';
import { 
  View, 
  StyleSheet, 
  Text, 
  Button, 
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native'

const BuyerHomePage = props => {

  const buyerName = () => {
    let name = props.buyer.buyer.name
    let firstName = name.split(" ", 1)
    return firstName
  }

  useEffect(() => {
    props.desingers
  }, [props.designers])
 
  // console.log(props.buyer.buyer.fav_designers[0].img)

  let favDesigners = props.buyer.buyer.fav_designers.map(designer => 
    <DesignerCard  
      designer={designer.name}
      photo={designer.img}
      key={designer.id}>
      {/* <Text>{designer.name}</Text>
      <Image
        style={styles.stretch}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}><Button title="Like" onPress={props.onSelectedStyle} color={Colors.accent}/></View>
        <View style={styles.button}><Button title="View Styles" onPress={() => {resetInputHandler}} color={Colors.primary}/></View>
      </View> */}
    </DesignerCard>)

  return (     
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.title} >Welcome back {buyerName()}!</Text>
        {favDesigners}
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
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  button: {
    width:150
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

const msp = (state) => {
  // console.log("State in msp: ", state.buyer, state.designers)
  return {buyer: state.buyer, designers: state.designers}
}

export default connect(msp)(BuyerHomePage)