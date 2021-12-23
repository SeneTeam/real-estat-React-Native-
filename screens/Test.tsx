import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
// import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function WelcomeScreen({ navigation }: RootStackScreenProps<'Welcome'>) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/welcome.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
  },
  image: {
    width: '100%',
    height: '62.5%',
    resizeMode: 'contain',
  }
});
