import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, 
        TextInput, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  Button } from 'react-native-paper';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

export default function Questionnaire({ indexData,btnClick}: {indexData:any,btnClick:(data:any,index:any) => void}) {
  return (
    <View style={styles.homePopularView} >
        <Text style={styles.homeTitleText}>{indexData.name}</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:4}}>
          {indexData.questionnaireData.map((item:any,index:any)=>{return<View key={index} style={{flexDirection:'row'}}>
            <TouchableOpacity style={{  marginLeft:'auto',marginRight:5,marginTop:5,}}>
              <Button mode='contained'
                      color={item.state?'#30C0E9':'#D0D8E0'}
                      style={{borderRadius:20}}
                      labelStyle={{color:'white'}}
                      contentStyle={{flexDirection: 'row-reverse'}}
                      icon={indexData.isEdit&&item.state?"close-circle":''}
                      onPress={()=>btnClick(indexData,index)}
                      >
                {item.title}
              </Button>

            </TouchableOpacity>
            {/* <Text style={[styles.homeTitleText1,{backgroundColor:item.state?'#30C0E9':'#D0D8E0'}]}>
                <Text style={{display:'flex',color:'white',fontSize:12,marginRight:5,marginBottom:15}}>{item.title}</Text>
                {indexData.isEdit&&item.state?<QuestionnaireIcon name="cards-playing-outline" color='white' />:null}
              </Text> */}
          </View>})}
        </View>
    </View>
  );
}
function QuestionnaireIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={20} style={{ marginBottom: -3 }} {...props} />;
}
const styles = StyleSheet.create({
  homePopularView:{
    width:'98%',
    marginLeft:'1%',
    marginTop:5,
    marginBottom:5,
    padding:10,
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,  
    elevation: 5
  },


  homeTitleArrow:{
    width:20,
    height:20,
    marginRight:10,
    marginTop:13
  },
  homeTitleText1:{
    flexDirection:'row',
    
    borderRadius:20,
    fontSize:12,
    fontWeight:'300',
    color:'white',
    height:40,
    paddingTop:10,
    backgroundColor:'#30C0E9',
    // padding:15, 
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:10
  
  },
  homeTitleText:{
    fontSize:16,
    fontWeight:'500'
  },
  homeTitleImage:{
    width:42,
    height:42,
    marginRight:10
  },
  homeTitleView:{
    flexDirection:'row',
    width:'100%',
    marginTop:10,
    marginBottom:20
  },
});
