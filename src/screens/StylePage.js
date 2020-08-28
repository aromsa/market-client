import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
import Card from '../components/Card'

const StylePage = props => {

  return (
    <View style={styles.screen}>
      <Card style={styles.buttonContainer}>
        <Button onPress={() => {}} title="Like"/>
        <Button onPress={() => {}} title="Pass"/>
      </Card>
    </View>
  )

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
})

export default StylePage