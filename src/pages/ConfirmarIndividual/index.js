import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Background } from '../../components/Background';

import {
  Container,
  Name,
  Assunto,
  Time,
  ConfirmarBotao,
  ConfirmarTexto,
  CorBotao,
} from './styles';

export default function ConfirmarIndividual({ route, navigation }) {
  const { amigo, time, assunto } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddAppointment() {
    await api.post('compromissossozinho', {
      amigo_id: amigo.id.toString(),
      data: time,
      assunto,
    });

    navigation.navigate('Inicial');
  }

  return (
    <Background>
      <Container>
        <Name>{amigo.nome}</Name>
        <Assunto>{assunto}</Assunto>
        <Time>{dateFormatted}</Time>

        <ConfirmarBotao onPress={handleAddAppointment}>
          <CorBotao>
            <ConfirmarTexto>Confirmar compromisso</ConfirmarTexto>
          </CorBotao>
        </ConfirmarBotao>
      </Container>
    </Background>
  );
}
