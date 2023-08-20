import { Text, StyleSheet, View ,ScrollView,Image} from 'react-native'
import React, { Component } from 'react'
import BaseHeader from '../components/BaseHeader'
import LinearGradient from 'react-native-linear-gradient';

export default class Notifications extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{paddingBottom:100}} style={styles.container}>
        <BaseHeader />
        <View>
        <LinearGradient colors={['#a7e1fa', '#7ccff2', '#5ac1ed']} style={{height:100,width:'95%',padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70}} />
            <View style={{marginLeft:10}}>
              <Text style={{width:200,fontSize:12,color:'white',fontWeight:'bold'}}><Text style={{fontSize:13,color:'#000',textTransform:'uppercase'}}>Ayushman khurana</Text> requested for new nursing service</Text>
              <Text style={{marginTop:20}}>2 Hour ago</Text>
            </View>            
          </View>
          </LinearGradient>

          <LinearGradient colors={['#dcecf2', '#c9e6f2', '#b8e2f5']} style={{height:100,width:'95%',padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70}} />
            <View style={{marginLeft:10}}>
              <Text style={{width:200,fontSize:12,color:'white',fontWeight:'bold'}}><Text style={{fontSize:13,color:'#000',textTransform:'uppercase'}}>Ayushman khurana</Text> requested for new nursing service</Text>
              <Text style={{marginTop:20}}>2 Hour ago</Text>
            </View>            
          </View>
          </LinearGradient>

          <LinearGradient colors={['#dcecf2', '#c9e6f2', '#b8e2f5']} style={{height:100,width:'95%',padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70}} />
            <View style={{marginLeft:10}}>
              <Text style={{width:200,fontSize:12,color:'white',fontWeight:'bold'}}><Text style={{fontSize:13,color:'#000',textTransform:'uppercase'}}>Ayushman khurana</Text> requested for new nursing service</Text>
              <Text style={{marginTop:20}}>2 Hour ago</Text>
            </View>            
          </View>
          </LinearGradient>

          <LinearGradient colors={['#dcecf2', '#c9e6f2', '#b8e2f5']} style={{height:100,width:'95%',padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70}} />
            <View style={{marginLeft:10}}>
              <Text style={{width:200,fontSize:12,color:'white',fontWeight:'bold'}}><Text style={{fontSize:13,color:'#000',textTransform:'uppercase'}}>Ayushman khurana</Text> requested for new nursing service</Text>
              <Text style={{marginTop:20}}>2 Hour ago</Text>
            </View>            
          </View>
          </LinearGradient>

          <LinearGradient colors={['#dcecf2', '#c9e6f2', '#b8e2f5']} style={{height:100,width:'95%',padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70}} />
            <View style={{marginLeft:10}}>
              <Text style={{width:200,fontSize:12,color:'white',fontWeight:'bold'}}><Text style={{fontSize:13,color:'#000',textTransform:'uppercase'}}>Ayushman khurana</Text> requested for new nursing service</Text>
              <Text style={{marginTop:20}}>2 Hour ago</Text>
            </View>            
          </View>
          </LinearGradient>

          <LinearGradient colors={['#dcecf2', '#c9e6f2', '#b8e2f5']} style={{height:100,width:'95%',padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70}} />
            <View style={{marginLeft:10}}>
              <Text style={{width:200,fontSize:12,color:'white',fontWeight:'bold'}}><Text style={{fontSize:13,color:'#000',textTransform:'uppercase'}}>Ayushman khurana</Text> requested for new nursing service</Text>
              <Text style={{marginTop:20}}>2 Hour ago</Text>
            </View>            
          </View>
          </LinearGradient>

          <LinearGradient colors={['#dcecf2', '#c9e6f2', '#b8e2f5']} style={{height:100,width:'95%',padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70}} />
            <View style={{marginLeft:10}}>
              <Text style={{width:200,fontSize:12,color:'white',fontWeight:'bold'}}><Text style={{fontSize:13,color:'#000',textTransform:'uppercase'}}>Ayushman khurana</Text> requested for new nursing service</Text>
              <Text style={{marginTop:20}}>2 Hour ago</Text>
            </View>            
          </View>
          </LinearGradient>

          <LinearGradient colors={['#dcecf2', '#c9e6f2', '#b8e2f5']} style={{height:100,width:'95%',padding:10,borderRadius:10,elevation:10,zIndex:2,margin:10,position:'relative'}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70}} />
            <View style={{marginLeft:10}}>
              <Text style={{width:200,fontSize:12,color:'white',fontWeight:'bold'}}><Text style={{fontSize:13,color:'#000',textTransform:'uppercase'}}>Ayushman khurana</Text> requested for new nursing service</Text>
              <Text style={{marginTop:20}}>2 Hour ago</Text>
            </View>            
          </View>
          </LinearGradient>
          
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#fff'}
})