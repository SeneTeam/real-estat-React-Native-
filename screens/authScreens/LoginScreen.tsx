import { styles } from './styles.js';
import { Image, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import OutlineInput from 'react-native-outline-input';
import { Text } from '../../components/Themed';
import { TextInput } from 'react-native-paper';
import { Auth } from 'aws-amplify';
import { FancyAlert, LoadingIndicator } from 'react-native-expo-fancy-alerts';

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const Login = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isseen, setisseen] = useState(true);

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
            setTimeout(() => { 
                
                toggleAlert(false)
                setEmail("")
                setPassword("")
                navigation.navigate('Root')
            }, 3000)
            console.warn(user)
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
             <FancyAlert
        onRequestClose={()=>toggleAlert(false)}
        visible={visible}
        icon={<View style={[styles.alert, { backgroundColor: error ? "red" : "green" }]}><Text style={{ color: "white" }}>{error ? "✘" : "✔"}</Text></View>}
        style={{ backgroundColor:error? '#FF737F' :'#7BC67E'}}
      >
        <Text style={[styles.atext]}> {error ? "Enter email or password is incorrect" : "User login successfully"}</Text>
      
      </FancyAlert>
            <View >
                <TouchableOpacity
                    onPress={() => navigation.goBack()} >
                    <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Welcome Back!</Text>
                </View>
            </View>
            <View style={styles.loginForm}>
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
                <Text style={{ fontSize: 12, color: 'red', marginLeft: '5%' }}>&nbsp;{email_error}</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput
                    autoComplete={true}
                    mode="outlined"
                    label="Password"
                    error={passworderror}
                    secureTextEntry={isseen}
                    value={password}
                    onChangeText={text => {
                        setPassword_error("")
                        setpassworderror(false)
                        setPassword(text)}}
                    right={<TextInput.Icon onPress={()=>setisseen(!isseen)} name="eye" />}
                />
                <Text style={{ fontSize: 12, color: 'red', marginLeft: '5%' }}>&nbsp;{password_error}</Text>
            </View>
            <View style={styles.loginForm}>
                <TouchableOpacity
                    onPress={()=>{
                        if(email == ""){
                            setusererror(true)
                            setEmail_error("Username cannot be empty")
                        }else if(password == ""){
                            setpassworderror(true)
                            setPassword_error("Password cannot be empty")
                        }else{
                            signIn()
                        }
                       
                    }}
                >
                    <Text style={styles.btnStyle} >Log in</Text>
                </TouchableOpacity>
            </View>
            <LoadingIndicator visible={loader} />
            {/* </View> */}
            {/* <View style={{ flex: 1 }}> */}
            <View style={styles.loginVerticalPart}>
                <View style={styles.loginVerticalPart}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                    >
                        <Text style={styles.subText} >Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginVerticalPart}>
                    <Text style={styles.loginTitle}>Don't have an account?&nbsp;
                        <Text onPress={()=>navigation.navigate('Register')} style={styles.login_btnStyle}>Sign Up</Text>
                    </Text>
                </View>
            </View>
            {/* </View> */}






        </View>
    );
};
export default Login
