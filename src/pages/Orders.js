import { Text, StyleSheet, ScrollView,View,Image } from 'react-native'
import React, { Component } from 'react'
import BaseHeader from '../components/BaseHeader'
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class Orders extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{paddingBottom:100}} style={styles.container}>
        <BaseHeader />
        <View style={{width:'100%',paddingLeft:20,paddingRight:20,marginTop:-70}}>

          {/* card starts here */}
          <View style={{width:'100%',height:250,backgroundColor:'white',elevation:10,padding:20,marginBottom:10,borderRadius:25}}>
          <Image source={require("../assets/bg-layer3.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,bottom:0,opacity:0.3,height:250,width:320,borderRadius:25}} />
            <View style={{width:'100%',flexDirection:'row'}}>
             <Image source={require('../assets/user.jpg')} style={{height:100,width:100,borderRadius:100}} />
            <View style={{paddingLeft:40,alignItems:'flex-start'}}>
            <Rating
            imageSize={15}
            readonly
            style={{ paddingVertical: 10 }}/>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Ayushman khurana</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>+880-1711432259</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Services: 13</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Date: 13/2/97</Text>

            </View>
          </View>
          <Text style={{fontSize:16,marginTop:30,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase',color:'purple',alignSelf:'center'}}>New baby caring service </Text>
          <Text style={{fontSize:12,marginTop:5,
            fontWeight:'bold',marginBottom:1,textTransform:'uppercase',color:'#fff'}}>From: 2/10/2023 - To:2/10/2023 (Day only)</Text>
          </View>
          {/* card ends here */}

          {/* card starts here */}
          <View style={{width:'100%',height:250,backgroundColor:'white',elevation:10,padding:20,marginBottom:10,borderRadius:25}}>
          <Image source={require("../assets/bg-layer3.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,bottom:0,opacity:0.3,height:250,width:320,borderRadius:25}} />
            <View style={{width:'100%',flexDirection:'row'}}>
             <Image source={require('../assets/user.jpg')} style={{height:100,width:100,borderRadius:100}} />
            <View style={{paddingLeft:40,alignItems:'flex-start'}}>
            <Rating
            imageSize={15}
            readonly
            style={{ paddingVertical: 10 }}/>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Ayushman khurana</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>+880-1711432259</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Services: 13</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Date: 13/2/97</Text>

            </View>
          </View>
          <Text style={{fontSize:16,marginTop:30,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase',color:'purple',alignSelf:'center'}}>New baby caring service </Text>
          <Text style={{fontSize:12,marginTop:5,
            fontWeight:'bold',marginBottom:1,textTransform:'uppercase',color:'#fff'}}>From: 2/10/2023 - To:2/10/2023 (Day only)</Text>
          </View>
          {/* card ends here */}

          {/* card starts here */}
          <View style={{width:'100%',height:250,backgroundColor:'white',elevation:10,padding:20,marginBottom:10,borderRadius:25}}>
          <Image source={require("../assets/bg-layer3.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,bottom:0,opacity:0.3,height:250,width:320,borderRadius:25}} />
            <View style={{width:'100%',flexDirection:'row'}}>
             <Image source={require('../assets/user.jpg')} style={{height:100,width:100,borderRadius:100}} />
            <View style={{paddingLeft:40,alignItems:'flex-start'}}>
            <Rating
            imageSize={15}
            readonly
            style={{ paddingVertical: 10 }}/>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Ayushman khurana</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>+880-1711432259</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Services: 13</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Date: 13/2/97</Text>

            </View>
          </View>
          <Text style={{fontSize:16,marginTop:30,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase',color:'purple',alignSelf:'center'}}>New baby caring service </Text>
          <Text style={{fontSize:12,marginTop:5,
            fontWeight:'bold',marginBottom:1,textTransform:'uppercase',color:'#fff'}}>From: 2/10/2023 - To:2/10/2023 (Day only)</Text>
          </View>
          {/* card ends here */}

          {/* card starts here */}
          <View style={{width:'100%',height:250,backgroundColor:'white',elevation:10,padding:20,marginBottom:10,borderRadius:25}}>
          <Image source={require("../assets/bg-layer3.jpg")} resizeMode='cover' style={{position: 'absolute',top: 0,left: 0,right: 0,bottom:0,opacity:0.3,height:250,width:320,borderRadius:25}} />
            <View style={{width:'100%',flexDirection:'row'}}>
             <Image source={require('../assets/user.jpg')} style={{height:100,width:100,borderRadius:100}} />
            <View style={{paddingLeft:40,alignItems:'flex-start'}}>
            <Rating
            imageSize={15}
            readonly
            style={{ paddingVertical: 10 }}/>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Ayushman khurana</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>+880-1711432259</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Services: 13</Text>
            <Text style={{fontSize:10,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase'}}>Date: 13/2/97</Text>

            </View>
          </View>
          <Text style={{fontSize:16,marginTop:30,
            fontWeight:'bold',marginBottom:5,textTransform:'uppercase',color:'purple',alignSelf:'center'}}>New baby caring service </Text>
          <Text style={{fontSize:12,marginTop:5,
            fontWeight:'bold',marginBottom:1,textTransform:'uppercase',color:'#fff'}}>From: 2/10/2023 - To:2/10/2023 (Day only)</Text>
          </View>
          {/* card ends here */}
         
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#fff'}
})