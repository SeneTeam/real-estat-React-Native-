import * as React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import MapView , { Polyline } from 'react-native-maps';
// import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  return (
    <View style={styles.container}>
      <MapView
        style={[{ flex: 1 },styles.map]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
