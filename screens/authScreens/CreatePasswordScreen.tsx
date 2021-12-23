import { styles } from '../../screens/authScreens/styles.js';
import { View, TouchableOpacity, } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import { Text } from '../../components/Themed';
import { FancyAlert, LoadingIndicator } from 'react-native-expo-fancy-alerts';
import { TextInput } from 'react-native-paper';


const CreatePassword = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {

    const [checked, setChecked] = useState(false);
    const [newpassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false)
    const [error, seterror] = useState(false)
    const [errorpassword, seterrorpassword] = useState(false)
    const [visible, setVisible] = React.useState(false);

    const toggleAlert = React.useCallback((value) => {
        setVisible(value);
    }, [visible]);


    const onPress = () => {
        setLoader(true)
        Auth.forgotPasswordSubmit(route.params.user, route.params.otp, newpassword)
            .then(data => {
                setLoader(false)
                seterror(false)
                toggleAlert(true)
                setTimeout(() => {
                    toggleAlert(false)
                    navigation.navigate('Login')
                }, 3000)
                console.log(data)
            })
            .catch(err => {
                setLoader(false)
                seterror(true)
                toggleAlert(true)
                setTimeout(() => {
                    toggleAlert(false)

                }, 3000)
                console.log(err)
            });
    }
    return (
        <View style={styles.loginWrap}>
            <FancyAlert
                onRequestClose={() => toggleAlert(false)}
                visible={visible}
                icon={<View style={[styles.alert, { backgroundColor: error ? "red" : "green" }]}><Text style={{ color: "white" }}>{error ? "✘" : "✔"}</Text></View>}
                style={{ backgroundColor: error ? '#FF737F' : '#7BC67E' }}

            >
                <Text style={[styles.atext]}> {error ? "Password not matched" : "Password changed successfully"}</Text>

            </FancyAlert>
            <View >
                <View style={{ width: 50, height: 50, margin: 25 }}></View>
            </View>
            <View style={{ marginBottom: 15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Create new password</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Text style={[styles.subTextForgot, { width: '70%' }]}>You new password must be different from previous used passwords</Text>
                </View>
            </View>
            <View style={styles.loginForm}>
                <TextInput
                    autoComplete={true}
                    mode="outlined"
                    secureTextEntry
                    value={password}
                    onChangeText={(e: string) => {
                        seterrorpassword(false)
                        setPassword(e)}}
                    label="Password"
                    error={false}
                />

            </View>
            <View style={styles.loginForm}>

                <TextInput
                    autoComplete={true}
                    mode="outlined"
                    secureTextEntry
                    value={newpassword}
                    onChangeText={(e: string) => {
                        seterrorpassword(false)
                        setNewPassword(e)}}
                    label="New Password"
                    error={false}
                />
            </View>
            <View style={styles.subTextView}>
            {errorpassword ? <Text style={[styles.subText,{color:'red'}]}>Please check password and confirm password are not same</Text>:null}
                <Text style={styles.subText}>Minimum of  characters, with upper and lowercase and a number, or a symbol.</Text>
            </View>
            <CheckBox
                title='I have read the Privace Policy'
                checked={checked}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
            <View style={{ padding: '7%', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity
               
                    onPress={()=>{
                        if(password != newpassword || password.length <= 7) {
                            seterrorpassword(true)
                        }else{
                            onPress()}}
                        }
                        
                >
                    <Text style={styles.btnStyle} >Changes Password</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default CreatePassword
