import * as React from 'react';
import {   StyleSheet,  Image,  Dimensions } from 'react-native';
import { Text, View } from '../../../components/Themed';

export default function HomePreviewImage({ imageData }: any) {
  const win = Dimensions.get('window');
  return (
  <View style={[styles.homeNearImageView,{marginLeft:'auto'}]}>
    <View style={{margin:'10%'}}>
      <Image style={{width:(win.width-56)*41/100,height:(win.width-56)*41/100,borderRadius:10}}source={require('../../../assets/images/pexels-expect-best-323780 1.png')}/>
      <View>
        <Text style={{fontWeight:'700',fontSize:16,marginTop:10}}>Jawicenter Resto</Text>
        <Text style={{fontSize:12,fontWeight:'500',color:'#ACB7C2'}}>Pasuruan</Text>
        <View style={{flexDirection:'row',marginTop:4}}>
          <Text style={{fontWeight:'700',fontSize:14,color:'#30C0E9'}}>date</Text>
          <Image style={{width:15,height:15,marginLeft:'auto',marginTop:4}}source={require('../../../assets/icons/arrow-right (1).png')}/>
        </View>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  homeNearImageView:{
    borderRadius:15,
    width:'96%',
    marginBottom:12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,  
    elevation: 20
  },
});
