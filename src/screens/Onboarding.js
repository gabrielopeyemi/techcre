/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

export default class Onboarding extends Component {

    _onPress = text =>{
        Alert.alert(text);
    }
  render() {
    return (
      <View style={style.container}>
        <StatusBar hidden={true} />
        <Swiper
            autoplay={true}
            showButtons={true}
        >
          <View style={style.slide}>
            <Image
              source={require('../assets/img/bg1.jpg')}
              style={style.Image}
            />
          </View>
          <View style={style.slide}>
            <Image
              source={require('../assets/img/bg2.jpg')}
              style={style.Image}
            />
          </View>
          <View style={style.slide}>
            <Image
              source={require('../assets/img/bg1.jpg')}
              style={style.Image}
            />
          </View>
        </Swiper>
        <View style={style.textContainer}>
            <View style={style.titleContainer}>
                <Text style={style.title}>TechCre</Text>
            </View>
            <View style={style.subTitleContainer}>
                <Text style={style.subtitle}>Made logistics easy...</Text>
            </View>
        </View>
        <View style={style.buttonContainer}>
            <TouchableOpacity
                onPress={() => this._onPress('Gabriel is good')}
            >
                <View style={style.signupContainer}>
                    <Text style={style.signup}>SignUp</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this._onPress('hello world')}
            >
            <View style={style.loginContainer}>
                <Text style={style.login}>Login</Text>
            </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: width,
    height: height,
  },
  textContainer: {
    position: 'absolute',
    bottom: 200,
    marginLeft: 10,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  titleContainer:{
    width: 300,
    height: 70,
    backgroundColor: '#3b55e6',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title:{
    fontFamily: 'Helvetica',
    fontSize: 40,
    // marginLeft: 10,
    color: '#fff'
  },
  subTitleContainer:{
    //   width: 200,
      height: 50,
      backgroundColor: '#3b55e6',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.7
  },
  subtitle:{
      fontFamily: 'helventica',
      fontSize: 24,
      color: '#fff'
  },
  buttonContainer:{
      position: 'absolute',
      flexDirection: 'row',
      bottom: 70,
      width: width,
      height: 50,
    //   marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  signupContainer:{
      width: 160,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      alignItems:'center',
      justifyContent: 'center'
  },
  signup:{
      fontFamily:'Helvetica',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#3855e6'
  },
  loginContainer:{
    width: 160,
    height: 50,
    borderRadius: 10,
    alignItems:'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth:2
  },
  login:{
      fontFamily: 'helvetica',
      fontWeight: 'bold',
      fontSize: 20,
      color: '#3b55e6'
  }
});
