import * as React from 'react';
import { SafeAreaView, StyleSheet, 
         ScrollView, Image, TouchableOpacity, Dimensions  } from 'react-native';
import { TextInput } from 'react-native-paper';
import HomePopularItem from '../../components/home/HomePopularItem';
import HomeLookingImage from '../../components/home/HomeLookingImage';
import LocationLookingImage from '../../components/home/LocationLookingImage';
import HomeNearItem from '../../components/home/HomeNearItem';
import HomeNearItem_1 from '../../components/home/HomeNearItem_1';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import { menuBtn } from '../../../constants/menuBtn';

export default function HomeDetailScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const [getBtninfo, onBtnPress] = React.useState(null)
  const [getMenuBtn, setMenuBtn] = React.useState(menuBtn)
  const win = Dimensions.get('window');

  const setMenubutton=(data:any)=>{
    console.log('adfasd')
    menuBtn.forEach((item:any,index:any) => {
      getMenuBtn[index]={title:item.title, state:index==data?true:false}
    })
    setMenuBtn([...getMenuBtn])
  }
  return (
    <View style={[styles.homeview,{flex:1}]}>
      <View style={{flexDirection:'row'}}>
         {/* <TextInput style={[styles.input,{width:(win.width-60)}]} placeholder="I'm looking for..." placeholderTextColor={'#D0D8E0'} onChangeText={onChangeText} value={text}/> */}
         <TextInput
                    autoComplete={true}
                    mode="outlined"
                    placeholder='Search address, or near you'
                    outlineColor='#F2F3F7'
                    activeOutlineColor='#888888'
                    style={{height:40,borderRadius:10,
                          width:win.width-70}}
                    right={<TextInput.Icon  name="microphone" color='#D0D8E0'/>}
                />
        <TouchableOpacity style={{marginLeft:'auto'}} >
          <Image style={{width:20,height:20,margin:15,marginLeft:10,marginRight:10}} source={require('../../../assets/icons/Group.png')}/>
        </TouchableOpacity>
      </View>
       <View style={{flex:6}}>
        <ScrollView style={{marginTop:15}} horizontal={true}>
          <HomeLookingImage imageData={{distance:'18km',name:'Dreamsville House',description:'$129,990',imageUrl:'../../../assets/images/webaliser-_TPTXZd9mOo-unsplash 1.png'}}/>
          <HomeLookingImage imageData={{distance:'18km',name:'Dreamsville House',description:'$129,990',imageUrl:'../../../assets/images/webaliser-_TPTXZd9mOo-unsplash 1.png'}}/>
        </ScrollView>
      </View>
      <View style={{flex:5}}>
        <View style={{height:35,flexDirection:'row'}}>
          <Text style={{fontSize:24,fontWeight:'600'}} > Looking in location </Text>
          <Image style={{width:20,height:15,margin:11,marginLeft:'auto',marginRight:10}} source={require('../../../assets/icons/Vector_(3).png')}/>
        </View>
        <ScrollView style={{marginTop:10}} horizontal={true}>
          <LocationLookingImage indexData={{name:'Name House',location:'Pasuruan',distance:'1.2km',isNew:true}}></LocationLookingImage>
          <LocationLookingImage indexData={{name:'Name House',location:'Pasuruan',distance:'1.2km',isNew:true}}></LocationLookingImage>
          <LocationLookingImage indexData={{name:'Name House',location:'Pasuruan',distance:'1.2km',isNew:true}}></LocationLookingImage>
        </ScrollView>
      </View>
      <View style={{flex:7}}>
        <View style={{height:35}}>
          <Text style={{fontSize:24,fontWeight:'600'}} > Recomended for you</Text>
        </View>
        <ScrollView style={{marginTop:10}} horizontal={true}>
          <LocationLookingImage indexData={{name:'Name House',location:'Pasuruan',distance:'1.2km'}}></LocationLookingImage>
          <LocationLookingImage indexData={{name:'Name House',location:'Pasuruan',distance:'1.2km'}}></LocationLookingImage>
          <LocationLookingImage indexData={{name:'Name House',location:'Pasuruan',distance:'1.2km'}}></LocationLookingImage>        
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({



  homeTitleArrow:{width:20,height:20,marginRight:10,marginTop:13},
  homeTitleText1:{fontSize:12,fontWeight:'400',color:'#ACB7C2'},
  homeTitleText:{fontSize:16,fontWeight:'500'},
  homeTitleImage:{width:42,height:42,marginRight:10},
  homeTitleView:{
    backgroundColor:'#234457'
  },
  homeSearchImgScroll:{
    backgroundColor:'#987873'
  },
  btnStyle:{
    backgroundColor: '#F2F3F7',
    padding: 10,
    paddingLeft:15,
    paddingRight:15,
    borderRadius: 10,
    textAlign: 'center',
    marginRight:15,
    color: '#ACB7C2'
  },
  scrollBtnView:{
    marginBottom:10
  },
  homeBtns:{
    backgroundColor:'#873456'
  },
  homeview:{
    padding:20,
    paddingBottom:0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white'
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop:15,
    marginBottom:10,
    paddingRight:'15%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#F2F3F7',
    borderRadius:15,
    marginTop:6,
    marginBottom:10,
    borderColor:'#F2F3F7',
  },
  scrollView: {
    marginHorizontal: 0,
    width:'100%'
  },
});
