import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {
  _onPressButton2() {
    Alert.alert('지역')
  }
  _onPressButton3() {
    Alert.alert('종류')
  }
  _onPressButton4() {
    Alert.alert('배달')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}>

          <View style={styles.header2}>
            <Text style={{fontSize: 25, margin: '5%', color: 'white'}}>메인</Text>
          </View>

          <View style={styles.tag}>
            <View style={styles.buttonContainer2}>
                <Button
                onPress={this._onPressButton2}
                title="지역"
                color="white"
                />
             </View>
            <View style={styles.buttonContainer2}>
                <Button
                onPress={this._onPressButton3}
                 title="종류"
                 color="white"
                />
            </View>
            <View style={styles.buttonContainer2}>
                <Button
                onPress={this._onPressButton4}
                 title="배달"
                 color="white"
                />
            </View>
          </View>

          <View style={styles.elem}>
            <View style={styles.buttonContainer5}>
              <Button
               onPress={this._onPressButton}
               title="식당 추가, 수정, 삭제"
               color="white"
              />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="앱 관련 문의 및 피드백"
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:'4%',
    backgroundColor:'black',
  },
  footer: {
    height:'10%',
    backgroundColor:'black',
  },
  content: {
    flex:1,
  },
  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#eee',
    padding: '0.5%'
  },
  header2: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5%',
  },
  tag: {
    width: '100%',
    height: '10%',
    marginVertical: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  alternativeLayoutButtonContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#585858',
    marginBottom: '2%',
    flex: 1,
    borderRadius: 5
  },
  buttonContainer2: {
    backgroundColor: '#585858',
    flex: 1,
    borderRadius: 5,
    justifyContent: 'space-around',
    margin: '2%'
  },
  buttonContainer5: {
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: '50%',
    marginBottom: '2%',
    backgroundColor: '#585858',
    flex: 1,
    borderRadius: 5
  }
});