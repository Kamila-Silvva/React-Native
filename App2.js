import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'; // Importando o componente Image

function App() {

  return (
    <View>
      <Logo/>
      <Titulo/>
      <Conteudo/>
    </View>
  )
}

export default App;

function Logo() {
  return (
    <View>
       <Image source={{uri: 'https://cdn.fotofits.com/petzlover/gallery/img/l/shih-tzu-788878.jpg'}} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 20 }} />
    </View>
  )
}

function Titulo() {
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'gray', padding: 10}}>Título</Text>
    </View>
  )
}

function Conteudo() {
  let Conteudo = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impresso"
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{Conteudo}</Text>
    </View>
  )
}






