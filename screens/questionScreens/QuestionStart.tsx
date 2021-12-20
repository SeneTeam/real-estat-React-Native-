import { styles } from './styles.js';
import { View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from '../../components/Themed';

const QuestionStart = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    return (
        <View style={styles.questionWrap}>
            <View style={styles.titleQuestion}>
                <Text style={styles.titleHey}>Hey!</Text>
            </View>
            <View style={styles.subTextView_title}>
                <Text style={styles.title}>Tell us a little about yourself</Text>
            </View>
            <View style={styles.subTextView_title}>
                <Text style={styles.questionCheckText}>This will allow you to receive bonuses:</Text>
            </View>
            <View style={styles.questionCheck}>
                <TabBarIcon name="check-circle" color="#297EE4" />
                <Text style={styles.questionCheckText}>&nbsp; Be the first to receive news</Text>
            </View>
            <View style={styles.questionCheck}>
                <TabBarIcon name="check-circle" color="#297EE4" />
                <Text style={styles.questionCheckText}>&nbsp; High payment for </Text>
            </View>
            <View style={styles.questionCheck}>
                <TabBarIcon name="check-circle" color="#297EE4" />
                <Text style={styles.questionCheckText}>&nbsp; More </Text>
            </View>
            <View style={styles.questionCheck}>
                <TabBarIcon name="check-circle" color="#297EE4" />
                <Text style={styles.questionCheckText}>&nbsp; Quick sorting of houses for you</Text>
            </View>

            <View  style={styles.questionBtn} >
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
    );
};
export default QuestionStart

function TabBarIcon(props: {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    color: string;
}) {
    return <MaterialCommunityIcons size={30}  {...props} />;
}
