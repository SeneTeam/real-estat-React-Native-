import { styles } from '../../screens/authScreens/styles.js';
import { Image, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import OutlineInput from 'react-native-outline-input';
import { Text } from '../../components/Themed';

const ForgotPass = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPress = () => {
        navigation.navigate('Register')
    }
    return (
        <View style={styles.loginPageStyle}>
            {/* <View style={styles.loginHeader}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()} >
                    <Image style={styles.buttonImage} source={require('./assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView_title}>
                <Text style={styles.title}>Forgot password</Text>
            </View>
            <View style={styles.subTextView}>
                <Text style={styles.subText}>Please enter your email specified during registration</Text>
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
            <View style={{ padding: '7%', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EnterCode', { name: 'Jane' })}
                >
                    <Text style={styles.btnStyle} >SEND</Text>
                </TouchableOpacity>
            </View> */}
            forgot
        </View>
    );
};
export default ForgotPass
