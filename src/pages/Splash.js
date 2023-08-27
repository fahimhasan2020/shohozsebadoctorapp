import { Text, StyleSheet, View,StatusBar,Image,Easing,Animated,LogBox,ToastAndroid } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from "react-redux"
import { colors } from '../constants/colors';

export class Splash extends Component {
  state = {
    spinValue:new Animated.Value(0),
    logoTextMarginTop:new Animated.Value(40),
    logoTextOpacity : new Animated.Value(0)
  }

  componentDidMount = async()=>{
    LogBox.ignoreAllLogs();
    Animated.timing(
      this.state.spinValue,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear, 
      useNativeDriver: true
    }
  ).start()
  Animated.timing(
    this.state.logoTextMarginTop,
  {
    toValue: 20,
    duration: 3000, 
    useNativeDriver: false
  }
).start()
  Animated.timing(
    this.state.logoTextOpacity,
  {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true
  }
).start()
const value = await AsyncStorage.getItem('loggedIn')
if(value !== null) {
      if(value === "true"){
        const userId =  await AsyncStorage.getItem('id');
        const token =  await AsyncStorage.getItem('token');
        fetch(this.props.host+'single',{method:"GET",headers:{"Authorization":"Bearer "+token}}).then((response)=>response.json()).then((responseJson)=>{
          if(responseJson.hasOwnProperty('user')){
             console.log(responseJson.user);
            setTimeout(()=>{ this.props.changeLogged(false); 
            this.props.changeProfile(responseJson.user);
            this.props.changeLogged(true);},2000);
            if(responseJson.user.online == "1"){
              this.props.changeActivity(true);
            }else{
              this.props.changeActivity(false);
            }
          }
        }).catch(e=>{
          this.props.navigation.navigate('Login')
        })
      }else if(value === "false"){
        setTimeout(()=>{ this.props.changeLogged(false);
        this.props.navigation.navigate('Login')},2000);
       
      }
  }else{
    AsyncStorage.setItem('loggedIn', "false");
    this.props.navigation.navigate('Login')
  }
  }
  
  spin = this.state.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <Animated.Image source={require('../assets/logo.png')} style={{width:120,height:120,transform:[{rotateY: this.spin}]}} />
        <View>
           <Animated.Text style={{fontSize:20,fontWeight:'bold',color:colors.themeColor,textTransform:'uppercase',opacity:this.state.logoTextOpacity}}>Shohoz Seba Doctor</Animated.Text>
        </View>
       
        <Animated.Text style={{position:'absolute',bottom:20,alignSelf:'center',fontWeight:'bold',color:'#ccc',opacity:this.state.logoTextOpacity}}>Developed By Minhajul Abedin</Animated.Text>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
      changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',token: value})},
      changeLogged : (value) => {dispatch({type:'LOGIN',logged: value})},
      changeProfile : (value) => {dispatch({type:'PROFILE_CHANGE',user: value})},
      changeActivity : (value) => {dispatch({type:'CHANGE_ACTIVITY',stata: value})},
  };
};

const mapStateToProps = state => {
  return {
      accessToken : state.auth.accessToken,
      host: state.auth.host
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Splash);


const styles = StyleSheet.create({
  container:{alignItems:'center',justifyContent:'center',flex:1,backgroundColor:'white'},
})