import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './src/components/Header'
import LoginPage from './src/screens/LoginPage'
import BuyerHomePage from './src/screens/BuyerHomePage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = () => {
  return {buyers: []}
}

const store = createStore(rootReducer)

const Stack = createStackNavigator();

export default function App() {

const createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginPage}/>
    <Stack.Screen name="BuyerHomePage" component={BuyerHomePage}/>
  </Stack.Navigator>

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.screen}>
          <Header title=""/>
          {createHomeStack()}
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
