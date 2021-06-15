import React, {Component} from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class App extends Component {

  render() {  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{color:'white', fontSize:RFPercentage(5)}}>메인</Text>
        </View>
        <Title/>
        <View style={styles.content}>
          <Mid/>
        </View>
        <Bottom/>
        <View style={styles.footer}><Text>footer</Text></View>    
      </View>
    );
  }
}

class Title extends Component {

  _onPressButton(){
    //this.setState(pfd{ clicked: !previousState.clicked })
  }

  render() {
      return(
          <View style={styles.title}>
              <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
                  <View style={styles.button}>
                  <Text style={styles.font}>지역</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
                  <View style={styles.button}>
                  <Text style={styles.font}>종류</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
                  <View style={styles.button}>
                  <Text style={styles.font}>배달</Text>
                  </View>
              </TouchableHighlight>
          </View>          
      );
  }
}

class Mid extends Component{
  _onPressButton(){
  }

  render(){
    return(
      <View style = {styles.mid}>
      <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
      <View style={styles.wideButton}>
          <Text style={styles.font}>육거리</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
      <View style={styles.wideButton}>
          <Text style={styles.font}>육거리</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
      <View style={styles.wideButton}>
          <Text style={styles.font}>육거리</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
      <View style={styles.wideButton}>
          <Text style={styles.font}>육거리</Text>
      </View>
      </TouchableHighlight>
      
      
      </View>
      )
  }

}

class Bottom extends Component {

  _onPressButton(){
    //this.setState(pfd{ clicked: !previousState.clicked })
  }

  render() {
      return(
        <View style={styles.bottom}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
              <View style={styles.wideButton}>
                  <Text style={styles.font}>식당 추가, 수정, 삭제</Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
              <View style={styles.wideButton}>
                  <Text style={styles.font}>앱 관련 문의 및 피드백</Text>
              </View>
          </TouchableHighlight>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    //width:'100%',
    height:'10%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    paddingLeft: 20,
  },
  title: {
    //width:'100%',
    height:'12%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'darkgrey',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottom: {
    //width: '100%',
    height: '25%',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    //borderColor: 'black',
    //borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },



  mid:{
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '99%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },  




  footer: {
    //width:'100%',
    height:'15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  font: {
    color:'black', 
    fontSize:RFPercentage(3.5)
  },
  button: {
    width: 80, 
    height:'100%', 
    backgroundColor: 'darkgrey',
    //backgroundColor: buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  wideButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'darkgrey',
    //backgroundColor: buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
});