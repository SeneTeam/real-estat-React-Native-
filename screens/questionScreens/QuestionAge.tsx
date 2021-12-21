import { styles } from './styles.js';
import { Image, View, TouchableOpacity, } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import WheelPicker from 'react-native-wheely';
import { Text } from '../../components/Themed';


const QuestionAge = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const age = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
        33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
        69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
    useEffect(() => {
        console.log(selectedIndex);
    }, [selectedIndex])
    return (
        <View style={styles.questionWrap}>
            <View style={styles.questionHeader}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()} >
                    <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView_title}>
                <Text style={styles.title}>What's your age?</Text>
            </View>
            <View style={styles.picker}>
                <View style={styles.pickerWrap}>
                    <View style={{ display: 'flex', justifyContent: 'center' }}>
                        <Text
                            style={{
                                borderBottomColor: '#30C0E9',
                                borderBottomWidth: 1,
                                position: 'absolute',
                                top: '40%',
                                right: '100%',
                                width: '100%',
                            }}
                        ></Text>
                        <WheelPicker
                            selectedIndex={1}
                            options={age}
                            onChange={(index) => setSelectedIndex(index)}
                            itemTextStyle={styles.wheelTitle}
                            selectedIndicatorStyle={styles.selectedWheel}
                        />
                        <Text
                            style={{
                                borderBottomColor: '#30C0E9',
                                borderBottomWidth: 1,
                                position: 'absolute',
                                top: '40%',
                                left: '100%',
                                width: '100%',
                            }}
                        ></Text>
                    </View>
                </View>

            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.questionBtn} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('QuestionId')}
                    >
                        <Text style={styles.btnStyle} >NEXT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.questionProgress} >
                    <View><Text style={{ textAlign: 'right', color: '#ACB7C2' }}>Completed &nbsp; <Text style={{ color: '#7BC67E' }}>60%</Text></Text></View>
                    <View style={styles.progGender}>
                        <View style={styles.progGenderINAge}></View>
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
export default QuestionAge
