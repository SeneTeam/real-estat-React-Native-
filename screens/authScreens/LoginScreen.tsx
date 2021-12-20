import { styles } from './styles.js';
import { Image, View, TouchableOpacity } from 'react-native';
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
        <View style={styles.loginWrap}>
            <View >
                <TouchableOpacity
                    onPress={() => navigation.goBack()} >
                    <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Text style={styles.title}>Welcome Back!</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View >
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
                <View >
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
                <View style={{ width: '100%', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Root', { name: 'Jane' })}
                    >
                        <Text style={styles.btnStyle} >Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                        >
                            <Text style={styles.subText} >forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.loginTitle}>Don't have an account?&nbsp;
                            <Text onPress={onPress} style={styles.login_btnStyle}>Sign Up</Text>
                        </Text>
                    </View>
                </View>
            </View>






        </View>
    );
};
export default Login
