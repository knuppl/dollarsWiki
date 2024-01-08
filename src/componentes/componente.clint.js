import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";

const width = Dimensions.get("screen").width;

export default function ComponenteClintEastwood({ paper, sobre }) {
  return (
    <View>
      <Image source={paper.imagem} style={estilos.imagem} />
      <View style={estilos.padding}>
      <Text style={estilos.titulo}>{paper.nome}</Text>
      </View>
      {sobre.map((item, index) => (
        <View key={index}>
            <View style={estilos.padding}>
            <Text style={estilos.titulo}>{item.nome}</Text>
          <Text style={estilos.titulo}>{item.titulo}</Text>
          <Text style={estilos.descricao}>{item.descricao}</Text>
          </View>
          <Image source={item.imagem} style={estilos.imagem} />
          </View>
      ))}
      </View>
  );
  }

const estilos = StyleSheet.create({
  imagem: {
    width: "100%",
    height: (400 / 768) * width,
    resizeMode: "cover",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#260101",
  },
  descricao: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#260101",
    textAlign: "justify",
  },
  padding: {
    padding: 10
  }
});
