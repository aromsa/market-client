import React, { useEffect } from 'react'
import DesignerCard from '../components/DesignerCard'
import { getStyles } from "../redux/action";


import { connect } from 'react-redux'
import { 
  View, 
  StyleSheet, 
  Text,  
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native'

const BuyerHomePage = props => {

  const buyerName = () => {
    let name = props.buyer.buyer.name
    let firstName = name.split(" ", 1)
    return firstName
  }

  useEffect(() => {
    props.desingers
    // console.log("Designers UseEffect: ", props.buyer.buyer.favorite_designers.map(fav => fav))
  }, [props.designers])

  useEffect(() => {
    props.getStyles()
  }, [])

  const handleSelectDesigner = () => {
    // console.log("clicked")
    props.navigation.navigate("StylePage")
  }

  let favs = props.buyer.buyer.favorite_designers
  let favDesigners = favs.map(fav => 
    <DesignerCard
      handleSelectDesigner={handleSelectDesigner}
      like={true}
      designer={fav.designer.name}
      photo={fav.designer.img}
      key={fav.designer.id}
      id={fav.id}>
    </DesignerCard>)

  return (  
    <ScrollView>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        {/* <Text style={styles.title} >Welcome back {buyerName()}</Text> */}
        {favDesigners}
      </View>
    </TouchableWithoutFeedback>
    </ScrollView>  
  )
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  // card: {
  //   width: 300,
  //   maxWidth: '80%',
  //   alignItems: 'center',
  // },
  // buttonContainer: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   justifyContent: 'center',
  //   paddingHorizontal: 15
  // },
  // button: {
  //   width:150
  // },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  // input: {
  //   width: 100,
  //   textAlign: 'center'
  // }
})

const msp = (state) => {
  return {buyer: state.buyer, designers: state.designers}
}

function mdp(dispatch) {
  return { getStyles: () => dispatch(getStyles())}
}

export default connect(msp, mdp)(BuyerHomePage)