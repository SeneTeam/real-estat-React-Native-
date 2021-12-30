import { styles } from '../../screens/authScreens/styles.js';
import { Image, View, TouchableOpacity, StyleSheet, Alert, ToastAndroid, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text } from '../../components/Themed';
import { SafeAreaView, } from 'react-native';
import Auth from '@aws-amplify/auth';

import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const stylees = StyleSheet.create({
	root: { flex: 1, padding: 20 },
	title: { textAlign: 'center', fontSize: 30 },
	codeFieldRoot: { marginTop: 20 },
	cell: {
		color: '#cacaca',
		width: 40,
		height: 55,
		lineHeight: 38,
		fontSize: 24,
		borderWidth: 2,
		borderColor: '#00000030',
		textAlign: 'center',
		borderRadius: 12
	},
	focusCell: {
		borderColor: '#000',
	},
});

const CELL_COUNT = 6;

const EnterCode = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
	const [value, setValue] = useState('');
	const [resendVisible, setResendVisible] = useState(true);
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});

	useEffect(() => {
		if (value.length == 6) {
			const { username, password, screen } = route.params;

			if (screen == 'otp-verification') {
				Auth.confirmSignUp(username, value).then(() => {
					Auth.signIn(username, password)
						.then(async (user) => {
							navigation.navigate('Root', { name: username });
						})
						.catch((err) => {
							navigation.navigate('Login');
						});
				}).catch((err) => {
					if (!err.message) {
						if (Platform.OS == 'android') ToastAndroid.showWithGravity('Something went wrong, please contact support!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
					} else {
						Alert.alert(err.message);
						if (Platform.OS == 'android') ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
					}
				});
			} else if (screen == 'forgot-password') {
				navigation.navigate('CreatePassword', { username, otp: value });
			} else {
				navigation.navigate('Welcome');
			}
		}
	}, [value]);

	const onResend = () => {
		const { username } = route.params;
		setResendVisible(false);
		Auth.resendSignUp(username).then(() => {
			// Alert.alert('Otp Resent');
		}).catch((err) => {
			if (!err.message) {
				if (Platform.OS == 'android') ToastAndroid.showWithGravity('Something went wrong, please contact support!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
			} else {
				if (Platform.OS == 'android') ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
			}
		});
		setTimeout(()=>{
			setResendVisible(true);
		}, 30000);
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
					<Text style={styles.title}>Check email</Text>
				</View>
				<View style={{ alignItems: 'center', }}>
					<Text style={styles.subTextForgot}>Enter the code that we sent to your email</Text>
				</View>
			</View>
			<View style={styles.subTextView1}>
				<SafeAreaView style={stylees.root}>
					<CodeField
						ref={ref}
						{...props}
						value={value}
						onChangeText={setValue}
						cellCount={CELL_COUNT}
						rootStyle={stylees.codeFieldRoot}
						keyboardType="number-pad"
						textContentType="oneTimeCode"
						renderCell={({ index, symbol, isFocused }) => (
							<Text
								key={index}
								style={[stylees.cell, isFocused && stylees.focusCell]}
								onLayout={getCellOnLayoutHandler(index)}>
								{symbol || (isFocused ? <Cursor /> : null)}
							</Text>
						)}
					/>
				</SafeAreaView>
			</View>

			{
				resendVisible
				?	<View style={{ flex: 1, padding: '7%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
						<TouchableOpacity onPress={onResend}>
							<Text style={{...styles.subText, color: '#000', fontWeight: '700'}}>Resend Code</Text>
						</TouchableOpacity>
					</View>
				: <Text style={{...styles.subText, alignSelf: 'center'}}>Please wait for next 30 seconds to demand code again !</Text>
			}
			<View style={{ display: 'flex', alignItems: 'center', flex: 2 }}></View>
		</View>
	);
};

export default EnterCode;
