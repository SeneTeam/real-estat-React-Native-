// import { styles } from './styles.js';
import { Image, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import OutlineInput from 'react-native-outline-input';
import { Text } from '../../../components/Themed';
import { TextInput } from 'react-native-paper';
import { Auth } from 'aws-amplify';
import FancyAlert from '../../../components/FancyAlert.js';
import LoadingIndicator from '../../../components/LoadingIndicator.js';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const UserScreen = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isseen, setisseen] = useState(true);
    const win = Dimensions.get('window');
    const [email_error, setEmail_error] = useState('');
    const [password_error, setPassword_error] = useState('');
    const [usererror, setusererror] = useState(false);
    const [passworderror, setpassworderror] = useState(false);
    const [loader, setLoader] = useState(false)
    const [error, seterror] = useState(false)
    const [visible, setVisible] = React.useState(false);
    const toggleAlert = React.useCallback((value) => {
      setVisible(value);
    }, [visible]);

    

    const signIn = async() => {
        setLoader(true)
        try {
            const user = await Auth.signIn(email, password);
            setLoader(false)
            seterror(false)
            toggleAlert(true)
            setTimeout(async() => { 
                
                toggleAlert(false)
                setEmail("")
                setPassword("")
                let value =  user.signInUserSession.accessToken.jwtToken
                try {
                    await AsyncStorage.setItem('token',value)
                  } catch (e) {
                    console.warn(e)
                  }
               
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Root'}],
                  });
            }, 3000)
            console.warn(user.signInUserSession.accessToken.jwtToken)
        } catch (error) {
            setLoader(false)
            seterror(true)
            toggleAlert(true)
            setTimeout(() => { toggleAlert(false)}, 3000)
            console.log('error signing in', error);
        }
    }

    return (
        <View style={styles.loginWrap}>
            <View style={{flex:2, flexDirection:'row'}}>
              <Text style={styles.title}>Profile</Text>
              <Image style={{width:15,height:15,marginTop:'auto',marginBottom:10,marginLeft:'auto',marginRight:30}} source={require('../../../assets/icons/Vector_(4).png')}/>
            </View>
            <View style={{flex:2,width:win.width-40,marginLeft:'auto',marginRight:'auto'}}>
                <TextInput
                    autoComplete={true}
                    mode="outlined"
                    label="Username"
                    value={email}
                   
                    onChangeText={text =>{

                        setEmail_error("")
                        setusererror(false)
                        setEmail(text)}}
                    error={usererror}
                />
            </View>
            <View style={{flex:2,width:win.width-40,marginLeft:'auto',marginRight:'auto'}}>
                <TextInput
                    autoComplete={true}
                    mode="outlined"
                    label="Email"
                    error={passworderror}
                    secureTextEntry={isseen}
                    value={password}
                    onChangeText={text => {
                        setPassword_error("")
                        setpassworderror(false)
                        setPassword(text)}}
                    // right={<TextInput.Icon onPress={()=>setisseen(!isseen)} name="eye" />}
                />
            </View>
            <View style={styles.loginVerticalPart}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                >
                    <Text style={styles.subText} >Change Password</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:4,width:win.width-40,marginLeft:'auto',marginRight:'auto'}}>
                <TouchableOpacity style={{flexDirection:'row',flex:1}}
                  onPress={() => navigation.navigate('Questionnaire')}
                >
                    <Text style={styles.btnStyle} >Questionnaire</Text>
                    <Text style={styles.btnStyle1} >56%</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:90}}>

            </View>
            
          </View>
    );
};
export default UserScreen

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  
  btnStyle: {
    backgroundColor: '#30C0E9',
    padding: 15,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    textAlign: 'left',
    color: 'white',
    fontSize:28,
    fontWeight:'500',
    flex:8,
    height:70
  }, 
  btnStyle1: {
    backgroundColor: '#30C0E9',
    padding: 15,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    textAlign: 'right',
    color: 'white',
    fontSize:28,
    fontWeight:'500',
    flex:4,
    height:70
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 'auto',
    marginLeft:20
  },
  subText: {
    fontSize: 16,
    color: '#ACB7C2',
    marginTop: '2%',
    marginBottom: '2%',
  },
  loginWrap: {
    flex: 1,
    backgroundColor: 'white'
  },
  loginVerticalPart: {
    alignItems: 'center',
    flex: 2,
    display: 'flex',
    justifyContent: 'center'
  },
});