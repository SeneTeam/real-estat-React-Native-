import { styles } from '../../screens/authScreens/styles.js';
import { Image, View, TouchableOpacity,  StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import OutlineInput from 'react-native-outline-input';
import { Auth } from 'aws-amplify';
import { Text } from '../../components/Themed';
import { TextInput } from 'react-native-paper';
import { FancyAlert,LoadingIndicator } from 'react-native-expo-fancy-alerts';
const ForgotPass = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usererror, setusererror] = useState(false)
    const [loader, setLoader] = useState(false)
    const [error, seterror] = useState(false)
    const [visible, setVisible] = React.useState(false);
    const toggleAlert = React.useCallback((value) => {
      setVisible(value);
    }, [visible]);


    const onPress = async() => {
        Auth.forgotPassword(username)
        .then(data =>
           {
            seterror(false)   
            toggleAlert(true)
            setTimeout(() => { 
                toggleAlert(false)
                navigation.navigate('EnterCode', { comefrom: 'forgot',name:username })
            }, 3000)
            })
        .catch(err => console.log(err))
        
    }
    return (
        <View style={styles.loginWrap}>
              <FancyAlert
        onRequestClose={()=>toggleAlert(false)}
        visible={visible}
        icon={<View style={[styles.alert, { backgroundColor: error ? "red" : "green" }]}><Text style={{ color: "white" }}>{error ? "✘" : "✔"}</Text></View>}
        style={{ backgroundColor:error? '#FF737F' :'#7BC67E'}}
      >
        <Text style={[styles.atext]}> {error ? "something wrong" : "otp send"}</Text>
      
      </FancyAlert>
      <LoadingIndicator visible={loader} />
            <View >
                <TouchableOpacity
                    onPress={() => navigation.goBack()} >
                    <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>

            <View style={{marginBottom:15}}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.title}>Forgot password</Text>
                </View>
                <View style={{alignItems:'center',}}>
                    <Text style={styles.subTextForgot}>Please enter your username specified during registration</Text>
                </View>
            </View>

            <View style={styles.loginForm}>
                
                  <TextInput
                    autoComplete={true}
                    mode="outlined"
                    value={username}
                    onChangeText={(e: string) => {
                        setusererror(false)
                        setUsername(e)}}
                    label="Username"
                    error={usererror}
                />
            </View>
            <View style={{ padding: '7%', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() =>{
                        if(username == ""){
                           setusererror(true)
                        }else{
                            onPress()
                        }
                        }}
                >
                    <Text style={styles.btnStyle} >SEND</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default ForgotPass
