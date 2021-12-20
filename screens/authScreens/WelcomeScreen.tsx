import React, { useState } from 'react';
import { styles } from './styles'
import { Image, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Text } from '../../components/Themed';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';

const Welcome = ({ navigation }: { navigation: NavigationProp<any> }) => {

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
                        onPress={() =>
                            navigation.navigate('Login', { name: 'Jane' })}
                        style={{ ...styles.buttonContainer, width: '100%', }}
                    >
                        <Text style={styles.btnStyle} >GET STARTED</Text>
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
