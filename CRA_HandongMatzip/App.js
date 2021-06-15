//App.js 7/7 7:40pm
import React from "react";
import { StyleSheet, Button, View, Text, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import CategoryButton from './CategoryButton';
import CustomButton from './CustomButton';
import LinkingButton from './LinkingButton';
import HeaderButton from './HeaderButton';
import RegionButton from './RegionButton';

class LogoTitle extends React.Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 25, backgroundColor: 'white'}}>메인</Text>
      </View>
    );
  }
}

class KindScreen extends React.Component{
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    
  };
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.tag}>
                <CategoryButton text="지역"/>
                <CategoryButton text="종류"/>
                <CategoryButton text="배달"/>
            </View>
            <View style={styles.content2}>
              <View />
                <RegionButton text="한식"/>
                <View style={{height: '3%'}}></View>
                <RegionButton text="중식"/>
                <View style={{height: '3%'}}></View>
                <RegionButton text="일식"/>
                <View style={{height: '3%'}}></View>
                <RegionButton text="양식"/>
                <View style={{height: '3%'}}></View>
                <RegionButton text="기타"/>
                <View style={{height: '10%'}}></View>  
              
                <LinkingButton text="식당 추가, 수정, 삭제"/>
                <View style={{height: '4%'}}/>
                <LinkingButton text="앱 관련 문의 및 피드백"/>
              
            </View>
            <View style={styles.footer} />
      </View>
    );
  }
}

class Main extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    
  };
  /*constructor(props){
    super(props);
    this.state={
      resion: false,
      kind: false,
      delivery: false,
    }
  }*/

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.tag}>
                <CategoryButton text="지역"/>
                <CategoryButton text="종류"/>
                <CategoryButton text="배달"/>
            </View>
            <View style={styles.content2}>
              <View />
                <RegionButton text="양덕"/>
                <View style={{height: '3%'}}></View>
                <RegionButton text="육거리"/>
                <View style={{height: '3%'}}></View>
                <RegionButton text="법원"/>
                <View style={{height: '3%'}}></View>
                <RegionButton text="환호"/>
                <View style={{height: '3%'}}></View>
                <RegionButton text="기타"/>
                <View style={{height: '10%'}}></View>  
              
                <LinkingButton text="식당 추가, 수정, 삭제"/>
                <View style={{height: '4%'}}/>
                <LinkingButton text="앱 관련 문의 및 피드백"/>
              
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
  content: {
    flex:1,
  },
  footer: {
    height:'8%',
    backgroundColor:'black',
  },
  content2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header2: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tag: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingHorizontal: '2%'
  },
  elem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

const TabNavigator = createBottomTabNavigator(
  {
  main: Main,
  //resion: ResionScreen,
  kind: KindScreen,
  //delivery: DeliveryScreen,
  },
  /*{
    initialRouteName: "Home"
  }*/
);

export default createAppContainer(TabNavigator);

/*<Button
                onPress= {() => this.props.navigation.navigate('Search')}
                title="MENU"
                color="black"
              />*/