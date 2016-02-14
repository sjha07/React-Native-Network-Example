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
  Text,
  View
} from 'react-native';

var theUrl = "http://jsonplaceholder.typicode.com/users";

class Users extends Component {
  constructor(props) {
    super(props);
    this.getData()
    .then((data) => {
      this.setState({
        jsonData: data
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderData() }
      </View>
    );
  }

  renderData() {
    if(this.state !== null && this.state.jsonData !=='undefined' && this.state.jsonData !== null){
      return(
        <View>
          { this.renderAllRow(this.state.jsonData.json) }
        </View>
      );
    }
  }

  renderAllRow(obj) {
    return obj.map(function(user) {
      return (
        <View key={user.id}>
          <Text> Name: { user.name } </Text>
          <Text> Email: { user.email } </Text>
          <View style={{ margin: 5, height: 1, backgroundColor: '#EEEEEE'}}></View>
        </View>
      );
    });
  }

  getData() {    
    return fetch(theUrl)
      .then(function(response){
        return response.json();
      })
      .then(function(jsonData){
        return {
          json: jsonData
        };
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#F5FCFF',
  }
});

module.exports = Users;
