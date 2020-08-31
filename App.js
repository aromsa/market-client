import React, {useEffect} from 'react';
import thunk from 'redux-thunk'
import { StyleSheet, View} from 'react-native';
import Header from './src/components/Header'
import LoginPage from './src/screens/LoginPage'
import BuyerHomePage from './src/screens/BuyerHomePage'
import rootReducer from './src/redux/reducer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();

export default function App (props) {

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

// function mdp(dispatch) {
//   return { getDesigners: (designers) => dispatch(getDesigners(designers)) }
// }

// function msp(state) {
//   return { designers: state.designers }
// }

// export default connect(msp, mdp)(App);
