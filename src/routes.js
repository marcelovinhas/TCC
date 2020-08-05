import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Inicial from './pages/Inicial';
import Esqueci from './pages/Esqueci';
import Cadastro from './pages/Cadastro';
import Eventos from './pages/Eventos';
import Calendario from './pages/Calendario';
import Adicionar from './pages/Adicionar';
import Compras from './pages/Compras';
import Despensa from './pages/Despensa';
import Configuracao from './pages/Configuracao';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Esqueci" component={Esqueci} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Eventos" component={Eventos} />
      <Stack.Screen name="Calendario" component={Calendario} />
      <Stack.Screen name="Adicionar" component={Adicionar} />
      <Stack.Screen name="Compras" component={Compras} />
      <Stack.Screen name="Despensa" component={Despensa} />
      <Stack.Screen name="Configuracao" component={Configuracao} />
    </Stack.Navigator>
  );
}
