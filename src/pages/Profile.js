import { Text, StyleSheet, useWindowDimensions, Animated,PermissionsAndroid, View, StatusBar, Dimensions, TouchableOpacity, ScrollView, Image} from 'react-native'
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
export class Profile extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'INFO' },
      { key: 'second', title: 'REVIEWS' },
    ],
    latitude: 23.4753817,
    longitude: 91.1838506,
    coordinates: [],
  };

  componentDidMount =async() =>{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'ShohozSeba',
          'message': 'Shohozseba want access to your location '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
        Geolocation.getCurrentPosition(
          position => {
            console.log(position.coords.latitude,position.coords.longitude);
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              coordinates: this.state.coordinates.concat({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              })
            });
          },
          error => {
            alert(error.message.toString());
          },
          {
            showLocationDialog: true,
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
          }
        )
        
      } else {
        console.log("location permission denied")
       
      }
    } catch (err) {
      console.warn(err)
    }
    
  }

  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#87419a' }}
    />
  );

 FirstRoute = () => (
    <View style={{paddingTop:20}}>
            <View style={{width:'100%',padding:3,paddingLeft:40,flexDirection:'row',alignItems:'center'}}>
              <MaterialIcons name='email' size={18} color={'#817e82'} />
              <Text style={{fontSize:12,marginLeft:30,fontWeight:'bold'}}>{this.props.email}</Text>
            </View>
            <View style={{width:'100%',padding:10,paddingLeft:40,flexDirection:'row',alignItems:'center'}}>
              <MaterialIcons name='local-phone' size={18} color={'#817e82'} />
              <Text style={{fontSize:12,marginLeft:30,fontWeight:'bold'}}>{this.props.phoneNumber}</Text>
            </View>
            <View style={{width:'100%',padding:10,paddingLeft:40,flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name='drivers-license' size={18} color={'#817e82'} />
              <Text style={{fontSize:12,marginLeft:30,fontWeight:'bold'}}>{this.props.tradeLicance}</Text>
          </View>
          <View style={{width:'100%',padding:10,paddingLeft:40,flexDirection:'row',alignItems:'center'}}>
              <Entypo name='map' size={18} color={'#817e82'} />
              <Text style={{fontSize:12,marginLeft:30,fontWeight:'bold'}}>Address</Text>
          </View>
          <MapView
    provider={PROVIDER_GOOGLE}
    style={{width: Dimensions.get('window').width*0.8,marginLeft:40,
    height: 200,backgroundColor:'white',elevation:10}}
    customMapStyle={mapStyle}
    minZoomLevel={14}
    showsScale
    showsCompass
    showsUserLocation={true}
    region={{
      latitude: parseFloat(this.props.lat),
      longitude: parseFloat(this.props.lng),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} />
     <View style={{width:'100%',padding:10,paddingLeft:40,flexDirection:'row',alignItems:'center'}}>
              <Entypo name='info' size={18} color={'#817e82'} />
              <Text style={{fontSize:12,marginLeft:30,fontWeight:'bold',maxWidth:200,textAlign:'justify'}}>{this.props.details}</Text>
      </View>
    </View>
  );

 SecondRoute = () => (
    <View style={{paddingTop:20,width:windowWidth,paddingLeft:20,paddingRight:20}}>
      <ScrollView>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70,marginRight:30}} />
        <View>
        <Text style={{fontSize:14,fontWeight:'bold',color:'black',marginBottom:5}}>Abdul moktar</Text>
        <Rating
            imageSize={15}
            readonly
            style={{marginBottom:5,alignSelf:'flex-start'}}
            />
            <Text style={{fontSize:12,color:'#ccc',marginBottom:5,width:150,textAlign:'justify'}}>They have a nice service in nursing. I spent more then two month under their service.</Text>
        </View>
      </View>


      <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70,marginRight:30}} />
        <View>
        <Text style={{fontSize:14,fontWeight:'bold',color:'black',marginBottom:5}}>Abdul moktar</Text>
        <Rating
            imageSize={15}
            readonly
            style={{marginBottom:5,alignSelf:'flex-start'}}
            />
            <Text style={{fontSize:12,color:'#ccc',marginBottom:5,width:150,textAlign:'justify'}}>They have a nice service in nursing. I spent more then two month under their service.</Text>
        </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70,marginRight:30}} />
        <View>
        <Text style={{fontSize:14,fontWeight:'bold',color:'black',marginBottom:5}}>Abdul moktar</Text>
        <Rating
            imageSize={15}
            readonly
            style={{marginBottom:5,alignSelf:'flex-start'}}
            />
            <Text style={{fontSize:12,color:'#ccc',marginBottom:5,width:150,textAlign:'justify'}}>They have a nice service in nursing. I spent more then two month under their service.</Text>
        </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70,marginRight:30}} />
        <View>
        <Text style={{fontSize:14,fontWeight:'bold',color:'black',marginBottom:5}}>Abdul moktar</Text>
        <Rating
            imageSize={15}
            readonly
            style={{marginBottom:5,alignSelf:'flex-start'}}
            />
            <Text style={{fontSize:12,color:'#ccc',marginBottom:5,width:150,textAlign:'justify'}}>They have a nice service in nursing. I spent more then two month under their service.</Text>
        </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/user.jpg')} style={{height:70,width:70,borderRadius:70,marginRight:30}} />
        <View>
        <Text style={{fontSize:14,fontWeight:'bold',color:'black',marginBottom:5}}>Abdul moktar</Text>
        <Rating
            imageSize={15}
            readonly
            style={{marginBottom:5,alignSelf:'flex-start'}}
            />
            <Text style={{fontSize:12,color:'#ccc',marginBottom:5,width:150,textAlign:'justify'}}>They have a nice service in nursing. I spent more then two month under their service.</Text>
        </View>
      </View>
      </ScrollView>
      
    </View>
  );
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor="#87419a" />
        <View style={styles.cardBox}>
          <TouchableOpacity
          onPress={()=>{this.props.navigation.goBack()}}
          style={{backgroundColor:'#87419a',padding:10,paddingRight:15,paddingLeft:20,elevation:10,borderTopRightRadius:20,borderBottomRightRadius:20,width:70}}>
            <Entypo name='chevron-thin-left' size={20} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity
          style={{position:'absolute',top:30,right:30}}
          onPress={()=>{this.props.navigation.navigate('EditProfile')}}
          >
            <Feather name='edit-3' size={20} color={'#87419a'} />
          </TouchableOpacity>
          <ScrollView>
          <Image source={require('../assets/nursinglogo.jpg')} style={{height:120,width:120,borderRadius:80,alignSelf:'center'}} />
          <Text style={styles.headliLines}>{this.props.name}</Text>
          <Rating
            imageSize={15}
            readonly
            style={{ paddingVertical: 10 }}/>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:20,paddingRight:20,marginTop:21,marginBottom:20}}>
              <View style={{alignItems:'center'}}>
                <Text style={styles.digitCount}>12</Text>
                <Text style={styles.digitName}>Services</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={styles.digitCount}>125</Text>
                <Text style={styles.digitName}>Orders</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={styles.digitCount}>200</Text>
                <Text style={styles.digitName}>Clients</Text>
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
export default connect(mapStateToProps,mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#87419a'
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
  digitCount:{fontSize:22,fontWeight:'bold',color:'#474747',letterSpacing:2,textTransform:'uppercase'},
  digitName:{fontSize:14,fontWeight:'bold',color:'#474747',textTransform:'uppercase'},
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


