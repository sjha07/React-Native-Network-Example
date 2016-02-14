/**
 *
 * Developer - Satish Jha
 * Example - Using GET call and displaying data 
 *
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

var Users = require('./Users');

class NetworkEx extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>      
        <Users />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('NetworkEx', () => NetworkEx);
