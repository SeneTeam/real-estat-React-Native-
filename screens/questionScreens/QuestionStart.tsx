import { styles } from './styles.js';
import { View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton, } from 'react-native-paper';
import { Text } from '../../components/Themed';

const QuestionStart = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [value, setValue] = React.useState('first');
    return (
        <View style={styles.questionWrap}>
            <View >
                <View style={styles.titleQuestion}>
                    <Text style={styles.titleHey}>Hey!</Text>
                </View>
                <View style={styles.subTextView_title}>
                    <Text style={styles.title}>Tell us a little about yourself</Text>
                </View>
                <View style={styles.subTextView_title}>
                    <Text style={styles.questionCheckText}>This will allow you to receive bonuses:</Text>
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <View style={styles.radioBtn}>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={styles.radioText}>
                            <RadioButton value="primary" /><Text>I am looking to buy a primary home within a year</Text>
                        </View>
                        <View style={styles.radioText}>
                            <RadioButton value="browse" /><Text>I am just browsing</Text>
                        </View>
                        <View style={styles.radioText}>
                            <RadioButton value="investment" /><Text>I am looking to buy an investment home</Text>
                        </View>
                    </RadioButton.Group>
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <View style={styles.questionBtn} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('QuestionGender')}
                    >
                        <Text style={styles.btnStyle} >CONTINUE</Text>
                    </TouchableOpacity>
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
export default QuestionStart

function TabBarIcon(props: {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    color: string;
}) {
    return <MaterialCommunityIcons size={30}  {...props} />;
}
