import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';
import createRouter from './routes';
import { setTopLevelNavigator } from '~/services/navigation';

export default function App() {
  const Routes = createRouter();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#1a288b" />
      <Routes ref={(navigatorRef) => setTopLevelNavigator(navigatorRef)} />
    </>
  );
}
