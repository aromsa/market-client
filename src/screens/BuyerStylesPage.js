import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView} from 'react-native'
import StyleCard from '../components/StyleCard'

const BuyerStylePage = props => {

  // const addLikedStyle = (buyerid, styleid) => {
  //   console.log(buyerid, styleid)
  // }

  // console.log(props.buyer.buyer.selected_styles)

  let selectedStyles = props.buyer.buyer.selected_styles
  // console.log(selectedStyles.map(style => style.style.style_name))
  let designerStyles = selectedStyles.map(style => 
    <View key={style.style.id} style={styles.box}>
    <StyleCard
      // addLikedStyle={addLikedStyle}
      like={true}
      style={style.style.style_name}
      photo={style.style.images[0].img}
      size={style.style.size}
      retail={style.style.retail}
      id={style.style.id}>
    </StyleCard>
    </View>)

  return (
    <ScrollView>
      <View style={styles.container}>
        {designerStyles}
      </View>
    </ScrollView>
  )
}

const msp = (state) => {
  return {buyer: state.buyer}
}

export default connect(msp)(BuyerStylePage)

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