import { Text, View,TouchableOpacity } from 'react-native'
import React, { Component,useState,useEffect } from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator,CardStyleInterpolators} from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Entypo from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux"
import {Login,Accounts,EditProfile,Forgot,History,HistoryDetails,Home,MessageDetails,Messages,NotificationDetails,Notifications,Offers,OffersDetails,OrderDetails,Orders,Profile,ServiceDetails,Services,Settings,Splash,More,TransectionHistory,ServiceHistory,ServiceCreate,Gallery,HelpAndSupport,TermsAndConditions} from "./all"

const StackLogin = createStackNavigator();

function LoginNavigation() {
  return (
    <StackLogin.Navigator screenOptions={{
        headerShown: false
      }}> 
      <StackLogin.Screen name="Splash" component={Splash} />
      <StackLogin.Screen name="Login" component={Login} />
      <StackLogin.Screen name="Forgot" component={Forgot} />
    </StackLogin.Navigator>
  );
}

function HomeNavigations() {
  return (
    <StackLogin.Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
      }}> 
      <StackLogin.Screen name="MainScreen" component={HomeTabs} />
      <StackLogin.Screen name="Accounts" component={Accounts} />
      <StackLogin.Screen name="EditProfile" component={EditProfile} />
      <StackLogin.Screen name="History" component={History} />
      <StackLogin.Screen name="HistoryDetails" component={HistoryDetails} />
      <StackLogin.Screen name="MessageDetails" component={MessageDetails} />
      <StackLogin.Screen name="Messages" component={Messages} />
      <StackLogin.Screen name="NotificationDetails" component={NotificationDetails} />
      <StackLogin.Screen name="Offers" component={Offers} />
      <StackLogin.Screen name="OffersDetails" component={OffersDetails} />
      <StackLogin.Screen name="OrderDetails" component={OrderDetails} />
      <StackLogin.Screen name="Profile" component={Profile} />
      <StackLogin.Screen name="ServiceDetails" component={ServiceDetails} />
      <StackLogin.Screen name="Settings" component={Settings} />
      <StackLogin.Screen name="TransectionHistory" component={TransectionHistory} />
      <StackLogin.Screen name="ServiceHistory" component={ServiceHistory} />
      <StackLogin.Screen name="ServiceCreate" component={ServiceCreate} />
      <StackLogin.Screen name="Gallery" component={Gallery} />
      <StackLogin.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <StackLogin.Screen name="TermsAndConditions" component={TermsAndConditions} />
    </StackLogin.Navigator>
  );
}

const HomeTab = createBottomTabNavigator();

function HomeTabs() {
  const [notification,setNotification] = useState(0);
  useEffect(()=>{
    //setNotification(3);
  })
  return (
    <HomeTab.Navigator  screenOptions={{ headerShown: false,tabBarShowLabel:false,tabBarStyle:{backgroundColor:'rgba(0,0,0,0.8)',elevation:0,height:60,position:'absolute',left:0,right:0,bottom:0},tabBarActiveTintColor:'#CCC',tabBarInactiveTintColor:'#FFF' }}>
      <HomeTab.Screen options={{
        tabBarIcon : ({color,size})=>(<View style={{alignItems:'center',justifyContent:'center',top:5}}>
                <Entypo name="home" size={size} color={color} />
                <Text style={{color:color,fontSize:10,fontWeight:'bold',textTransform:'uppercase'}}>Home</Text>
            </View>)
      }} name="Home" component={Home} />
      <HomeTab.Screen options={{
         tabBarIcon : ({color,size})=>(<View style={{alignItems:'center',justifyContent:'center',top:5}}>
         <MaterialIcons name="medical-services" size={size} color={color} />
         <Text style={{color:color,fontSize:10,fontWeight:'bold',textTransform:'uppercase'}}>Service</Text>
     </View>)
      }} name="Services" component={Services} />
      <HomeTab.Screen options={{
         tabBarIcon : ({color,size})=>(<View style={{alignItems:'center',justifyContent:'center',top:5}}>
         <MaterialIcons name="add-shopping-cart" size={size} color={color} />
         <Text style={{color:color,fontSize:10,fontWeight:'bold',textTransform:'uppercase'}}>Order</Text>
     </View>)
      }} name="Orders" component={Orders} />
      <HomeTab.Screen options={{
        tabBarIcon : ({color,size})=>(<View style={{alignItems:'center',justifyContent:'center',top:5}}>
        {notification<1?null:<View style={{backgroundColor:'red',position:'absolute',top:-10,right:15,zIndex:3,borderRadius:8,padding:3,paddingLeft:4,paddingRight:4}}>
            <Text style={{color:'#fff',fontSize:9}}>{notification}</Text>
        </View>}
       
        <Ionicons name="notifications" size={size} color={color} />
        <Text style={{color:color,fontSize:10,fontWeight:'bold',textTransform:'uppercase'}}>Notification</Text>
    </View>)
      }} name="Notification" component={Notifications} />
      <HomeTab.Screen 
      options={{
        tabBarIcon : ({color,size})=>(<View style={{alignItems:'center',justifyContent:'center',top:5}}>
        <Entypo name="menu" size={size} color={color} />
        <Text style={{color:color,fontSize:10,fontWeight:'bold',textTransform:'uppercase'}}>More</Text>
    </View>)
      }} name="More" component={More} />
    </HomeTab.Navigator>
  );
}

export  class Index extends Component {
  render() {
    if(this.props.loggedIn){
      return(
    <NavigationContainer>
      <HomeNavigations />
    </NavigationContainer>)
    }else{
      return (
      <NavigationContainer>
        <LoginNavigation />
      </NavigationContainer>
    )
    }
    
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
      loggedIn:state.auth.loggedIn
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Index);