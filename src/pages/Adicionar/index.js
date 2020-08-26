import React, { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Picker,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SairBotao,
  SairTexto,
  SalvarBotao,
  SalvarTexto,
  styles,
} from './styles';

import { Background } from '../../components/Background';

export default function Adicionar({ navigation }) {
  const localRef = useRef();
  const descricaoRef = useRef();
  const dataRef = useRef();
  const horaRef = useRef();
  const lembrarhoraRef = useRef();
  const lembrarminRef = useRef();

  const [titulo, setTitulo] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const [selectedValue, setSelectedValue] = useState('');
  const [lembrarhora, setLembrarhora] = useState('');
  const [lembrarmin, setlembrarmin] = useState('');

  return (
    <Background>
      <View style={{ flexDirection: 'row', backgroundColor: '#000' }}>
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

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        // style={{flex: 1}}
      >
        <TextInput
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Adicionar título"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => localRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          value={titulo}
          onChangeText={setTitulo}
          // multiline // faz quebra de linha no texto
          placeholderTextColor="#747474"
          style={styles.titulo}
        />

        <View style={styles.caixaBranca}>
          <Icon
            style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
            name="location-on"
            color="#000"
            size={30}
          />
          <TextInput
            style={{ fontSize: 18 }}
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="words"
            placeholder="Local"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            onSubmitEditing={() => descricaoRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            ref={localRef}
            value={local}
            onChangeText={setLocal}
            // multiline // faz quebra de linha no texto
            placeholderTextColor="#747474"
          />
        </View>

        <View style={styles.caixaBranca}>
          <Icon
            style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
            name="short-text"
            color="#000"
            size={30}
          />
          <TextInput
            style={{ fontSize: 18 }}
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="words"
            placeholder="Descricao"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            onSubmitEditing={() => dataRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            ref={descricaoRef}
            value={descricao}
            onChangeText={setDescricao}
            // multiline // faz quebra de linha no texto
            placeholderTextColor="#747474"
          />
        </View>

        <View style={styles.caixaBranca}>
          <Icon
            style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
            name="event-available"
            color="#000"
            size={30}
          />
          <TextInput
            style={{ fontSize: 18 }}
            keyboardType="numeric"
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="words"
            placeholder="Data"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            onSubmitEditing={() => horaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            ref={dataRef}
            value={data}
            onChangeText={setData}
            // multiline // faz quebra de linha no texto
            placeholderTextColor="#747474"
          />
        </View>

        <View style={styles.caixaBranca}>
          <Icon
            style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
            name="access-alarm"
            color="#000"
            size={30}
          />
          <TextInput
            style={{ fontSize: 18 }}
            keyboardType="numeric"
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="words"
            placeholder="Hora"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            onSubmitEditing={() => lembrarhoraRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            ref={horaRef}
            value={hora}
            onChangeText={setHora}
            // multiline // faz quebra de linha no texto
            placeholderTextColor="#747474"
          />
        </View>

        <View style={styles.caixaBranca}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
              name="notifications"
              color="#000"
              size={30}
            />
            <Text style={styles.lembrarTitle}>Lembrar:</Text>
            <View style={styles.lembrarContainer}>
              <TextInput
                keyboardType="numeric"
                placeholderTextColor="#747474"
                autoCorrect={false}
                placeholder="00"
                color="#000"
                returnKeyType="next" // muda o botão de passar adiante do teclado
                onSubmitEditing={() => lembrarminRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
                ref={lembrarhoraRef}
                value={lembrarhora}
                onChangeText={(texto) => setLembrarhora(texto)}
              />
              <Text style={{ color: '#000', fontSize: 15, marginRight: 5 }}>
                :
              </Text>
              <TextInput
                keyboardType="numeric"
                placeholderTextColor="#747474"
                autoCorrect={false}
                placeholder="00"
                color="#000"
                returnKeyType="next" // muda o botão de passar adiante do teclado
                onSubmitEditing={() => lembrarminRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
                ref={lembrarminRef}
                value={lembrarmin}
                onChangeText={(texto) => setlembrarmin(texto)}
              />
            </View>
            <Text style={styles.lembrarTitle}>antes</Text>
          </View>
        </View>

        <View style={styles.caixaBranca}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
              name="refresh"
              color="#000"
              size={30}
            />
            <Text style={styles.repetirTitle}>Repetir:</Text>
            <View style={styles.repetirContainer}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item2 label="Nao repetir" value="nr" />
                <Picker.Item2 label="Todo dia" value="td" />
                <Picker.Item2 label="Toda semana" value="ts" />
                <Picker.Item2 label="Todo mes" value="tm" />
                <Picker.Item2 label="Todo ano" value="ta" />
              </Picker>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.botaoHeader}>
        <SairBotao onPress={() => navigation.navigate('Inicial')}>
          <SairTexto>Sair</SairTexto>
        </SairBotao>

        <SalvarBotao
          onPress={() =>
            Alert.alert('Evento adicionado!', '', [
              {
                text: 'Voltar para tela inicial',
                onPress: () => navigation.navigate('Inicial'),
              },
            ])
          }
        >
          <SalvarTexto>Salvar</SalvarTexto>
        </SalvarBotao>
      </View>
    </Background>
  );
}
