import { Text, ScrollView,StyleSheet,Switch,View,StatusBar,Image,TouchableOpacity } from 'react-native'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  Entypo from 'react-native-vector-icons/Entypo';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react'
import BaseHeader from '../components/BaseHeader';

export default class Home extends Component {
  state = {
    service:true
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{paddingBottom:100}} style={styles.container}>
        <BaseHeader />
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:-50}}>

          <LinearGradient colors={['#a30d3e', '#750f30', '#4f0e23']} style={{height:150,width:150,padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
            <Image source={require("../assets/bg-layer1.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,opacity:0.3,height:150,width:150}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <Entypo name="users" size={50} color="white" />
              <Text style={{color:'white',fontSize:25}}>20</Text>
            </View>
            <Text style={{color:'white',fontSize:14,marginTop:20,fontWeight:'bold',alignSelf:'center'}}>Pending Customers</Text>
          </LinearGradient>

          <LinearGradient colors={['#74099e', '#4a0a63', '#2e083d']} style={{height:150,width:150,padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10}}>
          <Image source={require("../assets/bg-layer1.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,opacity:0.3,height:150,width:150}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <Entypo name="wallet" size={50} color="white" />
              <Text style={{color:'white',fontSize:25}}>20000</Text>
            </View>
            <Text style={{color:'white',fontSize:14,marginTop:20,fontWeight:'bold',alignSelf:'center'}}>Pending Balance</Text>
          </LinearGradient>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
          
        <LinearGradient colors={['#5f17bd', '#360a70', '#220942']} style={{height:150,width:150,padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10}}>
        <Image source={require("../assets/bg-layer1.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,opacity:0.3,height:150,width:150}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <FontAwesome name="money" size={50} color="white" />
              <Text style={{color:'white',fontSize:35}}>20</Text>
            </View>
            <Text style={{color:'white',fontSize:12,marginTop:20,fontWeight:'bold',alignSelf:'center'}}>Withdrawable Balance</Text>
          </LinearGradient>
          <LinearGradient colors={['#152cbf', '#152485', '#101852']} style={{height:150,width:150,padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10}}>
          <Image source={require("../assets/bg-layer1.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,opacity:0.3,height:150,width:150}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <MaterialCommunityIcons name="currency-bdt" size={50} color="white" />
              <Text style={{color:'white',fontSize:35}}>20</Text>
            </View>
            <Text style={{color:'white',fontSize:14,marginTop:20,fontWeight:'bold',alignSelf:'center'}}>Requested Balance</Text>
          </LinearGradient>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
        <LinearGradient colors={['#10b33e', '#0f802f', '#0d5c23']} style={{height:150,width:150,padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10}}>
        <Image source={require("../assets/bg-layer1.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,opacity:0.3,height:150,width:150}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <MaterialIcons name="medical-services" size={50} color="white" />
              <Text style={{color:'white',fontSize:35}}>20</Text>
            </View>
            <Text style={{color:'white',fontSize:14,marginTop:20,fontWeight:'bold',alignSelf:'center'}}>Total Services</Text>
          </LinearGradient>
          <LinearGradient colors={['#c79c1a', '#a6831c', '#806619']} style={{height:150,width:150,padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10}}>
          <Image source={require("../assets/bg-layer1.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,opacity:0.3,height:150,width:150}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <MaterialIcons name="miscellaneous-services" size={50} color="white" />
              <Text style={{color:'white',fontSize:35}}>20</Text>
            </View>
            <Text style={{color:'white',fontSize:14,marginTop:20,fontWeight:'bold',alignSelf:'center'}}>Active services</Text>
          </LinearGradient>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
        <LinearGradient colors={['#d15f1d', '#a34c1a', '#783a17']} style={{height:150,width:150,padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10}}>
        <Image source={require("../assets/bg-layer1.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,opacity:0.3,height:150,width:150}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <MaterialCommunityIcons name="package-variant" size={50} color="white" />
              <Text style={{color:'white',fontSize:35}}>20</Text>
            </View>
            <Text style={{color:'white',fontSize:14,marginTop:20,fontWeight:'bold',alignSelf:'center'}}>Total Services</Text>
          </LinearGradient>
          <LinearGradient colors={['#e32d19', '#ab281a', '#8c261b']} style={{height:150,width:150,padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10}}>
          <Image source={require("../assets/bg-layer1.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,opacity:0.3,height:150,width:150}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <MaterialCommunityIcons name="package-up" size={50} color="white" />
              <Text style={{color:'white',fontSize:35}}>20</Text>
            </View>
            <Text style={{color:'white',fontSize:14,marginTop:20,fontWeight:'bold',alignSelf:'center'}}>Active services</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#fff'}
})