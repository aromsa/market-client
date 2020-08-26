import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/Header'
import HomePage from './screens/HomePage'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Header"/>
      <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
