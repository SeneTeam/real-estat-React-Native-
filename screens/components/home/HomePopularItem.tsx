import * as React from 'react';
import { SafeAreaView, StyleSheet, 
        TextInput, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Feather } from '@expo/vector-icons';
// import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

export default function HomePreviewImage({ indexData}: {indexData:any}) {
  return (
  <TouchableOpacity>
    <View style={styles.homePopularView} >
      <Image style={{width:60,height:60,borderRadius:10,marginRight:10,marginLeft:10}}source={require('../../../assets/images/pexels-expect-best-323780_1.png')}/>
      <View>
        <Text style={styles.homeTitleText}>{indexData.name}</Text>
        <Text style={[styles.homeTitleText1,{color:'#297EE4',marginTop:4}]}>{indexData.price}</Text>
        <View style={{flexDirection:'row',marginTop:4}}>
          <View style={{flexDirection:'row'}}>
            <Image style={{width:15,height:15,marginRight:5}}source={require('../../../assets/icons/Vector_(2).png')}/>
            <Text style={[styles.homeTitleText1,{width:80}]}>{indexData.bedroomNum}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={{width:15,height:15,marginRight:5}}source={require('../../../assets/icons/Group_1.png')}/>
            <Text style={styles.homeTitleText1}>{indexData.bathroomNum}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  homePopularView:{
    width:'98%',
    marginLeft:'1%',
    marginTop:5,
    marginBottom:5,
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,  
    elevation: 5
  },


  homeTitleArrow:{width:20,height:20,marginRight:10,marginTop:13},
  homeTitleText1:{fontSize:12,fontWeight:'400',color:'#ACB7C2'},
  homeTitleText:{fontSize:16,fontWeight:'500'},
  homeTitleImage:{width:42,height:42,marginRight:10},
  homeTitleView:{flexDirection:'row',width:'100%',marginTop:10,marginBottom:20},
});
