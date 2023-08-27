import { Text, StyleSheet, View,StatusBar,Image,ActivityIndicator,Dimensions,TextInput,TouchableOpacity,Linking,ToastAndroid,ScrollView,KeyboardAvoidingView,Pressable,FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {connect} from "react-redux"
import { colors } from '../constants/colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"
import DocumentPicker from 'react-native-document-picker';
import AntDesign from "react-native-vector-icons/AntDesign"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import ImagePicker from 'react-native-image-crop-picker';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker'

export class Register extends Component {
  state ={
    phoneNumber:'',
    genders:['male','female','others'],
    gender:'',
    bloodGroups:['+A','-A','+O','-O','+AB','-AB','+B','-B'],
    bloodGroup:'',
    mbbsCertificate:'',
    mbbsCertificateBlob:{},
    fcpsCertificateBlob:{},
    fcpsCertificate:'',
    email:'',
    firstName:'',
    lastName:'',
    degrees:'',
    department:'',
    departments:[],
    description:'',
    visit:'',
    age:'',
    dob:new Date(),
    birthDay:'',
    showPicker:false,
    experience:'',
    location:'',
    locations:'',
    lat:'',
    lng:'',
    bloogGroup:'',
    profilePicture:'',
    imageBlog:null,
    otp:false,
    finalOtp:'',
    otpInput:'',
    serverOtp:'',
    bmdc:'',
    requesting:false,
    otpRequesting:false
  }

  extractFilenameFromPath = (imagePath) =>{
    const parts = imagePath.split('/');
    const filename = parts[parts.length - 1];
    return filename;
  }

  upload = async() => {
    const pickerResult = await DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      copyTo: 'cachesDirectory',
    });
    console.log(pickerResult);
    this.setState({mbbsCertificate:pickerResult.name,mbbsCertificateBlob:pickerResult});
  };
  uploadFcps = async() => {
    const pickerResult = await DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      copyTo: 'cachesDirectory',
    });
    console.log(pickerResult);
    this.setState({fcpsCertificate:pickerResult.name,fcpsCertificateBlob:pickerResult});
  };

  getDepartments = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(this.props.hostSingle+"doctordepartments", requestOptions)
    .then(response => response.json())
    .then(result => this.setState({departments:result}))
    .catch(error => console.log('error', error));
  }

  handleChange = (index) => {
   this.setState({department:this.state.departments[index].id});
  };


 setDp = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      includeBase64: true,
    })
    .then(image => {
      this.setState({profilePicture:'data:image/png;base64,'+image.data,imageBlog:image});
    })
  };

  register=()=>{
    console.log(this.state.mbbsCertificateBlob);
    console.log(this.state.imageBlog);
    console.log(this.state.fcpsCertificateBlob);

    this.setState({requesting:true});
    if(this.state.profilePicture === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Profile picture required",ToastAndroid.SHORT);
    }
    if(this.state.firstName === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("First name required",ToastAndroid.SHORT);
    }
    if(this.state.lastName === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Last name required",ToastAndroid.SHORT);
    }
    if(this.state.email === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Email required",ToastAndroid.SHORT);
    }
    if(this.state.phoneNumber === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Phone number required",ToastAndroid.SHORT);
    }
    if(this.state.degrees === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Degrees required",ToastAndroid.SHORT);
    }
    if(this.state.department === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Department required",ToastAndroid.SHORT);
    }
    if(this.state.visit === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Consultation fees required",ToastAndroid.SHORT);
    }
    if(this.state.age === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Age required",ToastAndroid.SHORT);
    }
    if(this.state.birthDay === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Date of birth required",ToastAndroid.SHORT);
    }
    if(this.state.experience === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Experience required",ToastAndroid.SHORT);
    }
    if(this.state.location === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Service address required",ToastAndroid.SHORT);
    }
    if(this.state.bloodGroup === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Blood group required",ToastAndroid.SHORT);
    }
    if(this.state.gender === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Gender required",ToastAndroid.SHORT);
    }
    if(this.state.bmdc === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("BMDC number required",ToastAndroid.SHORT);
    }
    if(this.state.description === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Description required",ToastAndroid.SHORT);
    }
    if(this.state.description === ''){
        this.setState({requesting:false});
        return ToastAndroid.show("Description required",ToastAndroid.SHORT);
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data");
    var formdata = new FormData();
    formdata.append("email",this.state.email);
    formdata.append("phone_number",this.state.phoneNumber);
    formdata.append("description", this.state.description);
    formdata.append("degrees", this.state.degrees);
    formdata.append("department", this.state.department);
    formdata.append("visit", this.state.visit);
    formdata.append("first_name", this.state.firstName);
    formdata.append("last_name", this.state.lastName);
    formdata.append("gender", this.state.gender);
    formdata.append("date_of_birth", "2023-06-12");
    formdata.append("profile_picture", {
        uri:this.state.imageBlog.path,
        type:this.state.imageBlog.mime,
        name:this.extractFilenameFromPath(this.state.imageBlog.path)        
      });
    formdata.append('mbbs_certificate', {
        uri: this.state.mbbsCertificateBlob.fileCopyUri,
        type: this.state.mbbsCertificateBlob.type,
        name:this.state.mbbsCertificateBlob.name,
        });
    if(this.state.fcpsCertificate !== ''){
    formdata.append('fcps_certificate', {
        uri: this.state.fcpsCertificateBlob.fileCopyUri,
        type: this.state.fcpsCertificateBlob.type,
        name:this.state.fcpsCertificateBlob.name,
        });
    }
    formdata.append("blood_group", this.state.bloodGroup);
    formdata.append("age", this.state.age);
    formdata.append("experience", this.state.experience);
    formdata.append("lat", this.state.lat);
    formdata.append("lng", this.state.lng);
    formdata.append("bmdc", this.state.bmdc);
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };
    console.log('final analysis',formdata,'and host',this.props.host);

    fetch(this.props.host+"register", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        this.setState({requesting:false});
        if(result.hasOwnProperty('success')){
            ToastAndroid.show("Account registered sucessfully. Wait for approval",ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Failed to create account. Make sure you have created all field properly",ToastAndroid.SHORT);
        }
    })
    .catch(error => {console.log('error', error);this.setState({requesting:false})});
  }

setNewCoordinate = async (placeId) => {
    const GOOGLE_APIKEY = 'AIzaSyBJlwnaNMA01U2K7bUthv4BTs3lygMSyRg';
    let URL = `https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_APIKEY}&place_id=${placeId}`;
    try {
      const resp = await fetch(URL);
      const jsonData = await resp.json();
      const { lat, lng } = jsonData.result.geometry.location;
      console.log(jsonData.result.formatted_address);
      this.setState({lat:lat,lng:lng,location:jsonData.result.formatted_address});
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  }
autocomplete = async (text) => {
    const GOOGLE_APIKEY = 'AIzaSyBJlwnaNMA01U2K7bUthv4BTs3lygMSyRg';
    let URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?&key=' + GOOGLE_APIKEY +
      '&input=' + text + '&radius=1000';
    const resp = await fetch(URL);
    const jsonData = await resp.json();
    this.setState({locations:jsonData.predictions});
  }

  
  componentDidMount = () =>{
    this.getDepartments();
  }



  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.themeColor} />
        <View style={{backgroundColor:'white',width:70,height:70,alignSelf:'center',justifyContent:'center',borderRadius:10,marginTop:windowHeight*0.09}}>
          <Image source={require('../assets/logo.png')} style={{height:50,width:50,alignSelf:'center'}} />
        </View>
        <Text style={{fontSize:20,color:'white',fontWeight:'bold',alignSelf:'center',marginTop:20}}>SHOHOZ SEBA DOCTORS</Text>
        <Text style={{fontSize:15,color:'white',alignSelf:'center',marginTop:4,letterSpacing:2}}>Sign up to continue</Text>
        <View style={styles.cardView}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:100}}>
            <View style={{marginTop:2,justifyContent:'center',alignItems:'center',width:400,marginLeft:-50,marginBottom:20}}>
                {this.state.profilePicture === ''?<Pressable onPress={()=>{this.setDp()}}>
                    <MaterialCommunityIcons name={'account-circle'} size={120} color={colors.themeColor} />
                </Pressable>:<Pressable onPress={()=>{this.setDp()}}>
                    <Image resizeMode='cover' source={{uri:this.state.profilePicture}} style={{height:100,width:100,borderRadius:50,backgroundColor:'white',elevation:10}} />
                </Pressable>}
                <Pressable onPress={()=>{this.setDp()}}>
                    <Text style={{color:colors.themeColor}}>{this.state.profilePicture ===''?'Upload profile picture':'Change profile picture'}</Text>
                </Pressable>
            </View>
            <View style={{marginTop:2,width:'100%',flexDirection:'row'}}>
            <TextInput value={this.state.firstName} onChangeText={(value)=>{this.setState({firstName:value})}} placeholder='First name' style={[styles.inputNumber,{width:'43%',marginRight:10}]} keyboardType='default'/>
            <TextInput value={this.state.lastName} onChangeText={(value)=>{this.setState({lastName:value})}} placeholder='Last name' style={[styles.inputNumber,{width:'43%'}]} keyboardType='default'/>
            </View>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>Email Address</Text>
            <TextInput value={this.state.email} onChangeText={(value)=>{this.setState({email:value})}} placeholder='mail@exmaple.com' style={styles.inputNumber} keyboardType='default'/>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>Phone number</Text>
            <TextInput value={this.state.phoneNumber} onChangeText={(value)=>{this.setState({phoneNumber:value})}} placeholder='+880-1XXXXXXXXXX' style={styles.inputNumber} keyboardType='numeric'/>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>Enter acquired degrees</Text>
            <TextInput value={this.state.degrees} onChangeText={(value)=>{this.setState({degrees:value})}} placeholder='MBBS,FCPS etc' style={styles.inputNumber} keyboardType='default'/>
            <SelectDropdown
                buttonStyle={{backgroundColor:'#fff',borderWidth:1,borderColor:'#ccc',borderRadius:15,marginBottom:15,width:'90%'}}
                data={this.state.departments.map(option => option.name)}
                onSelect={(value, index) => this.handleChange(index)}
                defaultButtonText="Departments"
                showsVerticalScrollIndicator={false}
                renderDropdownIcon={()=>(<Entypo name="chevron-down" size={20} color={'#000'} />)}
            />
            <View style={{marginTop:2,width:'100%',flexDirection:'row'}}>
            <TextInput value={this.state.visit} onChangeText={(value)=>{this.setState({visit:value})}} placeholder='Consultation fee' style={[styles.inputNumber,{width:'43%',marginRight:10}]} keyboardType='numeric'/>
            <TextInput value={this.state.age} onChangeText={(value)=>{this.setState({age:value})}} placeholder='Current age' style={[styles.inputNumber,{width:'43%'}]} keyboardType='numeric'/>
            </View>
            <View style={{marginTop:2,width:'100%',flexDirection:'row'}}>
            <TextInput onFocus={()=>{this.setState({showPicker:true})}} value={this.state.birthDay} onChangeText={(value)=>{this.setState({showPicker:true})}} placeholder='Date of birth' style={[styles.inputNumber,{width:'43%',marginRight:10}]} keyboardType='numeric'/>
            <DatePicker
                modal
                open={this.state.showPicker}
                date={this.state.dob}
                onConfirm={(date) => {
                this.setState({showPicker:false,dob:date,birthDay:date.toISOString()})
                }}
                onCancel={() => {
                this.setState({showPicker:false});
                }}
            />
            <TextInput value={this.state.experience} onChangeText={(value)=>{this.setState({experience:value})}} placeholder=' Experience year' style={[styles.inputNumber,{width:'43%'}]} keyboardType='numeric'/>
            </View>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>Service Location</Text>
            <View>
                <TextInput value={this.state.location} onChangeText={(value)=>{this.setState({location:value});this.autocomplete(value)}} placeholder='Dhaka, Bangladesh ...' style={styles.inputNumber} keyboardType='default'/>
                <FlatList
          data={this.state.locations}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => (<Pressable onPress={() => { this.setNewCoordinate(item.place_id);this.setState({locations:[]}); }} style={{ width: windowWidth - 50, alignSelf: 'center', borderRadius: 10, height: 60, backgroundColor: 'white', padding: 10, elevation: 10, justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{color:'black'}}>{item.description}</Text>
          </Pressable>)}
        />
            </View>
            
            <SelectDropdown
                buttonStyle={{backgroundColor:'#fff',borderWidth:1,borderColor:'#ccc',borderRadius:15,marginBottom:15,width:'90%'}}
                data={this.state.bloodGroups}
                onSelect={(value, index) => this.setState({bloodGroup:value})}
                defaultButtonText="Blood group"
                showsVerticalScrollIndicator={false}
                renderDropdownIcon={()=>(<Entypo name="chevron-down" size={20} color={'#000'} />)}
            />
            <SelectDropdown
                buttonStyle={{backgroundColor:'#fff',borderWidth:1,borderColor:'#ccc',borderRadius:15,marginBottom:15,width:'90%'}}
                data={this.state.genders}
                onSelect={(value, index) => this.setState({gender:value})}
                defaultButtonText="Gender"
                showsVerticalScrollIndicator={false}
                renderDropdownIcon={()=>(<Entypo name="chevron-down" size={20} color={'#000'} />)}
            />
             <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>BMDC Number</Text>
            <TextInput value={this.state.bmdc} onChangeText={(value)=>{this.setState({bmdc:value})}} placeholder='BMDC number' style={styles.inputNumber} keyboardType='default'/>
             <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>Details Number</Text>
            <TextInput value={this.state.description} onChangeText={(value)=>{this.setState({description:value})}} placeholder='Write a short details about you.' style={[styles.inputNumber,{height:180,flexWrap:'wrap'}]} multiline={true} keyboardType='default'  textAlignVertical='top'/>
            <View
                style={{
                    width: '90%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 3,
                    borderWidth:1,
                    borderColor:'#ccc',
                    flexDirection: 'row',
                    marginTop: 5,
                    marginBottom: 10,
                }}>
                <View
                    style={{
                    width: windowWidth - 65 - 100,
                    justifyContent: 'center',
                    paddingLeft: 10,
                    }}>
                    {this.state.mbbsCertificate === '' ? (
                    <Text style={{color: '#000'}}>Upload mbbs certificate</Text>
                    ) : (
                    <Text style={{color:'#000'}}>
                        {this.state.mbbsCertificate.length > 20 ? this.state.mbbsCertificate.slice(0, 20) + '...' : this.state.mbbsCertificate}
                    </Text>
                    )}
                </View>
                <Pressable
                    onPress={()=>{this.upload()}}
                    style={{
                    width: 100,
                    padding: 15,
                    backgroundColor: 'green',
                    flexDirection: 'row',
                    borderTopRightRadius: 3,
                    borderBottomRightRadius: 3,
                    }}>
                    <AntDesign name="cloudupload" color={'#fff'} size={20} />
                    <Text style={{color: '#fff', marginLeft: 10}}>Upload</Text>
                </Pressable>
                </View>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20,width:'90%',fontSize:10,color:'#ccc'}}>If you have not completed FCPS then ignore this.</Text>
            <View
                style={{
                    width: '90%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 3,
                    borderWidth:1,
                    borderColor:'#ccc',
                    flexDirection: 'row',
                    marginTop: 5,
                    marginBottom: 10,
                }}>
                <View
                    style={{
                    width: windowWidth - 65 - 100,
                    justifyContent: 'center',
                    paddingLeft: 10,
                    }}>
                    {this.state.fcpsCertificate === '' ? (
                    <Text style={{color: '#000'}}>Upload fcps certificate</Text>
                    ) : (
                    <Text style={{color:'#000'}}>
                        {this.state.fcpsCertificate.length > 20 ? this.state.fcpsCertificate.slice(0, 20) + '...' : this.state.fcpsCertificate}
                    </Text>
                    )}
                </View>
                <Pressable
                    onPress={()=>{this.uploadFcps()}}
                    style={{
                    width: 100,
                    padding: 15,
                    backgroundColor: 'green',
                    flexDirection: 'row',
                    borderTopRightRadius: 3,
                    borderBottomRightRadius: 3,
                    }}>
                    <AntDesign name="cloudupload" color={'#fff'} size={20} />
                    <Text style={{color: '#fff', marginLeft: 10}}>Upload</Text>
                </Pressable>
                </View>
            <TouchableOpacity
            onPress={()=>{
            this.register();
            }}
            style={{width:'90%',elevation:10,padding:10,marginTop:10,alignItems:'center',borderRadius:10,backgroundColor:colors.themeColor}}>
            {!this.state.requesting?<Text style={{color:'white'}}>REGISTER</Text>:<ActivityIndicator color={'white'} size={'small'} />}
            </TouchableOpacity>
            <View style={{marginTop:30,justifyContent:'center',alignItems:'center',width:400,marginLeft:-50,flexDirection:'row'}}>
             <Text style={{fontWeight:'bold'}}>Already have account? </Text><TouchableOpacity
             onPress={()=>{ this.props.navigation.navigate('Login');}}
             style={{marginBottom:0,paddingBottom:0}}><Text style={{color:colors.themeColor,fontWeight:'bold',marginBottom:0}}>Login</Text></TouchableOpacity>
          </View>
            </ScrollView>
        </View>
      </View>
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

export default connect(mapStateToProps,mapDispatchToProps)(Register);
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:colors.themeColor},
  cardView:{position:'absolute',bottom:0,left:0,right:0,width:'100%',height:windowHeight*0.7,backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20,elevation:10,paddingLeft:30,paddingTop:40},
  inputNumber:{width:'90%',padding:5,borderWidth:2,borderColor:'#ccc',borderRadius:10,marginBottom:20,paddingLeft:15},
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 2,
    backgroundColor:'#87419a',
    color:'white'
    // borderBottomWidth: 2,
  },

  underlineStyleHighLighted: {
    borderColor: "#282829",
  },
})