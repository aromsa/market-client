import React, { useEffect } from 'react'
import DesignerCard from '../components/DesignerCard'

import { connect } from 'react-redux'
import { 
  View, 
  StyleSheet, 
  Text,  
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

const BuyerHomePage = props => {

  const buyerName = () => {
    let name = props.buyer.buyer.name
    let firstName = name.split(" ", 1)
    return firstName
  }

  useEffect(() => {
    props.desingers
    console.log("Designers UseEffect: ", props.designers.designers)
  }, [props.designers])

  let favDesigners = props.buyer.buyer.fav_designers.map(designer => 
    <DesignerCard  
      designer={designer.name}
      photo={designer.img}
      key={designer.id}>
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
  return {buyer: state.buyer, designers: state.designers}
}

export default connect(msp)(BuyerHomePage)