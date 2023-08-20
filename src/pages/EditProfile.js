import { Text, StyleSheet, View, StatusBar,Dimensions,TouchableOpacity,TextInput,Image,PermissionsAndroid,Modal} from 'react-native'
import React, { Component } from 'react'
import  Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export class EditProfile extends Component {
  state = {
    dp:'',
    modalVisible:false,
    name:'',
    email:'',
    phoneNumber:'',
    details:'',
    lat:'',
    lng:'',
    tradeLicence:''
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  componentDidMount = async()=>{
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'ShohozSeba',
        'message': 'Shohozseba want access to your camera '
      }
    );
    this.setState({name:this.props.name,email:this.props.email,phoneNumber:this.props.phoneNumber,lat:this.props.lat,lng:this.props.lng,details:this.props.details,tradeLicance:this.props.tradeLicance});
  }

  changeDp = async(value)=>{
    if(value === 'camera'){
       await ImagePicker.openCamera({
     width: 300,
     height: 400,
     cropping: true,
     includeBase64:true
   }).then(image => {
    this.setState({dp:'data:image/png;base64,'+image.data,modalVisible:false});
    fetch(this.props.host+'update/dp',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: this.props.id,image:image})
    }).then(()=>{
      this.props.changeDp(this.props.host+'storage/images/np'+this.props.id+'.png')
    })
   });
    }else{
      await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64:true
      }).then(image => {
       this.setState({dp:'data:image/png;base64,'+image.data,modalVisible:false});
      });
    }
   
 }

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
          <View>
          {this.state.dp ===''||this.state.dp===null?<TouchableOpacity onPress={()=>{
        this.setState({modalVisible:true});
        //this.changeDp();
      }}><Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAPFBMVEX29vawsLD5+fm6urqtra3CwsKysrLy8vLi4uLe3t7m5uaxsbHp6enFxcXNzc3s7OzT09O9vb3Q0NDZ2dlO/F6aAAAFFUlEQVR4nO2dyXarMAxAQQYzT+H///UZkjRNHyHEtmyJ6C66aLvgHnmQDZaTRBAEQRAEQRCEO3An9oMEY3Et2nKeR8Nc1UPyBfYAQ9VPOvtNqrqxTk7sDkndq0X0L+Z3TT4Xp1Q3ke71hvMv96lKzmYOUE470nf35lKcyhxK9d56NU/785hDOx2SvrX3yzlaOxT9cevVXJcnEIdSf6a9mHfsQw4fBvse8pq1OBTKRnsxnxmLQ/t5G/8R79mKQ2ltvYjnsZ/fEqhctI34FNvACldtpuJujZytOLTu2stEzm1wK7QHbSM+8hKHDzLyfXFWOStcPGkbitgyx4Han3aWMwq48qbNKWP12coXcS4tffCqzWYyg86vd5q1sZUO4SVjefJmMbRB7tubR8A99+7Vm0HAvffuVXyIrfUeBG0Gmy8wY3inOrbXO2DC0DbLk9hibyhQwk2+oSM1c/INHWU0X6A+hfvZZtnwpr3xgpC03LxJpy7ue8cv0aS9rd4CHoL0KhxyLO00q2PL7QBYwxr17SY0bdoDOlK2tnpTztjQpjHiu2zet5h+eU+EvT2+L/gP8aYHojfpdo7Yv1PKCfq3juffOn9/a74GPl8A//GuKHt/63rM75vvJ2/S6+8v3W9B3F+jPI0liPuppLcdEPfPab8RRevgKrbZGwocbdrZWoLylcfqTXn2XkBq6NSbeYKTopNOzq+gvDIhnazdwPieiXjSsoIwhROfvG94DziLcCP0cB7h9p67kM9Z7nj+uKeJ7XMYsD0NuwWnkzWDR20eg9oVjy1dM0hZHnibxDNuB+D9dHHi2ywbeDkoyWYKewCtB21OY9od90ODtL9RfAnUrtqxDSyBtnEIOcO+fce+jAmLLZY9LLcZs5Ty688D2GVumRp4axvx4eO2nmUX7tYr47Haa49gt6fQNsNbd9w80+xS09dAmx+st6dn9iXInoC2T9+ZZ5k6mfUCFPNekUXzp64+ZSXRpZTonDcbBVTNr1Rfni/UD0xA67lT+qlc7tRXw5nr5d64Fkiuy8pQ1kPxDfWRH3xbOWxBEARBYAvsEfvhELhqLbdYjH2XT0oprXXTNOanVmrKu36cy7q4/+MZMCJFW43dpNOfjHxjXXJFT91YtQVz+UV5WYWkm7KvlqO3iz24yhvncr21w2o/dV2ZVtxu9jCP246TnfKTvLrUfFblAOv1LE7OD3fNY0MCYLjsXc9ip94Sb/CQVAeuZ7FQJ73hCMVoX9f/nbqmepUNJO93ip3MSV5lA8UF1Xo1z8iZw4zWwp/M05FSP4fW54eZ++aKzAdtpmOHsl7NexohDxjsmziJS3zQKirumRP4LgDrQOi++BR3YHf5YMlNXMf8AAaGILPXNvE6uc/rGz4n2jmEuNrRKnz4uYnHSTxGxMHjGRJr8Qh93NMFRG40wU/UebuAyI3Q58IRC8R+ROATCT4uVfND2IM3RRPb94eQh2bRqrRYELD+IJ1WvhCwpeNVWbMh1BUAMVbcewRbjVPIWJ4IcnSWWrhDBRyxxrk1IbRJDeZXQgzpSIWn3AgwhyMVGnMDP2lDrBzpAP6hSkop6i/wGzrB0XwBewpHrHjtAnY9PprdG38mg5GoN/IheSr7S/+BXAqCZNayoMQbxzu24Ask3uIt3uIt3uIt3uIt3uJNEfEWb/EWb/EWb/EWb/EWb4qIt3iLt3iLt3gz9s6wvXtFE+wrIHYricUEV1sQBEEQBEEQgvAP11lefkObcB4AAAAASUVORK5CYII='}} style={{height:100,width:100,borderRadius:50,alignSelf:'center'}} />
      </TouchableOpacity>:<TouchableOpacity onPress={()=>{
        this.setState({modalVisible:true});
      }}><Image 
      source={{uri:this.state.dp}} 
      style={{height:100,width:100,borderRadius:50,alignSelf:'center'}} /></TouchableOpacity>}
   
            <Text style={{marginLeft:'10%',marginBottom:5}}>Name</Text>
            <TextInput value={this.state.name} onChangeText={(value)=>{
              this.setState({name:value});
            }} style={styles.commonInput} placeholder='Name of you nursing center' />
            <Text style={{marginLeft:'10%',marginBottom:5}}>Account Email</Text>
            <TextInput value={this.state.email} onChangeText={(value)=>{
              this.setState({email:value});
            }}  style={styles.commonInput} placeholder='Account Email' />
            <Text style={{marginLeft:'10%',marginBottom:5}}>Phone Number</Text>
            <TextInput value={this.state.phoneNumber} onChangeText={(value)=>{
              this.setState({phoneNumber:value});
            }} style={styles.commonInput} placeholder='Phone Number' />
            <Text style={{marginLeft:'10%',marginBottom:5}}>Details</Text>
            <TextInput value={this.state.details} onChangeText={(value)=>{
              this.setState({details:value});
            }} style={styles.commonInput} placeholder='Account details' />
            <Text  style={{marginLeft:'10%',marginBottom:5}}>Set Location</Text>
            <TextInput value={this.state.lat} onChangeText={(value)=>{
              this.setState({lat:value});
            }} style={styles.commonInput} placeholder='Location' />
            <Text style={{marginLeft:'10%',marginBottom:5}}>Trade Licence</Text>
            <TextInput value={this.state.tradeLicence} onChangeText={(value)=>{
              this.setState({tradeLicance:value});
            }}  style={styles.commonInput} placeholder='Trade Licence' />
            <TouchableOpacity style={{backgroundColor:'#87419a',padding:10,alignItems:'center',width:'80%',marginLeft:'10%',borderRadius:10,elevation:10,marginTop:10}}>
              <Text style={{color:'white'}}>Update Info</Text>
            </TouchableOpacity>
          </View>
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
           this.setState({modalVisible:false});
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  this.changeDp('camera');
                }}
              >
                <Entypo name={'camera'}  size={30} color={'#87419a'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  this.changeDp('storage')
                }}
              >
                <Entypo name={'images'}  size={30} color={'#87419a'} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
          
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
      changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',token: value})},
      changeLogged : (value) => {dispatch({type:'LOGIN',logged: value})},
      changeDP : (value) => {dispatch({type:'UPDATE_DP',dp: value})},
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
      details:state.auth.details,
      id:state.auth.id
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#87419a'
  },
  commonInput:{
    padding:5,paddingLeft:10,borderWidth:1,borderColor:'#ccc',width:'80%',marginLeft:'10%',marginBottom:10,borderRadius:5
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

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    flexDirection:'row',
    justifyContent:'space-around',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    borderWidth:1,
    borderColor:'black',
    padding: 10,
    elevation: 2,
    marginLeft:20
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})