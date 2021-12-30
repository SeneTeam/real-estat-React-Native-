import React, { useEffect, useState } from 'react';
import { styles } from './styles'
import { Image, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Text } from '../../components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from '@aws-amplify/auth';

const Welcome = ({ navigation }: { navigation: NavigationProp<any> }) => {

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then(async (user) => {
				if (user) {
					const jwtToken = user.signInUserSession.accessToken.jwtToken;
					await AsyncStorage.setItem('@authtoken', jwtToken);
					navigation.navigate('Root', { name: user.username });
				}
			}).catch(() => {
				// console.log('err signing in');
			});
	}, []);

	const onPress = () => {
		navigation.navigate('Login')
	}

	return (
		<View style={styles.container}>
			<View style={styles.imageWrap}>
				<Image source={require('../../assets/images/welcome.png')} style={styles.image} />
			</View>
			<View style={styles.textView}>
				<View style={styles.subTextView}>
					<Text style={styles.title}>Find Your Best Home</Text>
					<Text style={styles.subText}>Lolaux is your assistant, provides many suggestions of all kind of real estate based on the our questionnaire.</Text>
				</View>
				<View style={styles.btnView}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Login')}
						style={{ ...styles.buttonContainer, width: '100%', }}
					>
						<Text style={styles.btnStyle} accessibilityRole='button' accessibilityLabel='getstarted'>GET STARTED</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.subTextView}>
					<Text style={styles.loginTitle}>Already have an account?&nbsp;
						<Text onPress={onPress} style={styles.login_btnStyle}>Log in</Text>
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Welcome
