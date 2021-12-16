import React from 'react';
import { styles } from './styles'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Text } from '../../components/Themed';

const Welcome = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const onPress = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/welcome.png')} style={styles.image} />
            <View style={styles.textView}>
                <View style={styles.subTextView}>
                    <Text style={styles.title}>Find Your Best Home</Text>
                    <Text style={styles.subText}>Lolaux is your assistant, provides many suggestions of all kind of real estate based on the our questionnaire.</Text>
                </View>
                <View style={{ padding: '7%', width: '100%', justifyContent: 'center' }}>
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
                        <TouchableOpacity onPress={onPress}>
                            <Text style={styles.login_btnStyle}>Log in</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Welcome
