import * as React from 'react';
import { SafeAreaView, StyleSheet, 
        TextInput, ScrollView, Image, TouchableOpacity,Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Feather } from '@expo/vector-icons';
// import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

export default function HomePreviewImage({ imageData }: any) {
  return (
    <View style={styles.homeSearchComponentView}>
        <ImageBackground
          source={require('../../../assets/images/Rectangle_6_(1).png')}
          style={styles.homeSearchImg}
          imageStyle={{ borderRadius: 20}}
        >
          <View style={styles.topImg}>
            <Text style={styles.gradientText} > {imageData.name} </Text>
            <Text style={styles.gradientText1} > {imageData.description} </Text>
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  topImg:{
    flexDirection: "row",
    backgroundColor:'#00000077',
    borderRadius:8,
    marginTop:'50%',
    marginLeft:'5%',
    width:'90%',
    height: 47
  },
  gradientText1:{
    fontWeight: '400',
    fontSize:18,
    color: 'white',
    width:'35%',
    padding:5,
    paddingLeft:15
  },
  gradientText:{
    padding:5,
    fontWeight: '400',
    fontSize:12,
    width:'65%',
    color: 'white',
  },
  homeSearchImg:{
    width:'100%',
    height:'100%',
    borderRadius:20,
    position:'relative',
    marginBottom:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,  
    elevation: 20
  },
  homeSearchComponentView:{
      marginRight:15,
      borderRadius:20,
      width:((Dimensions.get('screen').height-40)*6/19-30)*3/2,
    height:(Dimensions.get('screen').height-40)*6/19-30,
  },
  homeSearchImgScroll:{

  },
});
