import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Info, Name, Time, Assunto } from './styles';

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.data), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.data]);

  return (
    <Container past={data.passado}>
      <Info>
        <Name>{data.amigo.nome}</Name>
        <Assunto>{data.assunto}</Assunto>
        <Time>{dateParsed}</Time>
      </Info>

      {data.cancelavel && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="delete" size={25} color="#D61111" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
