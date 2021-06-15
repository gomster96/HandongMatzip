//LinkingButton.js 7/7 1:30
import React, { Component } from 'react';
import { Linking, TouchableOpacity, Text } from 'react-native';

export default class RegionButton extends Component{
  constructor(props){
    super(props);
    this.state={
      defaultColor: true
    }
  }
  _onPressButton(){
    this.setState({
      defaultColor : !this.state.defaultColor
    })
  }
  render(){
    let bgColor=this.state.defaultColor ? "#585858" : "powderblue"
    return (
      <TouchableOpacity
        style={{
                  backgroundColor : bgColor,
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
