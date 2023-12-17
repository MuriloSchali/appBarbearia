import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native'
import { WebView } from 'react-native-webview'

const URL = 'https://barbearia.systemmain.com.br/'
const noConnectionImage = require('../assets/image-error.png')

export default function HomePage() {
  const [error, setError] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [fadeAnim] = useState(new Animated.Value(0))

  const handleWebViewLoad = () => {
    console.log('Página Carregada!')
  }

  const handleWebViewError = (event) => {
    setError(true)
    console.error('Erro no carregamento do WebView:', event.nativeEvent)
  }

  const handleTryAgain = () => {
    setError(false)
  }

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => {
      // Callback chamado quando a animação é concluída
      setAnimationComplete(true)
    })
  }, [fadeAnim])

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <StatusBar barStyle="#A9A9A9" />
          <Image source={noConnectionImage} style={styles.errorImage} />
          <Text style={styles.errorText}>
            Verifique sua conexão com a Internet!
          </Text>
          <TouchableOpacity
            onPress={handleTryAgain}
            style={styles.tryAgainButton}
          >
            <Text style={styles.tryAgainButtonText}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      {animationComplete && !error && (
        <View style={{ width: '100%', height: '100%' }}>
          <WebView
            source={{ uri: URL }}
            onLoad={handleWebViewLoad}
            onError={handleWebViewError}
            onHttpError={handleWebViewError}
            startInLoadingState={true}
            renderLoading={() => (
              <View style={styles.loadingContainer}>
                <StatusBar backgroundColor="#A9A9A9" barStyle="dark-content" />
                <Animated.Image
                  source={require('../assets/logo-inicial.png')}
                  style={{ ...styles.image, opacity: fadeAnim }}
                />
              </View>
            )}
            renderError={() => (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Erro ao carregar a página</Text>
                <TouchableOpacity
                  onPress={handleTryAgain}
                  style={styles.tryAgainButton}
                >
                  <Text style={styles.tryAgainButtonText}>
                    Tentar Novamente
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // ou uma largura específica
    height: '100%',
  },
  errorImage: {
    width: 100, // ou uma largura específica
    height: 100, // ou uma altura específica
    marginBottom: 20,
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tryAgainButton: {
    marginTop: 20,
    backgroundColor: '#A9A9A9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  tryAgainButtonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 'auto',
    height: 'auto',
  },
})
