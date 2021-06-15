import React, { Component } from "react";

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Linking, Platform, SafeAreaView, TextInput, Image, StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Icon, Rating, AirbnbRating, Header, withTheme } from "react-native-elements"
import SearchHeader from 'react-native-search-header';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-gesture-handler";
import { startAsync } from "expo/build/AR";
import { info } from "./LoadAsyncStorage";
import { db } from "./dataBase";
import Loading from "./Loading";
import { DataList } from "./Main";
import {BackHandler} from 'react-native';



// 식당 정보 페이지 만드는 클래스
export default class RestaurantInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        waitingDB: true,
        context: "",
        network: true,
      };
    }

    BackButtonPress(){
      this.props.navigation.goBack();
    }

    render() {
      if(this.state.network == true){
        if(this.state.waitingDB == true){
          db.collection("pictureSource").doc("source").get()
          .then(doc => {
            if (doc.empty) {
              console.log('No such document!');
              return;
          }
            this.state.context = doc.data().data;
           
          })
          .catch(err =>{
            this.setState({
              network: false,
            })
          })
          .then(()=>{
            this.setState({
              waitingDB: false,
            })
          })
        }
      }
      if(this.state.network == false){
        return(
          <SafeAreaView
            style={{   
              flex: 1,
              marginTop : Platform.OS ==='ios'? 0 : getStatusBarHeight()
            }}
          >
            <View style={styles.header}>
              <Icon
                name= 'arrow-back'
                type='ionicons'
                onPress={this.BackButtonPress.bind(this)}
              />
            </View>
            <ScrollView>
              <Text style={{fontSize: RFValue(40), color: '#888888', fontFamily: 'hanna'}}>
                네트워크를 연결해주세요
              </Text>
            </ScrollView>
          </SafeAreaView>
        );
      }
      if (this.state.waitingDB) {
        return(
          <Loading/>
          );
      }
      

      return(
      <SafeAreaView
        style={{   
          flex: 1,
          marginTop : Platform.OS ==='ios'? 0 : getStatusBarHeight()
        }}
      >
        <View style={styles.header}>
          <Icon
            name= 'arrow-back'
            type='ionicons'
            onPress={this.BackButtonPress.bind(this)}
          />
        </View>
        <ScrollView>
          <Text style={{fontSize: RFValue(15), color: '#888888', fontFamily: 'hanna'}}>
            {this.state.context}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// 스타일
const styles = StyleSheet.create({

});
