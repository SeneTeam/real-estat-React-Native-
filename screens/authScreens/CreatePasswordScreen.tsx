import { styles } from '../../screens/authScreens/styles.js';
import { Image, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import OutlineInput from 'react-native-outline-input';
import { Text } from '../../components/Themed';

const CreatePassword = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [checked, setChecked] = useState(false);
    const [newpassword, setNewPassword] = useState('');
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
            <View style={styles.subTextView}>
                <Text style={styles.title}>Create new password</Text>
            </View>
            <View style={styles.subTextView}>
                <Text style={styles.subText}>You new password must be different from previous used passwords</Text>
            </View>
            <View style={styles.loginForm_input}>
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
            <View style={styles.loginForm_input}>
                <OutlineInput
                    value={newpassword}
                    onChangeText={(e: string) => setNewPassword(e)}
                    label="New Password"
                    activeValueColor="#6c63fe"
                    activeBorderColor="#6c63fe"
                    activeLabelColor="#6c63fe"
                    passiveBorderColor="#30c0e9"
                    passiveLabelColor="#bbb7ff"
                    passiveValueColor="#30c0e9"
                />
            </View>
            <View style={styles.subTextView}>
                <Text style={styles.subText}>Minimum of  characters, with upper and lowercase and a number, or a symbol.</Text>
            </View>
            <CheckBox
                title='I have read the Privace Policy'
                checked={checked}
                onPress={() => {
                    setChecked(!checked);
                }}
            /> */}
            <View style={{ padding: '7%', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity
                // onPress={() => navigation.navigate('Register', { name: 'Jane' })}
                >
                    <Text style={styles.btnStyle} >GET STARTED</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default CreatePassword
