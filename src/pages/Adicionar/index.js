import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '../../components/Background';

import {
  Caixa,
  Titulo,
  TituloInput,
  Local,
  LocalInput,
  Descricao,
  DescricaoInput,
  Data,
  DataInput,
  Hora,
  HoraInput,
  SairBotao,
  SairTexto,
  SalvarBotao,
  SalvarTexto,
} from './styles';

export default function Configuracao({ navigation }) {
  const localRef = useRef();
  const descricaoRef = useRef();
  const dataRef = useRef();
  const horaRef = useRef();

  const [titulo, setTitulo] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [min, setMin] = useState('');
  return (
    <Background>
      <Caixa>
        <View style={styles.superiorHeader}>
          <Text style={styles.superiorTitle}>Adicionar evento</Text>
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

      <Titulo>
        <TituloInput
          // icon="sentiment-satisfied"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Título"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => localRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          value={titulo}
          onChangeText={setTitulo}
        />
      </Titulo>

      <Local>
        <LocalInput
          icon="location-on"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Local"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => descricaoRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={localRef}
          value={local}
          onChangeText={setLocal}
        />
      </Local>

      <Descricao>
        <DescricaoInput
          icon="short-text"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Descrição"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => dataRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={descricaoRef}
          value={descricao}
          onChangeText={setDescricao}
        />
      </Descricao>

      <Data>
        <DataInput
          icon="event-available"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Data"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => horaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={dataRef}
          value={data}
          onChangeText={setData}
        />
      </Data>

      <Hora>
        <HoraInput
          icon="access-alarm"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Hora"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          // onSubmitEditing={() => usuarioRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={horaRef}
          value={hora}
          onChangeText={setHora}
        />
      </Hora>

      <View style={styles.superiorHeader}>
        <Text style={styles.alarmTitle}>Lembrar:</Text>
        <TextInput
          style={styles.input}
          value={min}
          onChangeText={(min) => setMin(min)}
          placeholder="--"
          keyboardType="numeric"
        />
        <Text style={styles.alarmTitle}>minutos antes</Text>
      </View>

      <View style={styles.superiorHeader}>
        <Text style={styles.repetirTitle}>Repetir:</Text>
        <Icon
          style={{ marginLeft: 22, marginRight: 5 }}
          name="home"
          color="#000"
          size={28}
        />
        <Text style={styles.repetir2Title}>Todo dia</Text>
      </View>
      <View style={styles.superiorHeader}>
        <Icon
          style={{ marginLeft: 110, marginRight: 5 }}
          name="home"
          color="#000"
          size={28}
        />
        <Text style={styles.repetir2Title}>Toda hora</Text>
      </View>
      <View style={styles.superiorHeader}>
        <Icon
          style={{ marginLeft: 110, marginRight: 5 }}
          name="home"
          color="#000"
          size={28}
        />
        <Text style={styles.repetir2Title}>Toda mês</Text>
      </View>
      <View style={styles.superiorHeader}>
        <Icon
          style={{ marginLeft: 110, marginRight: 5 }}
          name="home"
          color="#000"
          size={28}
        />
        <Text style={styles.repetir2Title}>Toda ano</Text>
      </View>
      <View style={styles.botaoHeader}>
        <SairBotao onPress={() => navigation.navigate('Inicial')}>
          <SairTexto>Sair</SairTexto>
        </SairBotao>

        <SalvarBotao onPress={() => navigation.navigate('Inicial')}>
          <SalvarTexto>Salvar</SalvarTexto>
        </SalvarBotao>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
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
  botaoHeader: {
    flexDirection: 'row',
    marginTop: 30,
  },
  alarmTitle: {
    // backgroundColor: '#dae2ed',
    marginTop: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    color: '#000',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#000000',
    borderRadius: 0,
    margin: 15,
    padding: 0,
    color: '#FFF',
    fontSize: 20,
    width: 25,
    height: 25,
    marginTop: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  repetirTitle: {
    // backgroundColor: '#dae2ed',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    color: '#000',
    fontSize: 20,
  },
  repetir2Title: {
    // backgroundColor: '#dae2ed',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    color: '#000',
    fontSize: 20,
  },
});
