import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/telas/index';
import TelaFistful from './src/telas/telaFistful';
import TelaDollarsMore from './src/telas/telaDollarsMore';
import TelaGoodBadUgly from './src/telas/telaGoodBadUgly';
import TelaClintEastwood from './src/telas/telaClintEastwood';
import TelaSergioLeone from './src/telas/telaSergioLeone'
import TelaEnnioMorricone from './src/telas/telaEnnioMorricone'
import TelaSobre from './src/telas/telaSobre'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trilogia dos Dólares" component={Index} />
        <Stack.Screen name="Por um Punhado de Dólares" component={TelaFistful} />
        <Stack.Screen name="Por uns Dólares a Mais" component={TelaDollarsMore}/>
        <Stack.Screen name="O Bom, o Mau e o Feio" component={TelaGoodBadUgly}/>
        <Stack.Screen name="Sobre a Trilogia" component={TelaSobre}/>
        <Stack.Screen name="Clint Eastwood" component={TelaClintEastwood}/>
        <Stack.Screen name="Sergio Leone" component={TelaSergioLeone}/>
        <Stack.Screen name="Ennio Morricone" component={TelaEnnioMorricone}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
