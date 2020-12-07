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
import Despensa from '../Despensa';
import { Background } from '../../components/Background';
import { Caixa, styles } from './styles';

export default function Compras({ navigation }) {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [total, setTotal] = useState(0);
  const [precoo, setPrecoo] = useState(0);
  const totalu = precoo * 3;

  function handleAdd() {
    if (input === '') return;
    if (input2 === '') return;

    const data = {
      key: input,
      task: input,
      contador: input2,
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');
    setInput2('');
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
              style={{ marginLeft: 130, marginRight: 15, marginTop: 20 }}
              name="home"
              color="#FFF"
              size={40}
              // style={{height:60,width:60}}
            />
          </TouchableOpacity>
        </View>
      </Caixa>

      <View style={styles.content}>
        <Text style={styles.title}>O que eu preciso comprar?</Text>
      </View>

      <View
        style={{
          width: 392,
          height: 100,
          marginBottom: 8,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: '#fff',
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 3,
            flexDirection: 'row',
            marginRight: 3,
            alignItems: 'center',
            backgroundColor: '#FFF',
            justifyContent: 'flex-end',
          }}
        >
          <Text
            style={{
              color: '#121212',
              fontSize: 25,
              paddingLeft: 11,
              paddingRight: 8,
            }}
          >
            Macarrão
          </Text>

          <View
            style={{
              flex: 1,
              // marginTop: 3,
              flexDirection: 'row',
              marginRight: 1,
              alignItems: 'center',
              backgroundColor: '#FFF',
              justifyContent: 'flex-end',
            }}
          >
            <TextInput style={{ color: '#121212', fontSize: 20 }}>
              3 kg
            </TextInput>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 8,
            flexDirection: 'row',
            elevation: 2.5,
            justifyContent: 'space-between',
            backgroundColor: '#FFF',
          }}
        >
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#000', fontSize: 20, paddingLeft: 8 }}>
              R$
            </Text>
            <TextInput
              style={{
                color: '#7E7662',
                fontSize: 20,
                paddingLeft: 8,
                paddingRight: 8,
                marginBottom: -3,
              }}
              value={precoo}
              onChangeText={(precoo) => setPrecoo(precoo)}
              placeholder="Preço"
              keyboardType="numeric"
            />
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#000', fontSize: 20, paddingLeft: 8 }}>
              R$
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 20,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              {totalu}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        // numColumns={2}
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
              style={{ marginLeft: 5, marginRight: -10 }}
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
          <TextInput
            multiline // faz quebra de linha no texto
            placeholderTextColor="#747474"
            autoCorrect={false}
            placeholder="Quantidade"
            keyboardType="numeric"
            style={styles.input2}
            value={input2}
            onChangeText={(texto2) => setInput2(texto2)}
          />

          <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
            <Text style={styles.handleAddText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.fixos}>
        <Text style={{ color: '#000', fontSize: 20, paddingLeft: 8 }}>R$</Text>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          {totalu}
        </Text>
      </View>

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
