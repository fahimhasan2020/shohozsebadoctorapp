import { Text, StyleSheet, ScrollView,View,Image,Animated,Pressable,FlatList } from 'react-native'
import React, { Component } from 'react'
import BaseHeader from '../components/BaseHeader'
import { colors } from '../constants/colors'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
class Services extends Component {
  state={
    animatedOpacity:new Animated.Value(0.0),
    animatedMargin:new Animated.Value(-20),
    appointments:[]
  }
  componentDidMount = ()=>{
    this.unsubscribe = this.props.navigation.addListener('focus', this.initialized);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  initialized = async() =>{
    var myHeaders = new Headers();
    const token = await AsyncStorage.getItem("token");
    const userId = await AsyncStorage.getItem("id");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer "+token);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    console.log(userId);
    fetch(this.props.hostSingle+"appointment/getdoctor/"+userId, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result,userId);
        this.setState({appointments:result});
        Animated.timing(this.state.animatedOpacity, {
              duration: 1000,
              toValue: 1,
              useNativeDriver: true
          }).start();
        
          Animated.timing(this.state.animatedMargin, {
            duration: 1000,
            toValue: -70,
        }).start();
      })
      .catch(error => console.log('error', error));
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{paddingBottom:100}} style={styles.container}>
        <BaseHeader />
        <Animated.View style={{width:'100%',paddingLeft:20,paddingRight:20,borderRadius:10,marginTop:this.state.animatedMargin}}>
         <FlatList
         data={this.state.appointments}
         showsVerticalScrollIndicator={false}
         renderItem={({item,index})=>(<Pressable
         onPress={()=>{this.props.navigation.navigate('ServiceDetails',{data:item})}}
         >
              <Animated.View style={{opacity:this.state.animatedOpacity,width:'95%',alignSelf:'center',backgroundColor:'white',elevation:3,margin:20,flexDirection:'row',borderRadius:10}}>
              <View style={{width:'100%',padding:10,flexDirection:'row'}}>
                <View>
                  <Image source={require('../assets/profile.png')} style={{height:100,width:100,marginTop:15,marginBottom:15}} />
                </View>
                <View style={{paddingLeft:20}}>
                  <Text style={{color:colors.themeColor}}>{item.name}</Text>
                  <Text style={{color:'grey',fontSize:12,width:150,marginTop:10}}>{item.description}</Text>
                  <View style={{flexDirection:'row',marginTop:5,width:100,justifyContent:'space-between'}}>
                    <View>
                      <Entypo name="user" size={15} color={'grey'} />
                      <Text style={{color:'grey'}}>{item.age}</Text>
                    </View>
                    <View>
                      <MaterialCommunityIcons name="blood-bag" size={15} color={'grey'} />
                      <Text style={{color:'grey'}}>{item.blood_group}</Text>
                    </View>
                    <View>
                      <FontAwesome name="transgender" size={15} color={'grey'} />
                      <Text style={{color:'grey'}}>{item.gender}</Text>
                    </View>

                  </View>
                </View>
              </View>
             </Animated.View>
          </Pressable>)}
         />
         
         
        </Animated.View>
      </ScrollView>
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
      host: state.auth.host,
      hostSingle: state.auth.hostSingle,
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Services);

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#fff'}
})