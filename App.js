import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/Header'
import HomePage from './screens/HomePage'
import StylePage from './screens/StylePage'
import LoginPage from './screens/LoginPage'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  // const [selectedStyle, setSelectedStyle] = useState()

  // const viewStyleHandler = () => {
  //   content = <StylePage />
  // }

  // if (selectedStyle) {
  //   content = <StylePage />
  // }

  // let content =  <HomePage onSelectedStyle={viewStyleHandler}/>

  return (
    <NavigationContainer>
    <View style={styles.screen}>
      <Header title=""/>
      {/* <HomePage /> */}
      <LoginPage/>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
