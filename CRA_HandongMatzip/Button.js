import React, { Component } from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class Button extends Component{
  
    static defaultProps = {
        title: 'untitled',
        buttonColor: '#000',
        titleColor: '#fff',
        onPress: () => null,
    }

    constructor(props){
        super(props)
    }

    render(){
        return (
        <TouchableOpacity
                    style={{
                    backgroundColor : '#585858',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: '3%',
                    borderRadius: 5,
                    height: '55%',
                    }}
                >
                    <Text style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    color: 'white'
                    }}>{this.props.text}</Text>
                </TouchableOpacity>
        )
  }
}