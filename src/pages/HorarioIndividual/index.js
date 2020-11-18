import React, { useState, useEffect } from 'react';
// import { TouchableOpacity } from 'react-native';

import api from '../../services/api';

import { Background } from '../../components/Background';
import DateInput from '../../components/DateInput/index';

import {
  Container,
  HourList,
  Hour,
  Title,
  Compromisso,
  CompromissoInput,
} from './styles';

export default function HorarioIndividual({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);
  const [assunto, setAssunto] = useState('');

  const { amigo } = route.params;

  useEffect(() => {
    async function loadLivre() {
      const response = await api.get(`amigos/${amigo.id}/livre`, {
        params: {
          data: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadLivre();
  }, [date, amigo.id]);

  function handleConfirmar(time) {
    navigation.navigate('ConfirmarIndividual', {
      amigo,
      time,
      assunto,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <Compromisso data={assunto} keyExtractor={(item) => item.assunto}>
          <CompromissoInput
            icon="event-note"
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="words"
            placeholder="Compromisso"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            data={assunto}
            onChangeText={setAssunto}
          />
        </Compromisso>

        <HourList
          data={hours}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleConfirmar(item.value)}
              enabled={item.livre}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}
