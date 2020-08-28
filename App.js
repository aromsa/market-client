import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/Header'
import LoginPage from './screens/LoginPage'
import HomePage from './screens/HomePage'
// import { NavigationContainer } from '@react-navigation/native'

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();;

export default function App() {


const createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginPage}/>
    <Stack.Screen name="HomePage" component={HomePage}/>
  </Stack.Navigator>




  return (
    <NavigationContainer>
    <View style={styles.screen}>
      <Header title=""/>
      {createHomeStack()}
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
