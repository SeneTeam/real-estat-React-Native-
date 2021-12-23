import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './navigation';
import Amplify, { Auth } from 'aws-amplify';
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
const Stack = createNativeStackNavigator();

 function App() {
  Amplify.configure(config);
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <SafeAreaProvider>
          <Navigation colorScheme={'light'}/>
        </SafeAreaProvider>
      </>
    );
  }
}
export default App