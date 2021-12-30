import * as React from 'react';
import { StyleSheet,Dimensions, TouchableOpacity, Image } from 'react-native';
import MapView , { Polyline } from 'react-native-maps';
// import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

export default function FavoriteDetailScreen({ navigation }: RootTabScreenProps<'Search'>) {
  const win = Dimensions.get('window');
  return (
    <View style={styles.homeview}>
      <View style={{flex:2,paddingTop:20,paddingLeft:20,flexDirection:'row',width:win.width-30}}>
        <Text style={styles.title}>My Favorites</Text>
        <View style={{flexDirection:'row',marginTop:15,width:40,marginLeft:'auto'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('FavoriteDetail')}}>
            <Image style={{width:20,height:20,marginRight:5}} source={require('../../../assets/icons/Group.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{width:20,height:20,marginRight:25}} source={require('../../../assets/icons/sliders.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:20}}>
        <MapView
          style={[{ flex: 1 },styles.map]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeview:{
    
    flex:1
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    paddingRight:'15%'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
