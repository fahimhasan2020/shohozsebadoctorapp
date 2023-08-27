import { Text, StyleSheet, View, StatusBar,Dimensions,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import LottieView from 'lottie-react-native';
import  Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../constants/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class CallPatient extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.themeColor} />
        <View style={styles.cardBox}>
        <LottieView style={{height:200,width:200}} source={require('../assets/callanimation.json')} autoPlay loop />
        <Text style={{color:colors.themeColor,fontSize:20}}>Calling ....</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.themeColor
  },
  cardBox:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    width:'100%',
    height:windowHeight*0.96,
    backgroundColor:'white',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingTop:20,
    alignItems:'center',
    justifyContent:'center'
  }
})