//CategoryButton.js 7/7 1:30
import React, { Component } from 'react';
import { TouchableOpacity, Text} from 'react-native';

export default class CategoryButton extends Component{
  constructor(props){
    super(props);
    this.state={
      defaultColor: true
    }
  }
  _onPressButton(){
    this.setState({
      defaultColor : !this.state.defaultColor
    });
  }
  render(){
    let bgColor=this.state.defaultColor ? "#585858" : "powderblue"
    
    return (
      <TouchableOpacity
        style={{
                  backgroundColor : bgColor,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: '2%',
                  borderRadius: 5,
                  height: '55%'
                }}
                onPress={
                this._onPressButton.bind(this)}
              >
                <Text style={{
                  borderRadius : 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  color: 'white'
                  }}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
