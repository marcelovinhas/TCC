import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TaskList({ data, handLeDelete }) {
  const [contador, alteraContador] = React.useState(data.contador);
  const [preco, setPreco] = useState('');
  const totalun = preco * data.contador;
  data.preco = totalun;

  function incrementa() {
    alteraContador(data.contador++);
  }
  function decrementa() {
    alteraContador(data.contador--);
  }

  return (
    <View style={styles.container0}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => handLeDelete(data)}>
          <Icon name="check" color="#29F36D" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            color: '#121212',
            fontSize: 25,
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          {data.task}
        </Text>

        <View style={styles.container2}>
          <TouchableOpacity onPress={decrementa}>
            <Icon name="remove" color="#121212" size={30} />
          </TouchableOpacity>
          <TextInput style={styles.task}>{data.contador}</TextInput>
          <TouchableOpacity onPress={incrementa}>
            <Icon name="add" color="#121212" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
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
            }}
            value={preco}
            onChangeText={(preco) => setPreco(preco)}
            placeholder="Preco"
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
            {totalun}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    marginBottom: 8,
    backgroundColor: '#FFF',
  },
  container2: {
    flex: 1,
    marginTop: 3,
    flexDirection: 'row',
    marginRight: 3,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'flex-end',
  },
  container3: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    flexDirection: 'row',
    elevation: 2.5,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  task: {
    color: '#121212',
    fontSize: 20,
    // paddingLeft: 8,
    // paddingRight: 8,
  },
});
