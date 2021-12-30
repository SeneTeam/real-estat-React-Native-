import { styles } from './styles.js';
import { Image, View, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, ActivityIndicator, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text } from '../../components/Themed';
import { TextInput, HelperText } from 'react-native-paper';
import Auth from '@aws-amplify/auth';

const Login = ({ navigation }: { navigation: NavigationProp<any>, route: any }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(true);
	const [buttonLoader, setButtonLoader] = useState(false);
	const [username_error, setUsername_error] = useState('');
	const [password_error, setPassword_error] = useState('');
	const onPress = () => {
		navigation.navigate('Register')
	}

	function userSignin() {
		if (username) {
			if (password) {
				setButtonLoader(true);
				Auth.signIn(username, password)
					.then(async (user) => {
						setButtonLoader(false);
						navigation.navigate('Root', { name: username });
					})
					.catch((err) => {
						if (!err.message) {
							setButtonLoader(false);
							if (Platform.OS == 'android') ToastAndroid.showWithGravity(err, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
						} else {
							if (err.code === 'UserNotConfirmedException') {
								setButtonLoader(false);
								if (Platform.OS == 'android') ToastAndroid.showWithGravity('User Not Confirmed', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
								navigation.navigate('EnterCode', { username, password, screen: 'otp-verification' });
							}
							if (err.message) {
								setButtonLoader(false);
								if (Platform.OS == 'android') ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
							}
						}
					});
			} else {
				setPassword_error('Password Required');
			}
		} else {
			setUsername_error('User Name Required');
		}
	}

	function handleInput(text: string, fieldType: string) {
		if (fieldType === "name") {
			setUsername(text)
			setUsername_error('')
		} else if (fieldType === "password") {
			setPassword(text)
			setPassword_error('')
		}
	}

	return (
		<View style={styles.loginWrap}>
			<KeyboardAvoidingView style={styles.containerDiv}>
				<View >
					<TouchableOpacity
						onPress={() => navigation.goBack()} >
						<Image style={{ width: 50, height: 50, marginVertical: 25 }} source={require('../../assets/icons/backBtn.png')} />
					</TouchableOpacity>
				</View>
				<View style={{ display: 'flex', alignItems: 'center', flex: 1 }}></View>
				<View>
					<View style={{ alignItems: 'center' }}>
						<Text style={styles.title}>Welcome Back!</Text>
					</View>
				</View>
				<View style={{ display: 'flex', alignItems: 'center', flex: 1 }}></View>
				<View>
					<View style={styles.loginForm}>
						<TextInput
							theme={{
								roundness: 16,
							}}
							name="username"
							accessibilityLabel='username'
							underlineColorAndroid="transparent"
							outlineColor={username_error ? "#B00020" : "transparent"}
							activeOutlineColor={username_error ? "#B00020" : "#30C0E9"}
							mode="outlined"
							label="Username"
							value={username}
							onChangeText={text => { handleInput(text, 'name') }}
							error={false}
						/>
						<Text style={styles.err_txt}>{username_error}</Text>
						{/* <HelperText type="error" visible={!!username_error}>{username_error}</HelperText> */}
					</View>
					<View style={styles.loginForm}>
						<TextInput
							theme={{
								roundness: 16,
							}}
							name="password"
							accessibilityLabel='password'
							underlineColorAndroid="transparent"
							outlineColor={password_error ? "#B00020" : "transparent"}
							activeOutlineColor={password_error ? "#B00020" : "#30C0E9"}
							mode="outlined"
							label="Password"
							secureTextEntry={showPassword ? true : false}
							value={password}
							onChangeText={text => { handleInput(text, 'password') }}
							right={<TextInput.Icon onPress={() => { setShowPassword(!showPassword) }} name="eye" />}
						/>
						<Text style={styles.err_txt}>{password_error}</Text>
						{/* <HelperText type="error" visible={password_error}>{password_error}</HelperText> */}
					</View>
					<View style={styles.loginForm}>
						{
							buttonLoader
								? <TouchableOpacity
									disabled
									onPress={() => { }}
								>
									<ActivityIndicator style={styles.btnStyle} size="small" color="#fff" />
								</TouchableOpacity>
								: <TouchableOpacity
									onPress={userSignin}
								>
									<Text style={styles.btnStyle} accessibilityRole='button' accessibilityLabel='login'>Log in</Text>
								</TouchableOpacity>
						}
					</View>
				</View>
				<View style={{ display: 'flex', alignItems: 'center', flex: 1 }}></View>
				<View style={styles.loginVerticalPart}>
					<TouchableOpacity
						onPress={() => navigation.navigate('ForgotPass')}
					>
						<Text style={styles.subText} >Forgot Password</Text>
					</TouchableOpacity>
				</View>
				<View style={{ display: 'flex', alignItems: 'center', flex: 1 }}></View>
				<View style={styles.loginVerticalPart}>
					<View style={styles.loginVerticalPart}>
						<Text style={styles.loginTitle}>Don't have an account?&nbsp;
							<Text onPress={onPress} style={styles.login_btnStyle} accessibilityLabel='signup' accessibilityRole='button'>Sign Up</Text>
						</Text>
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};
export default Login
