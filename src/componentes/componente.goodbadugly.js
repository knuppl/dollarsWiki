import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";

const width = Dimensions.get("screen").width;

export default function ComponenteGoodBadUgly({
  descricao,
  personagens,
  curiosidades,
  imagens,
}) {
  return (
    <>
      <View>
        <Image source={descricao.imagem} style={estilos.imagem} />
        <View style={estilos.padding}>
          <Text style={estilos.titulo}>{descricao.titulo}</Text>
          <Text style={estilos.tituloOriginal}>{descricao.tituloOriginal}</Text>
          <View style={estilos.espaco}>
            <Text style={estilos.detalhes}>{descricao.sinopseTitulo}</Text>
            <Text style={estilos.descricaoSinopse}>{descricao.sinopse}</Text>
          </View>
        </View>
        <Image source={imagens.imagem1} style={estilos.imagem1} />
        <View style={estilos.padding}>
          <View style={estilos.tecnica}>
            <Text style={estilos.descricaoSinopse}>{descricao.ficha}</Text>
            {personagens.map((item, index) => (
            <View key={`personagem_${index}`} style={estilos.ficha}>
      <Text style={estilos.personagens}>{item.personagens}</Text>
                <Text style={estilos.detalhes}>{item.nome}</Text>
              </View>
            ))}
            <View style={estilos.correcao}>
              <Text style={estilos.detalhes}>{descricao.diretor}</Text>
              <Text style={estilos.detalhes}>{descricao.roteiro}</Text>
              <Text style={estilos.detalhes}>{descricao.musica}</Text>
            </View>
          </View>
        </View>
        <Image source={imagens.imagem2} style={estilos.imagem}/>
        {curiosidades.map((item, index) => (
        <View key={`curiosidade_${index}`}>
          <View style={estilos.ficha}>
            <View style={estilos.padding}>
            <Text style={estilos.descricaoSinopse}>{item.titulo}</Text>
            <Text style={estilos.detalhes}>{item.descricao}</Text>
            </View>
            </View>
            <Image source={item.imagem} style={estilos.imagem} />
            </View>
        ))}

        </View>
    </>
  );
  }

const estilos = StyleSheet.create({
  imagem: {
    width: "100%",
    height: (400 / 768) * width,
    resizeMode: "cover",
  },
  imagem1: {
    width: "100%",
    height: (768 / 768) * width,
    resizeMode: "cover",
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#260101",
  },
  tituloOriginal: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "normal",
    color: "#260101",
  },
  descricaoSinopse: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#260101",
  },
  detalhes: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#260101",
    textAlign: "justify",
  },
  ficha: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: -9,
    marginTop: 0
  },

  personagens: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#260101',
  },
  espaco: {
    marginTop: 30,
    marginBottom: 20,
  },
  correcao: {
    marginTop: 25,
    textAlign: "justify",
  },
  padding: {
    padding: 10,
  },
});
