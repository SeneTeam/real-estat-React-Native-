import * as React from 'react';
import { SafeAreaView, StyleSheet, 
         ScrollView, Image, TouchableOpacity, Dimensions  } from 'react-native';
import { TextInput } from 'react-native-paper';
import HomePopularItem from '../../components/home/HomePopularItem';
import HomePreviewImage from '../../components/home/HomePreviewImage';
import HomeNearItem from '../../components/home/HomeNearItem';
import HomeNearItem_1 from '../../components/home/HomeNearItem_1';
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
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.homeview}>
      <Text style={styles.title}>Where do you want to live today?</Text>
      <View style={{flexDirection:'row',height:40}}>
        {/* <TextInput style={[styles.input,{width:(win.width-40)}]} placeholder='Search address, or near you ' placeholderTextColor={'#D0D8E0'} onChangeText={onChangeText} value={text}
         right={<TextInput.Icon  name="eye" />}/> */}
         <TextInput
                    autoComplete={true}
                    mode="outlined"
                    placeholder="I'm looking for"
                    outlineColor='#F2F3F7'
                    activeOutlineColor='#888888'
                    style={{height:40,borderRadius:10,
                          width:win.width-70}}
                    right={<TextInput.Icon  name="microphone" color='#D0D8E0'/>}
                />
        <Image style={{width:20,height:20,margin:15,marginLeft:10,marginRight:10}} source={require('../../../assets/icons/Group.png')}/>
      </View>
      <ScrollView style={styles.homeBtns} horizontal={true}>
        {/* <View style={styles.scrollBtnView}> */}
          {getMenuBtn.map((item,index)=>{ return <TouchableOpacity key={index} onPress={e => {e.preventDefault(); setMenubutton(index)}} >
            <Text style={[styles.btnStyle,{backgroundColor:item.state?'#30C0E9':'#F2F3F7',color:item.state?'white':'#ACB7C2'}]} >{item.title}</Text>
          </TouchableOpacity>})}
      </ScrollView>

      {<ScrollView style={styles.homeSearchImgScroll} horizontal={true}>
        <HomePreviewImage imageData={{distance:'18km',name:'Dreamsville House',description:'Jl. Sultan Iskandar Muda',imageUrl:'../../../assets/images/webaliser-_TPTXZd9mOo-unsplash 1.png'}}/>
        <HomePreviewImage imageData={{distance:'18km',name:'Dreamsville House',description:'Jl. Sultan Iskandar Muda',imageUrl:'../../../assets/images/webaliser-_TPTXZd9mOo-unsplash 1.png'}}/>
        <HomePreviewImage imageData={{distance:'18km',name:'Dreamsville House',description:'Jl. Sultan Iskandar Muda',imageUrl:'../../../assets/images/webaliser-_TPTXZd9mOo-unsplash 1.png'}}/>
      </ScrollView>}

      <View style={styles.homeTitleView}>
        <Image style={styles.homeTitleImage} source={require('../../../assets/icons/LOVE.png')}/>
        <View>
          <Text style={styles.homeTitleText}>Popular</Text>
          <Text style={styles.homeTitleText1}>Let’s choose, and enjoy the food</Text>
        </View>
        <TouchableOpacity style={{marginLeft:'auto'}} onPress={() => navigation.navigate('HomeDetail')}>
          <Image style={styles.homeTitleArrow} source={require('../../../assets/icons/arrow-right.png')}/>
        </TouchableOpacity>
      </View>

      <HomePopularItem indexData={{name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'}}/>
      <HomePopularItem indexData={{name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'}}/>
      
      <View style={styles.homeTitleView}>
        <Image style={styles.homeTitleImage} source={require('../../../assets/icons/MAP_ICON.png')}/>
        <View>
          <Text style={styles.homeTitleText}>Near You</Text>
          <Text style={styles.homeTitleText1}>Jakarta, Indonesia</Text>
        </View>
        <TouchableOpacity style={{marginLeft:'auto'}}>
          <Image style={styles.homeTitleArrow} source={require('../../../assets/icons/arrow-right.png')}/>
        </TouchableOpacity>
      </View>
    

      <View style={{flexDirection:'row',width:'100%',marginBottom:80}}>
        <View style={{flex:1}}>
          <HomeNearItem indexData={{name:'Jawicenter Resto',location:'Pasuruan',distance:'1.2km'}}/>
          <HomeNearItem indexData={{name:'Jawicenter Resto',location:'Pasuruan',distance:'1.2km'}}/>
        </View>
        <View style={{flex:1}}>
          <HomeNearItem_1 indexData={{name:'Jawicenter Resto',location:'Pasuruan',distance:'1.2km'}}/>
          <HomeNearItem_1 indexData={{name:'Jawicenter Resto',location:'Pasuruan',distance:'1.2km'}}/>
        </View>
      </View>
    </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({



  homeTitleArrow:{width:20,height:20,marginRight:10,marginTop:13},
  homeTitleText1:{fontSize:12,fontWeight:'400',color:'#ACB7C2'},
  homeTitleText:{fontSize:16,fontWeight:'500'},
  homeTitleImage:{width:42,height:42,marginRight:10},
  homeTitleView:{flexDirection:'row',width:'100%',marginTop:10,marginBottom:20},
  homeSearchImgScroll:{

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
    marginTop:10,
    marginBottom:10,
    paddingBottom:15
  },
  homeview:{
    padding:20
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
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#F2F3F7',
    borderRadius:10,
    marginTop:10,
    marginBottom:10,
    borderColor:'#F2F3F7',
  },
  scrollView: {
    marginHorizontal: 0,
    width:'100%'
  },
});
