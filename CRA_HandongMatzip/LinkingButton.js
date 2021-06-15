//LinkingButton.js 7/7 1:30
import React, { Component } from 'react';
import { Linking, TouchableOpacity, Text } from 'react-native';

export default class LinkingButton extends Component{
  constructor(props){
    super(props);
  }
  _onPressButton(){
    Linking.openURL('https://www.google.co.kr')
  }
  render(){
    return (
      <TouchableOpacity
        style={{
                  backgroundColor : '#585858',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: '2%',
                  borderRadius: 5,
                  width: '90%',
                  height: '8%'
                }}
                onPress={
                this._onPressButton.bind(this)}
              >
                <Text style={{
                  fontSize: 20,
                  color: 'white'
                  }}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
