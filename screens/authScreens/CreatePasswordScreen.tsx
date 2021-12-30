import { styles } from '../../screens/authScreens/styles.js';
import { View, TouchableOpacity, ToastAndroid, ActivityIndicator, Platform } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { Text } from '../../components/Themed';
import Auth from '@aws-amplify/auth';

const CreatePassword = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
	const [checked, setChecked] = useState(false);
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [showPassword, setShowPassword] = useState(true);
	const [buttonLoader, setButtonLoader] = useState(false);
	const [password_error, setPassword_error] = useState('');
	const [newPassword_error, setNewPassword_error] = useState('');

	const onSetPassword = () => {
		const { username, otp } = route.params;
		if (password) {
			if (newPassword) {
				if (password === newPassword) {
					setButtonLoader(true);
					Auth.forgotPasswordSubmit(username, otp, newPassword)
						.then(() => {
							setButtonLoader(false);
							navigation.navigate('Login');
						})
						.catch((err) => {
							setButtonLoader(false);
							if (err.message) {
								if (Platform.OS == 'android') ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
							}
						});
				} else {
					if (Platform.OS == 'android') ToastAndroid.showWithGravity('Password Mismatch', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
				}
			} else {
				setNewPassword_error('Password Required !')
			}
		} else {
			setPassword_error("Password Required !")
		}
	}

	function handleInput(text: string, fieldType: string) {
		if (fieldType === "newPassword") {
			setNewPassword(text)
			setNewPassword_error('')
		} else if (fieldType === "password") {
			setPassword(text)
			setPassword_error('')
		}
	}

	return (
		<View style={styles.loginWrap}>
			<View >
				<View style={{ width: 50, height: 50, margin: 25 }}></View>
			</View>
			<View style={{ marginBottom: 15 }}>
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.title}>Create New Password</Text>
				</View>
				<View style={{ alignItems: 'center', }}>
					<Text style={styles.subTextForgot}>New Password should be different from previous password!</Text>
				</View>
			</View>
			<View style={styles.loginForm}>
				<TextInput
					theme={{
						roundness: 16,
					}}
					underlineColorAndroid="transparent"
					outlineColor={password_error ? "#B00020" : "transparent"}
					activeOutlineColor={password_error ? "#B00020" : "#30C0E9"}
					value={password}
					onChangeText={text => { handleInput(text, 'password') }}
					label="Password"
					secureTextEntry={showPassword ? true : false}
					autoComplete={true}
					mode="outlined"
					error={false}
					right={<TextInput.Icon onPress={() => { setShowPassword(!showPassword) }} name="eye" />}
				/>
				<Text style={styles.err_txt}>{password_error}</Text>
				{/* <HelperText type="error" visible={!!password_error}>{password_error}</HelperText> */}
			</View>
			<View style={styles.loginForm}>
				<TextInput
					theme={{
						roundness: 16,
					}}
					underlineColorAndroid="transparent"
					outlineColor={newPassword_error ? "#B00020" : "transparent"}
					activeOutlineColor={newPassword_error ? "#B00020" : "#30C0E9"}
					value={newPassword}
					onChangeText={text => { handleInput(text, 'newPassword') }}
					label="New Password"
					secureTextEntry={showPassword ? true : false}
					autoComplete={true}
					mode="outlined"
					error={false}
					right={<TextInput.Icon onPress={() => { setShowPassword(!showPassword) }} name="eye" />}
				/>
				<Text style={styles.err_txt}>{newPassword_error}</Text>
				{/* <HelperText type="error" visible={!!newPassword_error}>{newPassword_error}</HelperText> */}
			</View>
			<View style={styles.subTextView}>
				<Text style={styles.subText}>Minimum of  characters, with upper and lowercase and a number, or a symbol.</Text>
			</View>
			<CheckBox
				// outlineColor="transparent"
				title='I have read the Privace Policy'
				checked={checked}
				onPress={() => {
					setChecked(!checked);
				}}
			/>
			<View style={{ padding: '7%', width: '100%', justifyContent: 'center' }}>
				{
					buttonLoader
						? <TouchableOpacity
							disabled
							onPress={() => { }}
						>
							<ActivityIndicator style={styles.btnStyle} size="small" color="#fff" />
						</TouchableOpacity>
						: <TouchableOpacity
							disabled={checked ? false : true}
							onPress={onSetPassword}
						>
							<Text style={styles.btnStyle} >GET STARTED</Text>
						</TouchableOpacity>
				}
			</View>

		</View>
	);
};

export default CreatePassword;
