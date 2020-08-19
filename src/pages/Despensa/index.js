import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TaskList from '../../components/TaskList';

import { Background } from '../../components/Background';

import { Caixa } from './styles';

export default function Compras({ navigation }) {
  const [task, setTask] = useState([
    { key: 1, task: 'Feijao' },
    { key: 2, task: 'Macarrao' },
    { key: 3, task: 'Farinha' },
    { key: 4, task: 'Arroz' },
  ]);

  return (
    <Background>
      <Caixa>
        <View style={styles.superiorHeader}>
          <Text style={styles.superiorTitle}>Despensa</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
            <Icon
              style={{ marginLeft: 220, marginRight: 5, marginTop: 20 }}
              name="home"
              color="#FFF"
              size={40}
              // style={{height:60,width:60}}
            />
          </TouchableOpacity>
        </View>
      </Caixa>

      <View style={styles.content}>
        <Text style={styles.title}>O que eu tenho na despensa?</Text>
      </View>

      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false} // desabilita a barrinha de rolagem do lado
        data={task} // vao todos os dados da lista
        keyExtractor={(item) => String(item.key)} // chave para organizar
        renderItem={({ item }) => <TaskList data={item} />} // renderiza item por item ate a lista acabar
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171d31',
  },
  title: {
    marginTop: 100,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
  },
  superiorTitle: {
    // backgroundColor: '#dae2ed',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    color: '#FFF',
    fontSize: 25,
  },
  superiorHeader: {
    flexDirection: 'row',
  },
});
