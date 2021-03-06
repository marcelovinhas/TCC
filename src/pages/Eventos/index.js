import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { Background } from '../../components/Background';
import Appointment from '../../components/Appointment';

import { Title, Container, List, Caixa } from './styles';

export default function Calendario({ navigation }) {
  const [compromissos, setCompromissos] = useState([]);

  useEffect(() => {
    async function loadCompromissos() {
      const response = await api.get('compromissos');

      setCompromissos(response.data);
    }

    loadCompromissos();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`compromissos/${id}`);

    setCompromissos(
      compromissos.map((compromisso) =>
        compromisso.id === id
          ? {
              ...compromisso,
              canceled_at: response.data.canceled_at,
            }
          : compromisso
      )
    );
  }

  return (
    <Background>
      <Container>
        <Caixa>
          <View style={styles.superiorHeader}>
            <Text style={styles.superiorTitle}>Agenda</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
              <Icon
                style={{ marginLeft: 235, marginRight: 5, marginTop: 20 }}
                name="home"
                color="#FFF"
                size={40}
                // style={{height:60,width:60}}
              />
            </TouchableOpacity>
          </View>
        </Caixa>

        <List
          data={compromissos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
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
    marginRight: 20,
    color: '#FFF',
    fontSize: 25,
  },
  superiorHeader: {
    flexDirection: 'row',
  },
});
