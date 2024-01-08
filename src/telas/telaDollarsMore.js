import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import fewdollarsmore from '../mocks/dollarsmore';
import ComponenteDollarsMore from '../componentes/componente.dollarsmore';

export default function TelaDollarsMore(){
    return (
        <ScrollView style={estilos.container}>
            <ComponenteDollarsMore {...fewdollarsmore}/>
        </ScrollView> 
    )

}

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#F2B279"
    },
  });