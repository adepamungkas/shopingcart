import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import AppNavigator from "./src/AppNavigator";
import {Provider} from "react-redux"
import store from "./src/redux/store";
export default class App extends React.Component {

  render() {
    return (
        <Provider store={store} >
          <AppNavigator/>
        </Provider>
    );

  }
}
console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
