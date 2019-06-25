import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from './src/AppNavigator';


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

