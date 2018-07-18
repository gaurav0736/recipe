import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';


import { Tabs , createRootNavigator, BookcaseStack} from './Resources/router';

class App extends Component {

  render() {
    return <Tabs />
    <BookcaseStack />;
    
  }
}

export default App;