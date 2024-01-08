import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import sobreTrilogiaDosDolares from '../mocks/sobre';
import ComponenteSobreTrilogiaDosDolares from '../componentes/componente.sobre';

export default function TelaSobre(){
    return (
        <ScrollView style={estilos.container}>
            <ComponenteSobreTrilogiaDosDolares {...sobreTrilogiaDosDolares}/>
        </ScrollView> 
    )

}

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#F2B279"
    },
  });