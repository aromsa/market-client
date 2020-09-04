import React, {useEffect} from 'react';
import thunk from 'redux-thunk'
import { StyleSheet, View} from 'react-native';
import Header from './src/components/Header'
import LoginPage from './src/screens/LoginPage'
import StylePage from './src/screens/StylePage'

import BuyerHomePage from './src/screens/BuyerHomePage'
import rootReducer from './src/redux/reducer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';


import {
  DefaultTheme,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';
import DesignerScreen from './src/screens/drawer/DesignerScreen';

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App (props) {

  const handleLogOut = () => {
    console.log
  }

  const createDrawer = () =>
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={BuyerHomePage}/>
    <Drawer.Screen name="All Designers" component={DesignerScreen} />
    <Drawer.Screen name="Selected Styles" component={DesignerScreen} />
    <Drawer.Screen name="Log Out" component={LoginPage} />
  </Drawer.Navigator>

  const createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="StylePage" component={StylePage}/>
      <Stack.Screen name="BuyerHomePage" children={createDrawer}
        options={({ navigation }) => ({
          title: "MARKET",
          headerLeft: () =>
            <Icon
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={[{ color: 'white', marginLeft: 8 }]}
              size={24}
              name={'menu'}
              />
            })
            }
          />
    </Stack.Navigator>

  return (
    
    <Provider store={store} >
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
