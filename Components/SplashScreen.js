import React, { useEffect } from 'react';
import { View, Animated, StyleSheet, Image , StatusBar} from 'react-native';


const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000, // Ajuste a duração conforme necessário
        useNativeDriver: true,
      }
    ).start(() => {
      // Navegue para a próxima tela ou faça qualquer ação necessária
      navigation.replace('Home'); // Substitua 'Home' pelo nome da sua próxima tela
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#D9D9D9" barStyle="dark-content" />
      <Animated.Image
        source={require('../assets/logo-inicial.png')}
        style={{ ...styles.image, opacity: fadeAnim }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E', // Cor de fundo da sua splash screen
  },
  image: {
    width: 200, // Ajuste o tamanho conforme necessário
    height: 200, // Ajuste o tamanho conforme necessário
  },
});

export default SplashScreen;
