import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

import SplashScreen from './Components/SplashScreen'
import HomePage from './Components/HomePage'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          style={styles.container}
          headerMode="tranparent"
          screenOptions={{}}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Adicionado para ocupar toda a largura
    height: '100%',
  },
})
