import { Text, View,StyleSheet,ScrollView,Image,TouchableOpacity,FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BaseHeader from '../components/BaseHeader'
import * as Animatable from 'react-native-animatable';
import Entypo from "react-native-vector-icons/Entypo"

export  class More extends Component {
  state = {
    contents:[
      {title:'Profile',navigation:'Profile',function:''},
      {title:'Settings',navigation:'Settings',function:''},
      {title:'Transection History',navigation:'TransectionHistory',function:''},
      {title:'Service History',navigation:'ServiceHistory',function:''},
      {title:'Create Service',navigation:'ServiceCreate',function:''},
      {title:'Gallery',navigation:'Gallery',function:''},
      {title:'Help & Support',navigation:'HelpAndSupport',function:''},
      {title:'Terms & Conditions',navigation:'TermsAndConditions',function:''},
      {title:'Logout',navigation:'',function:'Logout'}
    ]
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{paddingBottom:100}} style={styles.container}>
        <BaseHeader />
        <View style={{alignItems:'center',marginTop:-50}}>
          <Image source={require('../assets/nursinglogo.jpg')} style={{height:80,width:80,borderRadius:80}} />
          <Text style={{fontWeight:'bold',fontSize:14,color:'#878383'}}>{this.props.name}</Text>
          <Text style={{fontWeight:'bold',fontSize:10,color:'#878383',marginTop:5}}>{this.props.phoneNumber}</Text>
          
        </View>
        <View style={{marginTop:20}}>
        <FlatList
        data={this.state.contents}
        renderItem={({item,index})=><Animatable.View animation={'fadeInUp'} delay={index*50} easing="ease-in-out" duration={500}>
        <TouchableOpacity
      onPress={async()=>{
        if(item.navigation !== ''){
           this.props.navigation.navigate(item.navigation)
          }else{ await AsyncStorage.setItem('loggedIn', "false");
            this.props.changeLogged(false)
           }}}  style={{width:'100%',backgroundColor:'white',borderBottomWidth:0.5,borderBottomColor:'#ccc',borderRadius:5,padding:10,height:50,alignItems:'center',flexDirection:'row',justifyContent:'space-between',paddingLeft:30}}>
        <Text style={{fontSize:12,fontWeight:'bold',color:'#878383'}}>{item.title}</Text>
        <Entypo name='chevron-thin-right' size={16} color={'#878383'} />
      </TouchableOpacity>
      </Animatable.View>}
        keyExtractor={item => Date.now()}
      />
        </View>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
      changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',token: value})},
      changeLogged : (value) => {dispatch({type:'LOGIN',logged: value})},
  };

};

const mapStateToProps = state => {
  return {
      accessToken : state.auth.accessToken,
      host: state.auth.host,
      name: state.auth.name,
      phoneNumber: state.auth.phoneNumber,
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(More);

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#fff'}
})