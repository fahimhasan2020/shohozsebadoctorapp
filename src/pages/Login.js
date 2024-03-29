import { Text, StyleSheet, View,StatusBar,Image,ActivityIndicator,Dimensions,TextInput,TouchableOpacity,Linking,ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getHash,
  startOtpListener,
  useOtpVerify,
} from 'react-native-otp-verify';
import React, { Component } from 'react'
import {connect} from "react-redux"
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { colors } from '../constants/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export class Login extends Component {
  state ={
    phoneNumber:'',
    otp:false,
    finalOtp:'',
    otpInput:'',
    serverOtp:'',
    requesting:false,
    otpRequesting:false
  }

  login=()=>{
    this.setState({requesting:true});
    if(this.state.phoneNumber === ''){
      ToastAndroid.show('Phone number required',ToastAndroid.SHORT);
    }
    if(this.state.phoneNumber.length > 10 || this.state.phoneNumber.length < 10){
      ToastAndroid.show('Number should be 10 charracter only',ToastAndroid.SHORT);
    }
    
    fetch(this.props.host+'login',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone_number: this.state.phoneNumber})
    }).then((response)=>response.json()).then((responseJson)=>{
      if(responseJson.hasOwnProperty("errors")){
        this.setState({requesting:false});
        if(responseJson.errors.hasOwnProperty("phone_number")){
           return  ToastAndroid.showWithGravity(
        responseJson.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
        }else{
          return  ToastAndroid.showWithGravity(
            responseJson.errors.phone[0],
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          
        }
      
      }else{
        this.setState({otp:true,serverOtp:responseJson.otp,requesting:false});
        ToastAndroid.show("Otp has been send to your number.",ToastAndroid.SHORT,ToastAndroid.BOTTOM);
      }
    }).catch(e=>{
      this.setState({requesting:false});
    });
  }
  verifyOtp = async()=>{
    if(this.state.finalOtp == this.state.serverOtp){
      await AsyncStorage.setItem('loggedIn', "true");
       fetch(this.props.host+'loginotpveritfy',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone_number: this.state.phoneNumber})
       }).then((response)=>response.json()).then((responseJson)=>{
        AsyncStorage.setItem('loggedIn',"true");
        AsyncStorage.setItem('id',responseJson.user.id.toString());
        AsyncStorage.setItem('token',responseJson.token);
        this.props.changeAccessToken(responseJson.token);
        this.props.changeProfile(responseJson.user);
        this.props.changeLogged(true);
        if(responseJson.user.online == "1"){
          this.props.changeActivity(true);
        }else{
          this.props.changeActivity(false);
        }
        this.setState({otp:false});
         })
    }else{
      ToastAndroid.showWithGravity(
        "Wrong Otp",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      await AsyncStorage.setItem('loggedIn', "false");
    }
  }

  
  componentDidMount = () =>{
    getHash().then(hash => {
    //
    }).catch(console.log);
  }



  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.themeColor} />
        <View style={{backgroundColor:'white',width:120,height:120,alignSelf:'center',justifyContent:'center',borderRadius:10,marginTop:windowHeight*0.2}}>
          <Image source={require('../assets/logo.png')} style={{height:100,width:100,alignSelf:'center'}} />
        </View>
        <Text style={{fontSize:20,color:'white',fontWeight:'bold',alignSelf:'center',marginTop:20}}>SHOHOZ SEBA DOCTORS</Text>
        <Text style={{fontSize:15,color:'white',alignSelf:'center',marginTop:4,letterSpacing:2}}>Sign in to continue</Text>
        <View style={styles.cardView}>
          {!this.state.otp?<View>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>Enter phone number</Text>
            <TextInput value={this.state.phoneNumber} onChangeText={(value)=>{this.setState({phoneNumber:value})}} placeholder='+880-1XXXXXXXXXX' style={styles.inputNumber} onSubmitEditing={()=>{this.login()}} keyboardType='numeric'/>
            <TouchableOpacity
            onPress={()=>{
            this.login();
            }}
            style={{width:'90%',elevation:10,padding:10,marginTop:10,alignItems:'center',borderRadius:10,backgroundColor:colors.themeColor}}>
            {!this.state.requesting?<Text style={{color:'white'}}>LOGIN</Text>:<ActivityIndicator color={'white'} size={'small'} />}
            </TouchableOpacity>
            </View>:<View>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>Enter OTP</Text>
            <OTPInputView
            style={{width: '80%', height: 80}}
            pinCount={4}
            autoFocusOnLoad={false}
            code={this.state.otpInput} 
            onCodeChanged = {(code) => { this.setState({otpInput:code})}}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled = {(code) => {
            this.setState({finalOtp:code});
            setTimeout(()=>{
               this.verifyOtp();
            },500);
            }}
          /></View>}
          <View style={{position:'absolute',bottom:10,justifyContent:'center',flexDirection:'row',alignItems:'center',width:'100%'}}>
             <Text style={{fontWeight:'bold'}}>Don't have account? </Text><TouchableOpacity
             onPress={()=>{this.props.navigation.navigate('Register');}}
             style={{marginBottom:0,paddingBottom:0}}><Text style={{color:colors.themeColor,fontWeight:'bold',marginBottom:0}}>Register now</Text></TouchableOpacity>
          </View>
          
        </View>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:colors.themeColor},
  cardView:{position:'absolute',bottom:0,left:0,right:0,width:'100%',height:windowHeight*0.5,backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20,elevation:10,paddingLeft:30,paddingTop:40},
  inputNumber:{width:'90%',padding:5,borderWidth:2,borderColor:'#ccc',borderRadius:10},
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 2,
    backgroundColor:colors.themeColor,
    color:'white'
    // borderBottomWidth: 2,
  },

  underlineStyleHighLighted: {
    borderColor: "#282829",
  },
})