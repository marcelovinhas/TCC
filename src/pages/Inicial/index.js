/* eslint-disable prefer-destructuring */
/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */

import React from 'react';

import { Background } from '../../components/Background';

import {
  Text,
  Easy,
  EventosBotao,
  CalendarioBotao,
  AdicionarBotao,
  ComprasBotao,
  DespensaBotao,
  ConfiguracaoBotao,
} from './styles';

export default function Inicial({ route, navigation }) {
  const aux = route.params;
  const aux2 = route.params;
  const aux3 = route.params;
  const aux4 = route.params;

  return (
    <Background>
      <Easy>EASY</Easy>
      <EventosBotao onPress={() => navigation.navigate('Eventos')}>
        <Text>Agenda</Text>
      </EventosBotao>

      <CalendarioBotao onPress={() => navigation.navigate('Compromisso')}>
        <Text style={{ fontFamily: 'ROBOTO-ITALIC' }}>
          Compromisso com usuários
        </Text>
      </CalendarioBotao>

      <AdicionarBotao onPress={() => navigation.navigate('Individual')}>
        <Text>Compromisso individual</Text>
      </AdicionarBotao>

      <ComprasBotao onPress={() => navigation.navigate('Compras', {auxx:aux, auxx2:aux2, auxx3:aux3, auxx4:aux4})}>
        <Text>Lista de Compras</Text>
      </ComprasBotao>

      <DespensaBotao onPress={() => navigation.navigate('Despensa')}>
        <Text>Despensa</Text>
      </DespensaBotao>

      <ConfiguracaoBotao onPress={() => navigation.navigate('Configuracao')}>
        <Text>Configurações</Text>
      </ConfiguracaoBotao>
    </Background>
  );
}
