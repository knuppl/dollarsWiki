import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import ComponenteTrilogia from '../componentes/componente.trilogia';
import trilogia from '../mocks/trilogia';
import ComponenteMenu from '../componentes/componente.menu';
import menu from '../mocks/menu'

export default function Index({navigation}) {
  return(
    //<Text onPress={() => navigation.navigate('tela2')}>Olá!</Text>
<ScrollView style={estilos.container}>
<ComponenteTrilogia topo={trilogia.topo} />
   <ComponenteMenu {...menu} navigation={navigation} />
  <ComponenteTrilogia listaFilmes={trilogia.filmes} navigation={navigation} />
</ScrollView>

    );
}

const estilos = StyleSheet.create({
container: {
  backgroundColor: "#F2B279"
}
})