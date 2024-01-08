import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import fistful from '../mocks/fistful';
import ComponenteFistful from '../componentes/componente.fistful';

export default function TelaFistfull(){
    return (
        <ScrollView style={estilos.container}>
            <ComponenteFistful {...fistful}/>
        </ScrollView> 
    )

}

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#F2B279"
    },
  });