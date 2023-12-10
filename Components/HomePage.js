import { StyleSheet, View, StatusBar } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const URL = "https://barbearia.systemmain.com.br/";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView
          source={{ uri: URL }}
          onLoad={() => console.log("Página Carregada !")}
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
