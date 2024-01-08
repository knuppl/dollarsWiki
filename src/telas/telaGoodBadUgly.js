import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import thegoodbadugly from '../mocks/goodbadugly';
import ComponenteGoodBadUgly from '../componentes/componente.goodbadugly';

export default function TelaGoodBadUgly(){
    return (
        <ScrollView style={estilos.container}>
            <ComponenteGoodBadUgly {...thegoodbadugly}/>
        </ScrollView> 
    )

}

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#F2B279"
    },
  });