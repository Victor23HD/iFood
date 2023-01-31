import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, StatusBar, View } from 'react-native';
import Home from "./src/screens/home";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppRoutes from './src/routes/AppRoutes';



function App() {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Tab = createBottomTabNavigator();

  return <>
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor} />
    <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white, }} />
    <AppRoutes/>
  </SafeAreaView>
  </>
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
