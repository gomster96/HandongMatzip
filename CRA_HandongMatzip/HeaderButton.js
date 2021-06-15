//HeaderButton.js 7/7 6:00
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class HeaderButton extends Component{
  constructor(props){
    super(props);
  }
  _onPressButton(){
      this.props.navigation.navigate('Search')
    }
  render(){
    return (
      <TouchableOpacity
        style={{
                  backgroundColor : 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: '2%',
                  borderRadius: 5,
                  width: '90%',
                  height: '45%'
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