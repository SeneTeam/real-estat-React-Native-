import { styles } from './styles.js';
import { Image, View, TouchableOpacity, } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { RadioButton, } from 'react-native-paper';
import { Text } from '../../components/Themed';


const QuestionGender = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [value, setValue] = React.useState('first');
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

            </View> */}
            <View style={styles.questionBtn} >
                <TouchableOpacity
                    onPress={() => navigation.navigate('QuestionAge')}
                >
                    <Text style={styles.btnStyle} >CONTINUE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.questionProgress} >
                <View><Text style={{ textAlign: 'right' }}>Completed &nbsp; 30%</Text></View>
                <View style={styles.progGender}></View>
            </View>
            <View style={styles.subTextView1}>
                <TouchableOpacity
                // onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                >
                    <Text style={styles.subTextSkip} >Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default QuestionGender
