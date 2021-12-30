import * as React from 'react';
import { SafeAreaView, StyleSheet, 
        TextInput, ScrollView, Image, TouchableOpacity, Dimensions  } from 'react-native';
import SwipeCard from '../../components/feed/SwipeCard';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import { menuBtn } from '../../../constants/menuBtn';

export default function HomeScreen({ navigation }: RootTabScreenProps<any>) {
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
    <View style={styles.homeview}>
      <View style={{flex:3}}>
        <Text style={styles.title}>Choose house to live</Text>
      </View>
      <View style={{flex:3}}>
        <ScrollView style={styles.homeBtns} horizontal={true}>
          {getMenuBtn.map((item,index)=>{ return <TouchableOpacity key={index} onPress={e => {e.preventDefault(); setMenubutton(index)}} >
            <Text style={[styles.btnStyle,{backgroundColor:item.state?'#30C0E9':'#F2F3F7',color:item.state?'white':'#ACB7C2'}]} >{item.title}</Text>
          </TouchableOpacity>})}
        </ScrollView>
      </View>
      <View style={{flex:24}}>
        <SwipeCard indexData={{name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom',image_url:require('../../../assets/images/Image.png')}}/>

      </View>
      <View style={{flex:4,justifyContent:'center',marginLeft:'auto',marginRight:'auto'}}>
        <View style={{width:(Dimensions.get('window').height-40)*9/37,flexDirection:'row',}}>
        <TouchableOpacity style={{marginRight:'auto'}} onPress={() => {}}>
          <Image style={styles.swip_icon} source={require('../../../assets/icons/dislike_icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:'auto'}} onPress={() => {}}>
          <Image style={styles.swip_icon_1} source={require('../../../assets/icons/like_icon.png')}/>
        </TouchableOpacity> 
        </View>
      </View>
      <View style={{flex:6}}>

      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({


  swip_icon:{
    width:(Dimensions.get('window').height-40)*3/37,
    height:(Dimensions.get('window').height-40)*3/37,
  },
  swip_icon_1:{
    width:(Dimensions.get('window').height-40)*3/37,
    height:(Dimensions.get('window').height-40)*3/37,
    marginLeft:'auto'
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
  homeBtns:{
    paddingBottom:5
  },
  homeview:{
    padding:20,
    flex:1
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    paddingRight:'15%'
  },
});
