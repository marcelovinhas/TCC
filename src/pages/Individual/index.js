import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { Background } from '../../components/Background';
// import Appointment from '../../components/Appointment';

import {
  Caixa,
  Title,
  Container,
  ProviderList,
  Provider,
  Name,
} from './styles';

export default function Individual({ navigation }) {
  const [amigos, setAmigos] = useState([]);

  useEffect(() => {
    async function loadAmigos() {
      const response = await api.get('sozinho');

      setAmigos(response.data);
    }

    loadAmigos();
  }, []);

  return (
    <Background>
      <Caixa>
        <View style={styles.superiorHeader}>
          <Text style={styles.superiorTitle}>Compromisso Individual</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
            <Icon
              style={{ marginLeft: 40, marginRight: 5, marginTop: 20 }}
              name="home"
              color="#FFF"
              size={40}
              // style={{height:60,width:60}}
            />
          </TouchableOpacity>
        </View>
      </Caixa>
      <Container>
        <Title>Veja seus horários disponíveis</Title>
        <ProviderList
          data={amigos}
          keyExtractor={(amigo) => String(amigo.id)}
          renderItem={({ item: amigo }) => (
            <Provider
              onPress={() =>
                navigation.navigate('HorarioIndividual', { amigo })
              }
            >
              <Name>{amigo.nome}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  superiorTitle: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    color: '#FFF',
    fontSize: 25,
  },
  superiorHeader: {
    flexDirection: 'row',
  },
});
