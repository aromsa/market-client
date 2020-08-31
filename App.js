import React, {useEffect} from 'react';
import thunk from 'redux-thunk'
import { StyleSheet, View} from 'react-native';
import LoginPage from './src/screens/LoginPage'
import BuyerHomePage from './src/screens/BuyerHomePage'
import rootReducer from './src/redux/reducer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
///

// import Screen1 from './src/screens/drawer/screen1';

import DesignerScreen from './src/screens/drawer/DesignerScreen';

import {
  DefaultTheme,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';

///

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();;

export default function App (props) {

  // useEffect(() => {
  //   props.getDesigners()
  // }, [])

  const createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="BuyerHomePage" component={BuyerHomePage}/>
      <Stack.Screen name="DesignerScreen" component={DesignerScreen}/>
    </Stack.Navigator>

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Drawer.Navigator>
        {/* <Drawer.Screen name="Home" children={createHomeStack()}/> */}
        <Drawer.Screen name="View Selected Designers" component={DesignerScreen}/>
        <Drawer.Screen name="View Selected Styles"/>
        <Drawer.Screen name="Update Profile"/>
{/*       
        <View style={styles.screen}>
          <Header title=""/>
          {createHomeStack()}
        </View> */}
        </Drawer.Navigator>
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
