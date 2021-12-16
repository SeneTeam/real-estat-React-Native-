import { styles } from '../../screens/authScreens/styles.js';
import { Image, View, TouchableOpacity, } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import OutlineInput from 'react-native-outline-input';
import { CheckBox } from 'react-native-elements'
import React, { useState } from 'react';
import { Text } from '../../components/Themed';

const Register = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const onPress = () => {

  }
  return (
    <View style={styles.loginPageStyle}>
      <View style={styles.loginHeader}>
        <TouchableOpacity
          onPress={() =>
            navigation.goBack()} >
          <Image style={styles.buttonImage} source={require('../../assets/icons/backBtn.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.subTextView_title}>
        <Text style={styles.title}>Create your account </Text>
      </View>
      <View style={styles.loginForm_input}>
        <OutlineInput
          value={Name}
          onChangeText={(e: string) => setName(e)}
          label="Username"
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
      <CheckBox
        title='I have read the Privace Policy'
        checked={checked}
        onPress={() => {
          setChecked(!checked);
        }}
      />
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

export default Register
