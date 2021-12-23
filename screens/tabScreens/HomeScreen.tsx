import * as React from 'react';
import { StyleSheet ,TouchableOpacity} from 'react-native';
import { Auth } from 'aws-amplify';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import Colors from '../../constants/Colors';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  async function logout() {
    try {
      await Auth.signOut({ global: true });
      navigation.navigate('Login')
      
  } catch (error) {
      console.log('error signing out: ', error);
  }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo  path="/screens/TabOneScreen.tsx" />
      <TouchableOpacity onPress={logout} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
           Logout
          </Text>
        </TouchableOpacity>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
