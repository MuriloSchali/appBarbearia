import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import { WebView } from 'react-native-webview'

const URL = 'https://barbearia.systemmain.com.br/',
  noConnectionImage = require('../assets/image-error.png')

export default function HomePage() {
  const [error, setError] = useState(false)

  const handleWebViewLoad = () => {
    console.log('Página Carregada !')
  }

  const handleWebViewError = (event) => {
    setError(true)
    console.error('Erro no carregamento do WebView:', event.nativeEvent)
  }

  const handleTryAgain = () => {
    setError(false)
  }

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <Image source={noConnectionImage} style={styles.errorImage} />
          <Text style={styles.errorText}>
            <Text style={styles.boldText}>
              Verifique sua conexão com a Internet!
            </Text>
          </Text>
          <TouchableOpacity
            onPress={handleTryAgain}
            style={styles.tryAgainButton}
          >
            <Text style={styles.tryAgainButtonText}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      {!error && (
        <View style={{ width: '100%', height: '100%' }}>
          <WebView
            source={{ uri: URL }}
            onLoad={handleWebViewLoad}
            onError={handleWebViewError}
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
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorImage: {
    width: 100, // Ajuste o tamanho conforme necessário
    height: 100, // Ajuste o tamanho conforme necessário
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
})
