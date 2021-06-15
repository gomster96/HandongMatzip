import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class gitbookTest extends Component {
  render(){
    return(
      <View style={styles.contatiner}>
        <Text style={styles.welcome}>
          welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Pres sssdfasfasfdasdf {'\n'}
          asdfsadfsdafs
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  },
  welcome: {
    marginTop: 500,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "red",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});