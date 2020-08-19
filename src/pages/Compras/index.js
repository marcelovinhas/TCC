import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TaskList from '../../components/TaskList';

import { Background } from '../../components/Background';

import { Caixa } from './styles';

export default function Compras({ navigation }) {
  const [task, setTask] = useState([
    { key: 1, task: 'arroz' },
    { key: 2, task: 'macarrao' },
    { key: 3, task: 'farinha' },
  ]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  function handleAdd() {
    if (input === '') return;

    const data = {
      key: input,
      task: input,
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
  });

  return (
    <Background>
      <Caixa>
        <View style={styles.superiorHeader}>
          <Text style={styles.superiorTitle}>Lista de compras</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
            <Icon
              style={{ marginLeft: 130, marginRight: 5, marginTop: 20 }}
              name="home"
              color="#FFF"
              size={40}
              // style={{height:60,width:60}}
            />
          </TouchableOpacity>
        </View>
      </Caixa>

      <View style={styles.content}>
        <Text style={styles.title}>O que preciso comprar?</Text>
      </View>

      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false} // desabilita a barrinha de rolagem do lado
        data={task} // vao todos os dados da lista
        keyExtractor={(item) => String(item.key)} // chave para organizar
        renderItem={({ item }) => (
          <TaskList data={item} handLeDelete={handleDelete} />
        )} // renderiza item por item ate a lista acabar
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={() => setOpen(false)}>
            <Icon
              style={{ marginLeft: 5, marginRight: 5 }}
              name="reply"
              color="#000"
              size={40}
              // style={{height:60,width:60}}
            />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Novo Item</Text>
        </View>

        <View style={styles.modalBody}>
          <TextInput
            multiline // faz quebra de linha no texto
            placeholderTextColor="#747474"
            autoCorrect={false}
            placeholder="Add Item"
            style={styles.input}
            value={input}
            onChangeText={(texto) => setInput(texto)}
          />

          <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
            <Text style={styles.handleAddText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity style={styles.fab}>
        <Icon
          name="add-circle"
          color="#000"
          size={60}
          onPress={() => setOpen(true)}
          // style={{height:60,width:60}}
        />
      </TouchableOpacity>
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
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#dae2ed',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modal: {
    flex: 1,
    backgroundColor: '#dae2ed',
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 23,
    color: '#000',
  },
  modalBody: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#dae2ed', // caixa de texto Add Item
    padding: 9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  handleAdd: {
    backgroundColor: '#dae2ed',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },
  handleAddText: {
    fontSize: 20,
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
