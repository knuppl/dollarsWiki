import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import sobreEnnioMorricone from '../mocks/ennio';
import ComponenteEnnioMorricone from '../componentes/componente.ennio';

export default function TelaClintEastwood(){
    return (
        <ScrollView style={estilos.container}>
            <ComponenteEnnioMorricone {...sobreEnnioMorricone}/>
        </ScrollView> 
    )

}

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#F2B279"
    },
  });