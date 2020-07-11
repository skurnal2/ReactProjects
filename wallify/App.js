import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './components/List';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <List />
      </NavigationContainer>
    );
  }
}
