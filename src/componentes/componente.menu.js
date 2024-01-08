import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const ComponenteMenu = ({ suspenso, navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={estilos.container}>
      {suspenso.map(({ item, screenName }) => (
        <TouchableOpacity
          key={item}
          style={estilos.botao}
          onPress={() => navigateToScreen(screenName)}
        >
          <Text style={estilos.detalhes}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: "#731702",
  },
  botao: {
    padding: 5,
    marginLeft: 10,
    marginVertical: 10,
    backgroundColor: "#F2D7B6",
    borderRadius: 5,
  },
  detalhes: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#260101",
    textAlign: "justify"
  },
});

export default ComponenteMenu;