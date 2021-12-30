import { styles } from './styles.js';
import { Image, View, TouchableOpacity, ToastAndroid, ActivityIndicator, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { TextInput, HelperText } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import React, { useState } from 'react';
import { Text } from '../../components/Themed';
import Auth from '@aws-amplify/auth';

const Register = ({ navigation }: { navigation: NavigationProp<any>, route: any }) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [email_error, setEmail_error] = useState('');
  const [username_error, setUsername_error] = useState('');
  const [password_error, setPassword_error] = useState('');

  const onSignup = () => {
    if (username) {
      if (email) {
        if (password) {
          if (checked) {
            setButtonLoader(true);
            Auth.signUp({
              username,
              password,
              attributes: {
                email,
                name: username,
              },
              validationData: [],
            })
              .then((data) => {
                setButtonLoader(false);
                navigation.navigate('EnterCode', { username, password, screen: 'otp-verification' });
              })
              .catch((err) => {
                setButtonLoader(false)
                if (err.message) {
                  if (Platform.OS == 'android') ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                }
              });
          }
        } else {
          setPassword_error('Password Required !')
        }
      } else {
        setEmail_error('Email Required !')
      }
    } else {
      setUsername_error('User Name Required !')
    }
  }

  function handleInput(text: string, fieldType: string) {
    if (fieldType === "name") {
      setUsername(text)
      setUsername_error('')
    } else if (fieldType === "email") {
      setEmail(text)
      setEmail_error('')
    } else if (fieldType === "password") {
      setPassword(text)
      setPassword_error('')
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
          <Text style={styles.title}>Create your account</Text>
        </View>
      </View>
      <View style={{ display: 'flex', alignItems: 'center', flex: 1 }}></View>
      <View>

      </View>
      <View style={styles.loginForm}>
        <TextInput
          theme={{
            roundness: 16,
          }}
          underlineColorAndroid="transparent"
          outlineColor={username_error ? "#B00020" : "transparent"}
          activeOutlineColor={username_error ? "#B00020" : "#30C0E9"}
          value={username}
          onChangeText={(text: string) => handleInput(text, 'name')}
          label="Username"
          autoComplete={true}
          mode="outlined"
          error={false}
          accessibilityLabel='username'
        />
        <Text style={styles.err_txt}>{username_error}</Text>
        {/* <HelperText type="error" visible={username_error}>{username_error}</HelperText> */}
      </View>
      <View style={styles.loginForm}>
        <TextInput
          theme={{
            roundness: 16,
          }}
          underlineColorAndroid="transparent"
          outlineColor={email_error ? "#B00020" : "transparent"}
          activeOutlineColor={email_error ? "#B00020" : "#30C0E9"}
          value={email}
          onChangeText={(text: string) => handleInput(text, 'email')}
          label="UserEmail"
          autoComplete={true}
          mode="outlined"
          error={false}
          accessibilityLabel='email'
        />
        <Text style={styles.err_txt}>{email_error}</Text>
        {/* <HelperText type="error" visible={email_error}>{email_error}</HelperText> */}
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
          onChangeText={(text: string) => handleInput(text, 'password')}
          label="Password"
          secureTextEntry={showPassword ? true : false}
          autoComplete={true}
          mode="outlined"
          error={false}
          right={<TextInput.Icon onPress={() => { setShowPassword(!showPassword) }} name="eye" />}
          accessibilityLabel='password'
        />
        <Text style={styles.err_txt}>{password_error}</Text>
        {/* <HelperText type="error" visible={password_error}>{password_error}</HelperText> */}
      </View>
      <CheckBox
        title='I have read the Privace Policy'
        containerStyle={{ backgroundColor: 'transparent' }}
        checked={checked}
        onPress={() => {
          setChecked(!checked);
        }}
        accessibilityLabel='privacy-policy'
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
              onPress={onSignup}
              disabled={checked ? false : true}
            >
              <Text style={styles.btnStyle} accessibilityLabel='signup' accessibilityRole='button'>GET STARTED</Text>
            </TouchableOpacity>
        }
      </View>
      <View style={{ display: 'flex', alignItems: 'center', flex: 2 }}></View>
    </View>
  );
};

export default Register;
