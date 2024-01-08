import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import sobreSergioLeone from '../mocks/leone';
import ComponenteSergioLeone from '../componentes/componente.leone';

export default function TelaClintEastwood(){
    return (
        <ScrollView style={estilos.container}>
            <ComponenteSergioLeone {...sobreSergioLeone}/>
        </ScrollView> 
    )

}

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#F2B279"
    },
  });