import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView} from 'react-native'
import StyleCard from '../components/StyleCard'

const StylePage = props => {

  // const addLikedStyle = (buyerid, styleid) => {
  //   console.log(buyerid, styleid)
  // }

  let allStyles = props.styles.styles
  let designerStyles = allStyles.map(style => 
    <View style={styles.box}>
    <StyleCard
      // addLikedStyle={addLikedStyle}
      style={style.style_name}
      photo={style.images[0].img}
      size={style.size}
      retail={style.retail}
      key={style.id}
      id={style.id}>
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