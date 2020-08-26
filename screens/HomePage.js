import React from 'react'
import { View, StyleSheet, Text, TextInput, Button} from 'react-native'

const HomePage = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title} >Home Page</Text>
      <View style={styles.card}>
        <Text>Designer</Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <Button title="Like" onPress={() => {}}/>
          <Button title="Unlike" onPress={() => {}}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    // backgroundColor: '#8eadde',
  },
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    // Android
    elevation: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
})

export default HomePage