import * as React from 'react';
import { SafeAreaView, StyleSheet, 
        TextInput, ScrollView, Image, TouchableOpacity,Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Feather } from '@expo/vector-icons';
// import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

export default function SwipeCard({ cardData }: any) {
  return (
    <View style={styles.image_card_view}>
      <Image style={styles.image_card} source={require('../../../assets/images/Image.png')}/>
      <View style={{marginLeft:15,marginRight:15}}>
        <Text style={styles.homeTitleText}>Dreamsville House</Text>
        <Text style={[styles.homeTitleText1,{color:'#297EE4',marginTop:4}]}>Jl. Sultan Iskandar Muda, Jakarta selatan</Text>
        <View style={{flexDirection:'row',marginTop:4}}>
          <View style={{flexDirection:'row'}}>
            <Image style={{width:15,height:15,marginRight:5}}source={require('../../../assets/icons/Vector_(2).png')}/>
            <Text style={[styles.homeTitleText1,{width:80}]}>6 Bedroom</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={{width:15,height:15,marginRight:5}}source={require('../../../assets/icons/Group_1.png')}/>
            <Text style={styles.homeTitleText1}>4 Bathroom</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  homeTitleArrow:{width:20,height:20,marginRight:10,marginTop:13},
  homeTitleText1:{fontSize:12,fontWeight:'400',color:'#ACB7C2'},
  homeTitleText:{fontSize:16,fontWeight:'500'},
  homeTitleImage:{width:42,height:42,marginRight:10},
  homeTitleView:{flexDirection:'row',width:'100%',marginTop:10,marginBottom:20},
  image_card:{
    width:(Dimensions.get('window').width-40)-30,
    height:(Dimensions.get('window').height-40)*22/37-110,
    marginTop:15,
    marginLeft:15,
    marginBottom:5,
    borderRadius:10,
  },
  image_card_view:{
    height:(Dimensions.get('window').height-40)*22/37-10,
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,  
    elevation: 10
  },
});
