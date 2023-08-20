import { Text, StyleSheet, View, StatusBar,Dimensions,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import  Entypo from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Settings extends Component {
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
          <Text>Settings</Text>
        </View>
      </View>
    )
  }
}

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
    paddingTop:20

  }
})