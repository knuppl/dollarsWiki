// ComponenteTrilogia.js
import React from 'react';
import { Image, Text, StyleSheet, Dimensions, View, TouchableOpacity, ScrollView } from 'react-native';

const width = Dimensions.get('screen').width;

const ComponenteTrilogia = ({ topo, listaFilmes, navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={estilos.container}>
        <Image source={topo && topo.imagem} style={estilos.imagemTrilogia} />
        <View style={estilos.texto}>
        </View>
      {listaFilmes?.map((item, index) => (
        <TouchableOpacity
          key={`filmes_${index}`}
          onPress={() => navigateToScreen(item.screenName)} style={estilos.botao}
        >   
            <Text style={estilos.texto}>{item.nome}</Text>
            <Image source={item.imagem} style={estilos.filmes} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  imagemTrilogia: {
    width: "100%",
    height: 500 / 708 * width,
    resizeMode: 'cover',
  },
  filmes: {
    width: "100%",
    height: 400 / 708 * width,
    resizeMode: 'cover',
    marginBottom: 30,
  },
  texto: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#260101',
  },
  detalhes: {
    fontSize: 16,
    color: '#260101',
    textAlign: 'justify',
  },
  botao: {
marginTop: -100,
marginBottom: 100
  }
});

export default ComponenteTrilogia;
