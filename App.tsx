import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './navigation';

const Stack = createNativeStackNavigator();

export default function App() {
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
