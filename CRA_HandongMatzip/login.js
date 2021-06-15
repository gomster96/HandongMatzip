import React, {Component} from 'react';
import {Alert, Text, View, Button, StyleSheet, ScrollView} from 'react-native';

export default class login extends Component {
  _onPressButton() {
    Alert.alert('OO 식당')
  }
  _onPressButton2() {
    Alert.alert('뒤로')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}>
          <View style={styles.header2}>
            <Text style={{fontSize: 25, margin: '5%', color: 'white'}}>검색</Text>
          </View>

          <View style={styles.tag}/>

          <ScrollView>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
                <Button
                onPress={this._onPressButton}
                 title="OO 식당"
                 color="white"
                />
            </View>
          </View>
          </ScrollView>
          <View style={styles.footer2}>
            <View style={styles.buttonContainer2}>
                <Button
                  onPress={this._onPressButton2}
                  title="뒤로"
                  color="white"
                />
            </View>
          </View>
          <View style={styles.footer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:'4%',
    backgroundColor:'black',
  },
  footer: {
    height:'5%',
    backgroundColor:'black',
  },
  content: {
    flex:1
  },
  tag: {
    width: '100%',
    height: '5%'
  },
  elem: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.5%'
  },
  header2: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5%',
  },
  footer2: {
    backgroundColor: 'gray',
    width: '100%',
    height: '6%',
    flexDirection: 'row'
  },
  buttonContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#585858',
    flex: 1,
    borderRadius: 5
  },
  buttonContainer2: {
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'gray',
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alternativeLayoutButtonContainer: {
    flexDirection: 'row',
  }
});