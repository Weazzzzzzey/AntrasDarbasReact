import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import kategorijos from './src/listKat';
import mainMenu from './src/mainMenu';
import maistoVidus from './src/inside';


const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Sveikas Maistas">
          <Stack.Screen name="Sveikas Maistas" component = {mainMenu} />
          <Stack.Screen name="Maisto Kategorijos" component ={kategorijos}/>
          <Stack.Screen name="Patiekalai" component ={maistoVidus}/>          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
