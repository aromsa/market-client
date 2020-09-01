import React from 'react'

import { connect } from 'react-redux'
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
// '../../styles/styles.js'
import DesignerCard from '../../components/DesignerCard'

const DesignerScreen = props => {

  // console.log("Designer Screen: ", props.designers.designers)
 
  let allDesigners = props.designers.designers.map(designer => 
    <DesignerCard
      designer={designer.name}
      photo={designer.img}
      key={designer.id}
      id={designer.id}>
    </DesignerCard>)

  return (    
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.screen}>
          <Text style={styles.title} >All Designers</Text>
          {allDesigners}
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

const msp = (state) => {
  return {buyer: state.buyer, designers: state.designers}
}

export default connect(msp)(DesignerScreen)