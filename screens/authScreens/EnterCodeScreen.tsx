import { styles } from '../../screens/authScreens/styles.js';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text } from '../../components/Themed';
import { SafeAreaView, } from 'react-native';
import { Auth } from 'aws-amplify';
import { FancyAlert, LoadingIndicator } from 'react-native-expo-fancy-alerts';

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
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [loader, setLoader] = useState(false)
    const [error, seterror] = useState(false)
    const [visible, setVisible] = React.useState(false);
    const toggleAlert = React.useCallback((value) => {
        setVisible(value);
    }, [visible]);

    const confirmOTP = async () => {

        if (value.length == 6) {
            if (route.params.comefrom == "forgot") {
                navigation.navigate('CreatePassword', { otp: value, user: route.params.name })

            } else {
                setLoader(true)
                try {
                    await Auth.confirmSignUp(route.params.name, value);
                    setLoader(false)
                    seterror(false)
                    toggleAlert(true)

                    setTimeout(() => {
                        toggleAlert(false)
                        navigation.navigate('Login')
                    }, 3000)
                } catch (error) {
                    setLoader(false)
                    seterror(true)
                    toggleAlert(true)
                    setTimeout(() => { toggleAlert(false) }, 3000)
                }
            }

        }
    }

    useEffect(() => {
        confirmOTP()

    }, [value])
    return (
        <View style={styles.loginWrap}>
            <FancyAlert
                onRequestClose={() => toggleAlert(false)}
                visible={visible}
                icon={<View style={[styles.alert, { backgroundColor: error ? "red" : "green" }]}><Text style={{ color: "white" }}>{error ? "✘" : "✔"}</Text></View>}
                style={{ backgroundColor: error ? '#FF737F' : '#7BC67E' }}
            >
                <Text style={[styles.atext, { color: error ? "red" : "green" }]}> {error ? "Please enter a valid otp." : "User Verified successfully"}</Text>
                {/* <TouchableOpacity style={[styles.btn, { backgroundColor: error ? "red" : "green" }]} onPress={() => { error ? toggleAlert(true) : navigation.navigate('Login') }}>
                    <Text style={styles.btnText}>OK</Text>
                </TouchableOpacity> */}
            </FancyAlert>
            <View ></View>
            <View >
                <TouchableOpacity
                    onPress={() => navigation.goBack()} >
                    <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
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
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
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
            <LoadingIndicator visible={loader} />
            <TouchableOpacity onPress={() => {

            }} style={{ flex: 1, padding: '7%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.subText} >Resend Code</Text>
            </TouchableOpacity>

        </View>
    );
};

export default EnterCode
