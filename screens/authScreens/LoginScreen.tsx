import { styles } from './styles.js';
import { Image, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import OutlineInput from 'react-native-outline-input';
import { Text } from '../../components/Themed';

const Login = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPress = () => {
        navigation.navigate('Register')
    }
    return (
        <View style={styles.loginPageStyle}>
            <View style={styles.loginHeader}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()} >
                    <Image style={styles.buttonImage} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView_title}>
                <Text style={styles.title}>Welcome Back!</Text>
            </View>
            <View style={styles.loginForm_input}>
                <OutlineInput
                    value={email}
                    onChangeText={(e: string) => setEmail(e)}
                    label="UserEmail"
                    activeValueColor="#6c63fe"
                    activeBorderColor="#6c63fe"
                    activeLabelColor="#6c63fe"
                    passiveBorderColor="#30c0e9"
                    passiveLabelColor="#bbb7ff"
                    passiveValueColor="#30c0e9"
                />
            </View>
            <View style={styles.loginForm_input}>
                <OutlineInput
                    value={password}
                    onChangeText={(e: string) => setPassword(e)}
                    label="Password"
                    activeValueColor="#6c63fe"
                    activeBorderColor="#6c63fe"
                    activeLabelColor="#6c63fe"
                    passiveBorderColor="#30c0e9"
                    passiveLabelColor="#bbb7ff"
                    passiveValueColor="#30c0e9"
                />
            </View>
            <View style={{ padding: '7%', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Root', { name: 'Jane' })}
                >
                    <Text style={styles.btnStyle} >Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView1}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                >
                    <Text style={styles.subText} >forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView}>
                <Text style={styles.loginTitle}>Don't have an account?&nbsp;
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.login_btnStyle}>Sign Up</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
};
export default Login

const style = StyleSheet.create({
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})
