import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';
import LottieView from 'lottie-react-native';

const URL = 'https://barbearia.systemmain.com.br/';
const noConnectionImage = require('../assets/image-error.png');

export default function HomePage() {
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState(null);

  const handleWebViewLoad = () => {
    console.log('Página Carregada !');
  };

  const handleWebViewError = (event) => {
    setError(true);
    setErrorType(event.nativeEvent.description);
    console.error('Erro no carregamento do WebView:', event.nativeEvent);
  };

  const handleTryAgain = () => {
    setError(false);
  };

  return (

    //Caso não haja conexão com a Internet ! 
    <View style={styles.container}>
      <StatusBar barStyle="000000" />
      {error && (
        <View style={styles.errorContainer}>
          <Image source={noConnectionImage} style={styles.errorImage} />
          <Text style={styles.errorText}>Verifique sua conexão com a Internet !</Text>
         
          <TouchableOpacity
            onPress={handleTryAgain}
            style={styles.tryAgainButton}>

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
  onHttpError={handleWebViewError}
  startInLoadingState={true}

  renderLoading={() => (
    <View style={styles.loadingContainer}>
      <StatusBar backgroundColor="#A9A9A9'" barStyle="dark-content" />
      < ActivityIndicator size="large"  color="white" />
    </View>
  )}
  
  renderError={() => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Erro ao carregar a página</Text>
      <TouchableOpacity onPress={handleTryAgain} style={styles.tryAgainButton}>
        <Text style={styles.tryAgainButtonText}>Tentar Novamente</Text>
      </TouchableOpacity>
    </View>
  )}
  
/>
        </View>
      )}
    </View>
  );
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
