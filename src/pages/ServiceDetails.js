import { Text, StyleSheet, useWindowDimensions, Animated,PermissionsAndroid, View, StatusBar, Dimensions, TouchableOpacity, ScrollView, Image, Pressable,Linking} from 'react-native'
import React, { Component } from 'react'
import  Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { Rating} from 'react-native-ratings';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Geolocation from "react-native-geolocation-service";
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {mapStyle} from "../components/MapStyle"
import { colors } from '../constants/colors';
export class ServiceDetails extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'INFO' },
      { key: 'second', title: 'PRESCRIPTION' },
    ],
    coordinates: [],
  };

  componentDidMount =async() =>{
   
  }

  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: colors.themeColor }}
    />
  );

 FirstRoute = () => (
    <View style={{paddingTop:20}}>
            <View style={{width:'100%',padding:3,paddingLeft:40,flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:'#817e82',width:100}}>Starting time:</Text>
              <Text style={{fontSize:12,marginLeft:30,fontWeight:'bold'}}>{this.props.route.params.data.starting_time}</Text>
            </View>
            <View style={{width:'100%',padding:3,paddingLeft:40,flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:'#817e82',width:100}}>Type:</Text>
              <Text style={{fontSize:12,marginLeft:30,fontWeight:'bold'}}>{this.props.route.params.data.type}</Text>
            </View>
            <View style={{width:'100%',padding:3,paddingLeft:40,flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:'#817e82',width:100}}>Description:</Text>
              <Text style={{fontSize:12,marginLeft:30,fontWeight:'bold'}}>{this.props.route.params.data.description}</Text>
            </View>
            <Pressable onPress={()=>{
              this.props.navigation.navigate('CallPatient');
            }} style={{marginLeft:20,width:'60%',backgroundColor:colors.themeColor,padding:10,elevation:3,marginTop:100,borderRadius:5,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'white'}}>Call patient now</Text>
              <Feather name={'phone-call'} size={20} color={'#fff'} style={{marginRight:20}} />
            </Pressable>
    </View>
  );

 SecondRoute = () => (
    <View style={{paddingTop:20,width:windowWidth,paddingLeft:20,paddingRight:20}}>
      <ScrollView>
        <View style={{flexDirection:'row'}}>
        <View>
        <Text style={{fontSize:14,fontWeight:'bold',color:'black',marginBottom:5}}>Previous prescription</Text>
        {this.props.route.params.data.previous_prescription !== ''?<Pressable 
        onPress={()=>{
          Linking.openURL(this.props.route.params.data.previous_prescription);
        }}
        >
          <FontAwesome name={'file-photo-o'} size={130} color={colors.themeColor} />
        </Pressable>:null}
       
        </View>
      </View>
      </ScrollView>
      
    </View>
  );
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.themeColor} />
        <View style={styles.cardBox}>
          <TouchableOpacity
          onPress={()=>{this.props.navigation.goBack()}}
          style={{backgroundColor:colors.themeColor,padding:10,paddingRight:15,paddingLeft:20,elevation:10,borderTopRightRadius:20,borderBottomRightRadius:20,width:70}}>
            <Entypo name='chevron-thin-left' size={20} color={'white'} />
          </TouchableOpacity>
        
          <ScrollView>
          <Image source={require('../assets/profile.png')} style={{height:120,width:120,borderRadius:80,alignSelf:'center'}} />
          <Text style={styles.headliLines}>{this.props.route.params.data.name}</Text>
          
            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:20,paddingRight:20,marginTop:21,marginBottom:20}}>
              <View style={{alignItems:'center'}}>
                <Text style={styles.digitCount}>{this.props.route.params.data.gender}</Text>
                <Text style={styles.digitName}>Gender</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={styles.digitCount}>{this.props.route.params.data.age}</Text>
                <Text style={styles.digitName}>Age</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={styles.digitCount}>{this.props.route.params.data.blood_group}</Text>
                <Text style={styles.digitName}>Blood</Text>
              </View>
            </View>
            <TabView
              indicatorStyle={{backgroundColor:'black'}}
              navigationState={this.state}
              renderTabBar={this.renderTabBar}
              renderScene={SceneMap({
                first: this.FirstRoute,
                second: this.SecondRoute,
               })}
                style={{zIndex:5}}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: windowWidth }}
                pagerStyle={{height:windowHeight,width:windowWidth}}
              />
          </ScrollView>
         <View>
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
  };

};

const mapStateToProps = state => {
  return {
      accessToken : state.auth.accessToken,
      host: state.auth.host,
      name: state.auth.name,
      phoneNumber: state.auth.phoneNumber,
      email:state.auth.email,
      tradeLicance:state.auth.tradeLicance,
      lat:state.auth.lat,
      lng:state.auth.lng,
      details:state.auth.details
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(ServiceDetails);

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
    zIndex:2
  },
  headliLines:{
    alignSelf:'center',
    color:'#817e82',
    fontWeight:'bold',
    fontSize:15
  },
  smallHeadliLines:{
    alignSelf:'center',
    color:'#817e82',
    fontWeight:'bold',
    fontSize:10
  },
  digitCount:{fontSize:16,fontWeight:'bold',color:'grey',letterSpacing:2,textTransform:'uppercase'},
  digitName:{fontSize:10,fontWeight:'bold',color:'grey',textTransform:'uppercase'},
  scene:{flex:1,height:300},
  tabBar: {
    flexDirection: 'row',
    paddingTop: 5,
    borderTopWidth:2,
    borderTopColor:'#ccc'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
})


