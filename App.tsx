import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import config from './aws-exports';
import Amplify from '@aws-amplify/core';

Amplify.configure(config);

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