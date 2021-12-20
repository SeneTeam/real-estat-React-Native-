import { styles } from './styles.js';
import { Image, View, TouchableOpacity, } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { RadioButton, } from 'react-native-paper';
import { Text } from '../../components/Themed';


const QuestionGender = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [value, setValue] = React.useState('first');
    return (
        <View style={styles.questionWrap}>
            <View style={styles.questionHeader}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()} >
                    <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView_title}>
                <Text style={styles.title}>What your gender</Text>
            </View>
            <View style={styles.radioBtn}>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.radioText}>
                        <RadioButton value="Mail" /><Text>Mail</Text>
                    </View>
                    <View style={styles.radioText}>
                        <RadioButton value="Femail" /><Text>Femail</Text>
                    </View>
                    <View style={styles.radioText}>
                        <RadioButton value="Non-binary" /><Text>Non-binary</Text>
                    </View>
                </RadioButton.Group>

            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.questionBtn} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('QuestionAge')}
                    >
                        <Text style={styles.btnStyle} >NEXT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.questionProgress} >
                    <View><Text style={{ textAlign: 'right', color: '#ACB7C2' }}>Completed &nbsp; <Text style={{ color: '#7BC67E' }}>30%</Text></Text></View>
                    <View style={styles.progGender}>
                        <View style={styles.progGenderIN}></View>
                    </View>
                </View>
                <View style={styles.subTextView1}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                    >
                        <Text style={styles.subTextSkip} >Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default QuestionGender
