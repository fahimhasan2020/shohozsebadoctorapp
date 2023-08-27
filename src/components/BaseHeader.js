import { Text, View,Switch,Image,StatusBar } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../constants/colors';
export class BaseHeader extends Component {
  state = {
    service:false
  }
  render() {
    return (
        <View style={{backgroundColor:'white',elevation:10,padding:10,flexDirection:'row',justifyContent:'space-between',paddingLeft:20,paddingRight:20,height:150,borderBottomLeftRadius:170,borderBottomRightRadius:170}}>
        <StatusBar barStyle={'dark-content'} backgroundColor="white" />
        <Image source={require('../assets/logo.png')} style={{height:30,width:30}} />
        <View style={{flexDirection:'row'}}>
           <Switch
      style={{height:30}}
      trackColor={{ false: "#767577", true: colors.themeColor }}
      thumbColor={this.props.activity ? colors.themeColor : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={async()=>{
        const userId =  await AsyncStorage.getItem('id');
        const token =  await AsyncStorage.getItem('token');
        if(this.props.activity){
          this.props.changeActivity(false);
          //console.log('false pressed');
          fetch(this.props.host+'update/online/'+userId+'/0',{method:"GET",headers:{"Authorization":"Bearer "+token}});
        }else{
          //console.log('True pressed');
          this.props.changeActivity(true);
          fetch(this.props.host+'update/online/'+userId+'/1',{method:"GET",headers:{"Authorization":"Bearer "+token}});
        }
       }}
      value={this.props.activity}
    />
     <Text style={{fontSize:14,textTransform:'uppercase',marginTop:5,marginLeft:5}}>{this.props.activity? "Available":"Offline"}</Text>
      </View> 
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
      changeActivity : (value) => {dispatch({type:'CHANGE_ACTIVITY',stata: value})},
  };

};
const mapStateToProps = state => {
  return {
      activity:state.auth.activity,
      host:state.auth.host,
      id:state.auth.id
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(BaseHeader);