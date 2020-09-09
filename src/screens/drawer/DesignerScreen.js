import React, { useState, useEffect } from 'react'
// import { getStyles } from "../../redux/action";


import { connect } from 'react-redux'
import { 
  ScrollView,
  View, 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback,
  Keyboard, 
  FlatList
} from 'react-native'
import DesignerCard from '../../components/DesignerCard'

const DesignerScreen = props => {

  const [designers, setDesigners] = useState(props.designers.designers)

  useEffect(() => {
    designers
  }, [designers])

  // useEffect(() => {
  //   props.getStyles()
  // }, [])

  const handleSelectDesigner = () => {
    props.navigation.navigate("StylePage")
  }

  let favs = props.buyer.buyer.fav_designers
  let filterDesigners = designers.filter( designer => !favs.some(fav => fav.id === designer.id))

  let allDesigners = filterDesigners.map(designer => 
    <DesignerCard
      handleSelectDesigner={handleSelectDesigner}
      designer={designer.name}
      photo={designer.img}
      key={designer.id}
      id={designer.id}>
    </DesignerCard>)

  return (   
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        
        <View style={styles.screen}>
          {/* <Text style={styles.title} >All Designers</Text> */}
          {allDesigners}
        
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

// function mdp(dispatch) {
//   return { getStyles: () => dispatch(getStyles())}
// }

export default connect(msp)(DesignerScreen)