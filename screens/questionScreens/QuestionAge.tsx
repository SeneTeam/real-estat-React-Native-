import { styles } from './styles.js';
import { Image, View, TouchableOpacity, } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import WheelPicker from 'react-native-wheely';
import * as Progress from 'react-native-progress';
import { Text } from '../../components/Themed';


const QuestionAge = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const age = [10,11,12,13,14,15]
    return (
        <View style={styles.questionWrap}>
            {/* <View style={styles.questionHeader}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()} >
                    <Image style={{ width: '50px', height: '50px', margin: '25px' }}
                        source={require('./assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView_title}>
                <Text style={styles.title}>What’s your age?</Text>
            </View>
            <View>
                <WheelPicker
                    selectedIndex={1}
                    options={age}
                    onChange={(index) => setSelectedIndex(index)}
                />
            </View> */}
            <View style={styles.questionBtn} >
                <TouchableOpacity
                    onPress={() => navigation.navigate('QuestionId')}
                >
                    <Text style={styles.btnStyle} >CONTINUE</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.questionProgress} >
                <View><Text style={{ textAlign: 'right' }}>Completed &nbsp; 60%</Text></View>
                <View style={{ width: '100%', flexDirection: "row" }}><Progress.Bar style={{ flex: 1 }} progress={0.6} color='#7BC67E' height={12} /></View>
            </View>
            <View style={styles.subTextView1}>
                <TouchableOpacity
                // onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                >
                    <Text style={styles.subTextSkip} >Skip</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};
export default QuestionAge
