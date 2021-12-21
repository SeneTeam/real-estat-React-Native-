import { styles } from './styles.js';
import { Image, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import OutlineInput from 'react-native-outline-input';
import { Text } from '../../components/Themed';
import { TextInput } from 'react-native-paper';

const Login = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [email_error, setEmail_error] = useState('');
    const [password_error, setPassword_error] = useState('');
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
            <View style={{ marginBottom: 15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Welcome Back!</Text>
                </View>
            </View>
            <View style={styles.loginForm}>
                <TextInput
                    autoComplete={true}
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    error={false}
                />
                <Text style={{ fontSize: 12, color: 'red', marginLeft: '5%' }}>&nbsp;{email_error}</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput
                    autoComplete={true}
                    mode="outlined"
                    label="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                    right={<TextInput.Icon name="eye" />}
                />
                <Text style={{ fontSize: 12, color: 'red', marginLeft: '5%' }}>&nbsp;{email_error}</Text>
            </View>
            <View style={styles.loginForm}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Root', { name: 'Jane' })}
                >
                    <Text style={styles.btnStyle} >Log in</Text>
                </TouchableOpacity>
            </View>
            {/* </View> */}
            {/* <View style={{ flex: 1 }}> */}
            <View style={styles.loginVerticalPart}>
                <View style={styles.loginVerticalPart}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                    >
                        <Text style={styles.subText} >forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginVerticalPart}>
                    <Text style={styles.loginTitle}>Don't have an account?&nbsp;
                        <Text onPress={onPress} style={styles.login_btnStyle}>Sign Up</Text>
                    </Text>
                </View>
            </View>
            {/* </View> */}






        </View>
    );
};
export default Login
