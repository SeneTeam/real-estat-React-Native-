import * as React from 'react';
import { SafeAreaView, StyleSheet, 
        TextInput, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Feather } from '@expo/vector-icons';
// import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

export default function HomePreviewImage({ imageData }: any) {
  return (
    <View style={styles.homeSearchComponentView}>
        <ImageBackground
        source={require('../../../assets/images/webaliser-_TPTXZd9mOo-unsplash_1.png')}
        style={styles.homeSearchImg}
        imageStyle={{ borderRadius: 20}}
        >
        <LinearGradient
            colors={ ['rgba(255,255,255,0)', 'rgba(0,0,0,0.6)'] }
            start={[1, 0]}
            end={[1, 1]}
            style={styles.gradientStyle}
            >
            <View style={styles.topImg}>
            <Image source={require('../../../assets/icons/Vector_(1).png')}
                style={{width:10,height:12,marginLeft:10,marginTop:8}}/>
            <Text style={styles.toptxt} > {imageData.distance} </Text>
            </View>
            <Text style={styles.gradientText} > {imageData.name} </Text>
            <Text style={styles.gradientText1} > {imageData.description} </Text>
        </LinearGradient>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  toptxt:{
    flex:1,
    fontSize:12,
    fontWeight:'400',
    color:'white',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:0,
    paddingRight:5
    // textAlign:'center'
  },
  topImg:{
    flexDirection: "row",
    backgroundColor:'#297EE444',
    borderRadius:12,
    marginTop:24,
    marginLeft:113
  },
  gradientText1:{
    fontWeight: '400',
    fontSize:12,
    color: 'white',
  },
  gradientText:{
    marginTop:170,
    fontWeight: '500',
    fontSize:16,
    color: 'white',
  },
  gradientStyle:{
    borderRadius:20,
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 15,
    overflow: 'hidden',
    position: 'absolute',
    width:'100%',
    height:'100%',
  },
  textView:{
    position:'absolute'
  },
  homeSearchImg:{
    width:222,
    height:272,
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
      marginRight:15
  },
  homeSearchImgScroll:{

  },
});
