import * as React from 'react';
import {   StyleSheet,  Image,  Dimensions } from 'react-native';
import { Text, View } from '../../../components/Themed';

export default function LocationLookingImage({ indexData }: any) {
  const win = Dimensions.get('window');
  return (
  <View style={styles.homeNearImageView}>
    <View style={{borderRadius:8,marginRight:8,position:'relative'}}>
      <Image style={styles.backgroundImg}source={require('../../../assets/images/g39p1kDjvSY.png')}/>
        {indexData.isNew?<Text style={styles.newSymboltext}>New</Text>:null}
    </View>
    <View>
      <Text style={{fontWeight:'400',fontSize:18}}>{indexData.name}</Text>
      <Text style={{fontSize:11,fontWeight:'400',color:'#ACB7C2'}}>{indexData.location}</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  backgroundImg:{
    width:((Dimensions.get('window').height-40)*5/19-100)*10/7,
    height:(Dimensions.get('window').height-40)*5/19-100,
    borderRadius:10
  },
  homeNearImageView:{
    width:((Dimensions.get('window').height-40)*5/19-100)*10/7,
    borderRadius:10,
    marginRight:8
  },
  newSymboltext:{
    position:'absolute',
    color:'white',
    fontSize:22,
    fontWeight:'700',
    backgroundColor:'#297EE4',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius:8,
    borderBottomRightRadius:11,
    borderBottomColor:'white',
    borderRightColor:'white',
    borderBottomWidth:3,
    borderRightWidth:3,
  },

});
