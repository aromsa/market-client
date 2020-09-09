import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView} from 'react-native'
import StyleCard from '../components/StyleCard'

const StylePage = props => {

  // const addLikedStyle = (buyerid, styleid) => {
  //   console.log(buyerid, styleid)
  // }

  // console.log(props.styleDetails)

  const handleSelectStyle = (styleid) => {
    props.navigation.navigate("Style Detail Page", {styleid: styleid})
  }

  let allStyles = props.styles.styles
  let selectStyles = allStyles.map(style => 
    <View key={style.id} style={styles.box}>
    <StyleCard
      handleSelectStyle={handleSelectStyle}
      // addLikedStyle={addLikedStyle}
      styleDetails={props.styleDetails}
      style={style.style_name}
      photo={style.images[0].img}
      size={style.size}
      retail={style.retail}
      id={style.id}>
    </StyleCard>
    </View>)

  return (
    <ScrollView>
      <View style={styles.container}>
        {selectStyles}
      </View>
    </ScrollView>
  )
}

const msp = (state) => {
  return {styles: state.styles}
}

export default connect(msp)(StylePage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
  box: {
    width: '50%',
    height: 280,
    maxHeight: 280,
    minHeight: 280
  },

})