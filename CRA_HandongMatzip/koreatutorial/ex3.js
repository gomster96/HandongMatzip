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
    alignItems:'center',
  },
  navBarText: {
    fontSize: 20,
    color: 'white',
  },
  user: {
    height: 200,
    backgroundColor: '#81D4FA',
  },
  buttonGroup: {
    height: 200,
    backgroundColor: '#C5E1A5',
  },
  taps: {
    height: 100,
    backgroundColor: '#FFD54F',
  }
});

class NavBar extends Component {
  render(){
    return(
      <View style = {styles.navBar}>
        <Text style= {styles.navBarText}>더보기</Text>
      </View>
    );
  }
}

class User extends Component {
  render(){
    return(
      <View style = {styles.user}>
        <View style={{height: 150, flexDirection: 'row', borderWidth: 1}}>
          <View style={{width: 100}}>
            <View style={{width:100, height:100}}>
              <View style={{width:30, height:30, backgroundColor:'red'}}></View>
            </View>
          </View>
          <View style={{flex:1}}>
            <Text>닉네임</Text>
            <Text>이름 / ID</Text>
            <Text>학교이름</Text>
          </View>
        </View>
        <View style={{height:50, flexDirection: 'row', borderWidth:1}}>
          <View style = {{flex: 1, flexDirection: 'row', borderWidth: 1}}>
            <View style={{width: 30, height:30}}>

            </View>
            <Text>내가 쓴 글</Text>
          </View>
          <View style = {{flex: 1, flexDirection: 'row', borderWidth: 1}}>
            <View style={{width: 30, height: 30}}>
            </View>
              <Text>내가 쓴 글</Text>
          </View>
          <View style = {{flex: 1, flexDirection: 'row', borderWidth: 1}}>
            <View style= {{width: 30, height: 30}}>

            </View>
            <Text>내가 쓴 글</Text>
          </View>
        </View>
      </View>
    )
  }
}

class ButtonGroup extends Component {
  render(){
    return(
      <View style = {styles.buttonGroup}>

      </View>
    );
  }
}

class Taps extends Component {
  render(){
    return(
      <View style = {styles.taps}>

    </View>
    )
    
  }
}

export default class gitbookTest extends Component{
  render(){
    return (
      <View style = {styles.container}>
        <NavBar />
        <User />
        <View style = {{height: 40}}>

        </View>
        <ButtonGroup />
        <View style = {{flex:1}}>

        </View>
        <Taps />
      </View>
    );
  } 
}

AppRegistry.registerComponent('gistbookTest', ()=> gitbookTest);