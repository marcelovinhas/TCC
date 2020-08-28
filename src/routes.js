import React from 'react';

import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

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
import NovoItem from './pages/NovoItem';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {signed ? (
        <Stack.Navigator headerMode="none" initialRouteName="Login">
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="Eventos" component={Eventos} />
          <Stack.Screen name="Calendario" component={Calendario} />
          <Stack.Screen name="Adicionar" component={Adicionar} />
          <Stack.Screen name="Compras" component={Compras} />
          <Stack.Screen name="Despensa" component={Despensa} />
          <Stack.Screen name="Configuracao" component={Configuracao} />
          <Stack.Screen name="NovoItem" component={NovoItem} />
          {/* <Stack.Screen name="Login" component={Login} /> */}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Esqueci" component={Esqueci} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
