'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var reactNative = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <SwitchIOS 
                	style={[styles.view1Switchios8]}>
                </SwitchIOS>
                <SwitchIOS 
                	style={[styles.view1Switchios9]}>
                </SwitchIOS>
                <SwitchIOS 
                	style={[styles.view1Switchios10]}>
                </SwitchIOS>
                <SliderIOS 
                	style={[styles.view1Sliderios16]}>
                </SliderIOS>
            </View>
            <View style={[styles.view2]}>
                <SwitchIOS 
                	style={[styles.view2Switchios5]}>
                </SwitchIOS>
                <SwitchIOS 
                	style={[styles.view2Switchios11]}>
                </SwitchIOS>
                <SwitchIOS 
                	style={[styles.view2Switchios12]}>
                </SwitchIOS>
                <SliderIOS 
                	style={[styles.view2Sliderios15]}>
                </SliderIOS>
            </View>
            <View style={[styles.view3]}>
                <SwitchIOS 
                	style={[styles.view3Switchios6]}>
                </SwitchIOS>
                <SliderIOS 
                	style={[styles.view3Sliderios14]}>
                </SliderIOS>
            </View>
            <View style={[styles.view4]}>
                <SwitchIOS 
                	style={[styles.view4Switchios7]}>
                </SwitchIOS>
                <SwitchIOS 
                	style={[styles.view4Switchios13]}>
                </SwitchIOS>
            </View>
            <View style={[styles.view17]}>
                <ListView 
                dataSource={['Lorem ipsum dolor sit amet', 'Proin tempus volutpat lectus', 'Praesent in orci scelerisque']}
                style={[styles.view17Listview18]}>
                </ListView>
                <ListView 
                dataSource={['Lorem ipsum dolor sit amet', 'Proin tempus volutpat lectus', 'Praesent in orci scelerisque']}
                style={[styles.view17Listview19]}>
                </ListView>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
          flexDirection: 'row',
      }, 
      view2:{
          flexDirection: 'row',
      }, 
      view3:{
          flexDirection: 'row',
      }, 
      view4:{
          flexDirection: 'row',
      }, 
      view2Switchios5:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 117.1875,
      }, 
      view3Switchios6:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 234.375,
      }, 
      view4Switchios7:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 234.375,
      }, 
      view1Switchios8:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 117.1875,
      }, 
      view1Switchios9:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 117.1875,
      }, 
      view1Switchios10:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 117.1875,
      }, 
      view2Switchios11:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 117.1875,
      }, 
      view2Switchios12:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 117.1875,
      }, 
      view4Switchios13:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 234.375,
      }, 
      view3Sliderios14:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 234.375,
      }, 
      view2Sliderios15:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 117.1875,
      }, 
      view1Sliderios16:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 117.1875,
      }, 
      view17:{
          flexDirection: 'row',
      }, 
      view17Listview18:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 234.375,
      }, 
      view17Listview19:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 234.375,
      }, 
})

AppRegistry.registerComponent('reactNative', () => reactNative);

