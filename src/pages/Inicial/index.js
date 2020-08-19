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

export default function Inicial({ navigation }) {
  return (
    <Background>
      <Easy>EASY</Easy>
      <EventosBotao onPress={() => navigation.navigate('Eventos')}>
        <Text>Próximos Eventos</Text>
      </EventosBotao>

      <CalendarioBotao onPress={() => navigation.navigate('Calendario')}>
        <Text style={{ fontFamily: 'ROBOTO-ITALIC' }}>Calendário</Text>
      </CalendarioBotao>

      <AdicionarBotao onPress={() => navigation.navigate('Adicionar')}>
        <Text>Adicionar Evento</Text>
      </AdicionarBotao>

      <ComprasBotao onPress={() => navigation.navigate('Compras')}>
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
