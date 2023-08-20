import { Text, StyleSheet, ScrollView,View,Image,Animated } from 'react-native'
import React, { Component } from 'react'
import BaseHeader from '../components/BaseHeader'

export default class Services extends Component {
  state={
    animatedOpacity:new Animated.Value(0.0),
    animatedMargin:new Animated.Value(-20)
  }
  componentDidMount = ()=>{
    Animated.timing(this.state.animatedOpacity, {
      duration: 1000,
      toValue: 1,
      useNativeDriver: true
  }).start();

  Animated.timing(this.state.animatedMargin, {
    duration: 1000,
    toValue: -70,
}).start();
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{paddingBottom:100}} style={styles.container}>
        <BaseHeader />
        <Animated.View style={{width:'100%',paddingLeft:20,paddingRight:20,borderRadius:10,marginTop:this.state.animatedMargin}}>
          <Animated.View style={{opacity:this.state.animatedOpacity,width:'95%',alignSelf:'center',backgroundColor:'white',elevation:10,margin:20,flexDirection:'row'}}>
            <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(186, 20, 153, 0.3)',zIndex:3}}></View>
            <Image source={require("../assets/bg-layer2.jpg")} style={{height:80,width:160,borderTopRightRadius:30,borderBottomRightRadius:30}} />
            <View style={{alignItems:'center',paddingLeft:20,justifyContent:'center'}}>
              <Text style={{width:100,fontWeight:'bold',color:'purple'}}>Post pragnancy caring service</Text>
            </View>
          </Animated.View>

          <Animated.View style={{opacity:this.state.animatedOpacity,width:'95%',alignSelf:'center',backgroundColor:'white',elevation:10,margin:20,flexDirection:'row'}}>
            <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(20, 117, 186, 0.3)',zIndex:3}}></View>
            <Image source={require("../assets/bg-layer2.jpg")} style={{height:80,width:160,borderTopRightRadius:30,borderBottomRightRadius:30}} />
            <View style={{alignItems:'center',paddingLeft:20,justifyContent:'center'}}>
              <Text style={{width:100,fontWeight:'bold',color:'purple'}}>Post pragnancy caring service</Text>
            </View>
          </Animated.View>

          <Animated.View style={{opacity:this.state.animatedOpacity,width:'95%',alignSelf:'center',backgroundColor:'white',elevation:10,margin:20,flexDirection:'row'}}>
            <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(186, 20, 50, 0.3)',zIndex:3}}></View>
            <Image source={require("../assets/bg-layer2.jpg")} style={{height:80,width:160,borderTopRightRadius:30,borderBottomRightRadius:30}} />
            <View style={{alignItems:'center',paddingLeft:20,justifyContent:'center'}}>
              <Text style={{width:100,fontWeight:'bold',color:'purple'}}>Post pragnancy caring service</Text>
            </View>
          </Animated.View>

          <Animated.View style={{opacity:this.state.animatedOpacity,width:'95%',alignSelf:'center',backgroundColor:'white',elevation:10,margin:20,flexDirection:'row'}}>
            <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(17, 112, 111, 0.3)',zIndex:3}}></View>
            <Image source={require("../assets/bg-layer2.jpg")} style={{height:80,width:160,borderTopRightRadius:30,borderBottomRightRadius:30}} />
            <View style={{alignItems:'center',paddingLeft:20,justifyContent:'center'}}>
              <Text style={{width:100,fontWeight:'bold',color:'purple'}}>Post pragnancy caring service</Text>
            </View>
          </Animated.View>

          <Animated.View style={{opacity:this.state.animatedOpacity,width:'95%',alignSelf:'center',backgroundColor:'white',elevation:10,margin:20,flexDirection:'row'}}>
            <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(224, 144, 31, 0.3)',zIndex:3}}></View>
            <Image source={require("../assets/bg-layer2.jpg")} style={{height:80,width:160,borderTopRightRadius:30,borderBottomRightRadius:30}} />
            <View style={{alignItems:'center',paddingLeft:20,justifyContent:'center'}}>
              <Text style={{width:100,fontWeight:'bold',color:'purple'}}>Post pragnancy caring service</Text>
            </View>
          </Animated.View>

          <Animated.View style={{opacity:this.state.animatedOpacity,width:'95%',alignSelf:'center',backgroundColor:'white',elevation:10,margin:20,flexDirection:'row'}}>
            <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(224, 144, 31, 0.3)',zIndex:3}}></View>
            <Image source={require("../assets/bg-layer2.jpg")} style={{height:80,width:160,borderTopRightRadius:30,borderBottomRightRadius:30}} />
            <View style={{alignItems:'center',paddingLeft:20,justifyContent:'center'}}>
              <Text style={{width:100,fontWeight:'bold',color:'purple'}}>Post pragnancy caring service</Text>
            </View>
          </Animated.View>
        </Animated.View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#fff'}
})