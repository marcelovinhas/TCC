import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '../../components/Background';

import {
  Caixa,
  Text,
  Nome,
  Sobrenome,
  SobrenomeInput,
  NomeInput,
  Usuario,
  UsuarioInput,
  Senha,
  SenhaInput,
  Email,
  EmailInput,
  SairBotao,
  SairTexto,
  SalvarBotao,
  SalvarTexto,
} from './styles';

export default function Configuracao({ navigation }) {
  const usuarioRef = useRef();
  const sobrenomeRef = useRef();
  const emailRef = useRef();
  const senhaRef = useRef();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <Background>
      <Caixa>
        <View style={styles.superiorHeader}>
          <Text style={styles.superiorTitle}>Configuracoes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
            <Icon
              style={{ marginLeft: 150, marginRight: 5, marginTop: 20 }}
              name="home"
              color="#FFF"
              size={40}
              // style={{height:60,width:60}}
            />
          </TouchableOpacity>
        </View>
      </Caixa>

      <Text>Editar perfil</Text>
      <Nome>
        <NomeInput
          icon="sentiment-satisfied"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Nome"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => sobrenomeRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          value={nome}
          onChangeText={setNome}
        />
      </Nome>

      <Sobrenome>
        <SobrenomeInput
          icon="sentiment-satisfied"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Sobrenome"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => usuarioRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={sobrenomeRef}
          value={sobrenome}
          onChangeText={setSobrenome}
        />
      </Sobrenome>

      <Usuario>
        <UsuarioInput
          icon="person-outline"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="none" // não coloca letra maiúscula
          placeholder="Nome de usuário"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => emailRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={usuarioRef}
          value={usuario}
          onChangeText={setUsuario}
        />
      </Usuario>

      <Text>Configuracoes da conta</Text>
      <Email>
        <EmailInput
          icon="mail-outline"
          keyboardType="email-address" // adiciona @ e .com automaticamente
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="none" // não coloca letra maiúscula
          placeholder="Email"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => senhaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={emailRef}
          value={email}
          onChangeText={setEmail}
        />
      </Email>
      <Senha>
        <SenhaInput
          icon="lock-open"
          secureTextEntry // não mostra o texto
          placeholder="Senha"
          returnKeyType="next"
          // onSubmitEditing={() => confirmarSenhaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={senhaRef}
          value={senha}
          onChangeText={setSenha}
        />
      </Senha>

      <SairBotao onPress={() => navigation.navigate('Inicial')}>
        <SairTexto>Sair</SairTexto>
      </SairBotao>

      <SalvarBotao onPress={() => navigation.navigate('Inicial')}>
        <SalvarTexto>Salvar</SalvarTexto>
      </SalvarBotao>
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
});
