import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Components/SplashScreen';
import HomePage from './Components/HomePage';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator  style={styles.container} headerMode="tranparent" screenOptions={{}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    width: '100%',  // Adicionado para ocupar toda a largura
    height: '100%',
  }
})
