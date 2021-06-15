import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    height: 60,
    backgroundColor: '#B0B0B0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  left:{
    flex: 2,
    backgroundColor: 'red'
  },
  right: {
    flex: 2,
    flexDirection: 'column',
  },
  rightTop: {
    flex: 1,
    backgroundColor: 'blue',
  },
  rightBootom: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  textStyle: {
    textAlign: 'center',
  }
});

export default class gitbookText extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text>
            NavBar
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.left}>
            <Text style = {styles.textStyle}>
              Left
            </Text>
          </View>
          <View style={styles.right}>
            <View style={styles.rightTop}>
              <Text>
                Top
              </Text>
            </View>
            <View style={styles.rightBootom}>
              <Text>
                Bottom
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}