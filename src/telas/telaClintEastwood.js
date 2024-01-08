import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import sobreClintEastwood from '../mocks/clint';
import ComponenteClintEastwood from '../componentes/componente.clint';

export default function TelaClintEastwood(){
    return (
        <ScrollView style={estilos.container}>
            <ComponenteClintEastwood {...sobreClintEastwood}/>
        </ScrollView> 
    )

}

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#F2B279"
    },
  });