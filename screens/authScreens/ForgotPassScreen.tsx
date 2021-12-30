import { styles } from '../../screens/authScreens/styles.js';
import { Image, View, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text } from '../../components/Themed';
import { TextInput, HelperText } from 'react-native-paper';
import Auth from '@aws-amplify/auth';

const ForgotPass = ({ navigation }: { navigation: NavigationProp<any>, route: any }) => {
	const [username, setUsername] = useState('');
	const [username_error, setUsernameError] = useState('');
	const [buttonLoader, setButtonLoader] = useState(false);

	function handleInput(text: string) {
		setUsername(text)
		setUsernameError('')
	}

	const onForgot = () => {
		if (username) {
			setButtonLoader(true);
			Auth.forgotPassword(username)
				.then(() => {
					setButtonLoader(false);
					navigation.navigate('EnterCode', { username, screen: 'forgot-password' });
				})
				.catch((err) => {
					if (err.message) {
						setButtonLoader(false);
						ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
					}
				});
		} else {
			setUsernameError('User Name Required');
		}
	}
	return (
		<View style={styles.loginWrap}>
			<View >
				<TouchableOpacity
					onPress={() => navigation.goBack()} >
					<Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />
				</TouchableOpacity>
			</View>
			<View style={{ display: 'flex', alignItems: 'center', flex: 1 }}></View>
			<View style={{ marginBottom: 15 }}>
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.title}>Forgot password</Text>
				</View>
				<View style={{ alignItems: 'center', }}>
					<Text style={styles.subTextForgot}>Please enter your User Name specified during registration</Text>
				</View>
			</View>

			<View style={styles.loginForm}>
				<TextInput
					theme={{
						roundness: 16,
					}}
					underlineColorAndroid="transparent"
					outlineColor={username_error ? "#B00020" : "transparent"}
					activeOutlineColor={username_error ? "#B00020" : "#30C0E9"}
					label="User Name"
					autoComplete={true}
					mode="outlined"
					value={username}
					onChangeText={text => handleInput(text)}
					error={false}
				/>
				<Text style={styles.err_txt}>{username_error}</Text>
				{/* <HelperText type="error" visible={username_error}>{username_error}</HelperText> */}
			</View>
			<View style={{ display: 'flex', alignItems: 'center', flex: 1 }}></View>
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
							disabled={username ? false : true}
							onPress={onForgot}
						>
							<Text style={styles.btnStyle} >Send</Text>
						</TouchableOpacity>
				}
			</View>
			<View style={{ display: 'flex', alignItems: 'center', flex: 3 }}></View>
		</View>
	);
};
export default ForgotPass;
