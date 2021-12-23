import { styles } from './styles.js';
import { Image, View, TouchableOpacity, } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import OutlineInput from 'react-native-outline-input';
import { CheckBox } from 'react-native-elements'
import React, { useState } from 'react';
import { Text } from '../../components/Themed';
import { TextInput } from 'react-native-paper';
import { Auth } from 'aws-amplify';
import { FancyAlert, LoadingIndicator } from 'react-native-expo-fancy-alerts';

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const Register = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [loader, setLoader] = useState(false)
  const [error, seterror] = useState(false)
  const [usererror, setusererror] = useState(false);
  const [emailerror, setemailerr] = useState(false);
  const [passworderror, setpassworderror] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const toggleAlert = React.useCallback((value) => {
    setVisible(value);
  }, [visible]);



  const onPress = async () => {
    setLoader(true)
    try {
      const { user } = await Auth.signUp({
        username: Name,
        password: password,
        attributes: {
          email: email,
        }
      });
      seterror(false)
      setLoader(false)
      toggleAlert(true)

      setTimeout(() => { 
        
        toggleAlert(false)
      navigation.navigate('EnterCode',{comefrom:'register',name:Name})
      }, 3000)
    

      console.log(user);

    } catch (error) {
      setLoader(false)
      seterror(true)
      toggleAlert(true)
      setTimeout(() => { toggleAlert(false)}, 4000)

      console.log('error signing up:', error);
    }

  }



  return (
    <View style={styles.loginWrap}>

      <FancyAlert
        onRequestClose={()=>toggleAlert(false)}
        visible={visible}
        icon={<View style={[styles.alert, { backgroundColor: error ? "red" : "green" }]}><Text style={{ color: "white" }}>{error ? "✘" : "✔"}</Text></View>}
        style={{ backgroundColor:error? '#FF737F' :'#7BC67E'}}
       
      >
        <Text style={[styles.atext]}> {error ? "User already exists" : "OTP send on mail please verify"}</Text>
       
      </FancyAlert>
      <View >
        <TouchableOpacity
          onPress={() => navigation.goBack()} >
          <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />

        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 15 }}>
        <View style={{ alignItems: 'center', paddingVertical: 70 }}>
          <Text style={styles.title}>Create your account</Text>
        </View>
      </View>

      {/* <View style={{ flex: 2 }}> */}
      <View style={styles.loginForm}>
        <TextInput
          autoComplete={true}
          mode="outlined"
          label="Username"
          value={Name}
          error={usererror}
          right={Name ? <TextInput.Icon color={"green"} name="check" /> : null}
          onChangeText={text => {
            setusererror(false)
            setName(text)}}
        />

      </View>
      <View style={styles.loginForm}>
        <TextInput
          autoComplete={true}
          mode="outlined"
          label="UserEmail"
          value={email}
          right={reg.test(email) ? <TextInput.Icon color={"green"} name="check" /> : null}
          onChangeText={(e: string) =>{
            setemailerr(false)
            setEmail(e)}}
          error={emailerror}
        />

      </View>
      <View style={styles.loginForm}>
        <TextInput
          autoComplete={true}
          mode="outlined"
          secureTextEntry
          value={password}
          right={password.length >= 7 ? <TextInput.Icon color={"green"} name="check" /> : null}
          onChangeText={(e: string) => {
            setpassworderror(false)
            setPassword(e)}}
          label="Password"
          error={passworderror}
        />
       {passworderror? <Text style={{color:'red'}}>password mush be 8 characters</Text>:null}

      </View>
      <CheckBox
        title='I have read the Privace Policy'
        checked={checked}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      {/* </View> */}
      <LoadingIndicator visible={loader} />
      {/* <View style={{ flex: 1 }}> */}
      <View style={{ padding: '7%', width: '100%', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            if (Name == "") {
              setusererror(true)
            } else if (!reg.test(email)) {
              setemailerr(true)
            } else if (password.length <= 7) {
              setpassworderror(true)
            } else {
              onPress()
            }

          }}
        // navigation.navigate('QuestionStart')}}
        >
          <Text style={styles.btnStyle} >GET STARTED</Text>
        </TouchableOpacity>

      </View>
      {/* </View> */}


    </View>
  );
};

export default Register
