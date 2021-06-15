//CustomButton.js 7/7 1:30
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class CustomButton extends Component{
  constructor(props){
    super(props);
  }
  _onPressButton(){

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
                  marginTop: '2%',
                  width: '90%',
                  height: '6%'
                }}
                onPress={
                this._onPressButton.bind(this)}>
                <Text style={{
                  fontSize: 20,
                  color: 'white'
                  }}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}