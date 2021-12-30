import * as React from 'react';
import { StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';

import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

import HomePopularItem from '../../components/home/HomePopularItem';

export default function FavoriteScreen({ navigation }: RootTabScreenProps<'Favorite'>) {
  const win = Dimensions.get('window');
  const items = [
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'},
    {name:'Orchad House',price:'Rp. 2.000.000.000 / Year',bedroomNum:'5 Bedroom',bathroomNum:'2 Bathroom'}
  ]
  return (
    <View style={styles.homeview}>
      <View style={{flex:2,flexDirection:'row',width:win.width-60,marginLeft:'auto',marginRight:'auto'}}>
        <Text style={styles.title}>My Favorites</Text>
        <View style={{flexDirection:'row',marginTop:15,width:40,marginLeft:'auto'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('FavoriteDetail')}}>
            <Image style={{width:20,height:20,marginRight:5}} source={require('../../../assets/icons/Group_(2).png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{width:20,height:20,marginRight:25}} source={require('../../../assets/icons/sliders.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:18,backgroundColor:'white',width:'99%'}}>
        <ScrollView>
          {items.map((item,index)=>{return<HomePopularItem key={index} indexData={item}/>})}
        </ScrollView>
      </View>
     <View style={{height:70}}>

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
