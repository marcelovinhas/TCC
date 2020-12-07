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
import Compromisso from './pages/Compromisso';
import Individual from './pages/Individual';
import Compras from './pages/Compras';
import Despensa from './pages/Despensa';
import Configuracao from './pages/Configuracao';
import NovoItem from './pages/NovoItem';
import RedefinirSenha from './pages/RedefinirSenha';
import Horario from './pages/Horario';
import Confirmar from './pages/Confirmar';
import HorarioIndividual from './pages/HorarioIndividual';
import ConfirmarIndividual from './pages/ConfirmarIndividual';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {signed ? (
        <Stack.Navigator headerMode="none" initialRouteName="Inicial">
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="Eventos" component={Eventos} />
          <Stack.Screen name="Compromisso" component={Compromisso} />
          <Stack.Screen name="Individual" component={Individual} />
          <Stack.Screen name="Compras" component={Compras} />
          <Stack.Screen name="Despensa" component={Despensa} />
          <Stack.Screen name="Configuracao" component={Configuracao} />
          <Stack.Screen name="NovoItem" component={NovoItem} />
          <Stack.Screen name="Horario" component={Horario} />
          <Stack.Screen name="Confirmar" component={Confirmar} />
          <Stack.Screen
            name="HorarioIndividual"
            component={HorarioIndividual}
          />
          <Stack.Screen
            name="ConfirmarIndividual"
            component={ConfirmarIndividual}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Esqueci" component={Esqueci} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
          </>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
