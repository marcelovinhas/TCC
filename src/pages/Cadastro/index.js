import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';

import { Background } from '../../components/Background';

import {
  Easy,
  Nome,
  NomeInput,
  Usuario,
  UsuarioInput,
  Senha,
  SenhaInput,
  Email,
  EmailInput,
  ConfirmarSenha,
  ConfirmarSenhaInput,
  CadastrarBotao,
  CadastrarTexto,
  CancelarBotao,
  CancelarTexto,
} from './styles';

export default function Cadastro({ navigation }) {
  const usuarioRef = useRef();
  const emailRef = useRef();
  const senhaRef = useRef();
  const confirmarSenhaRef = useRef();

  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <Background>
      <Easy>EASY</Easy>

      <Nome>
        <NomeInput
          icon="sentiment-satisfied"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Nome completo"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => usuarioRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          value={nome}
          onChangeText={setNome}
        />
      </Nome>

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
          onSubmitEditing={() => confirmarSenhaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={senhaRef}
          value={senha}
          onChangeText={setSenha}
        />
      </Senha>

      <ConfirmarSenha>
        <ConfirmarSenhaInput
          icon="lock-outline"
          secureTextEntry // não mostra o texto
          placeholder="Repetir senha"
          returnKeyType="send"
          ref={confirmarSenhaRef}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </ConfirmarSenha>

      <CadastrarBotao
        onPress={() =>
          Alert.alert('Cadastro realizado.', 'Bem vindo!', [
            {
              text: 'login',
              onPress: () => navigation.navigate('Login'),
            },
          ])
        }
      >
        <CadastrarTexto>Cadastrar</CadastrarTexto>
      </CadastrarBotao>

      <CancelarBotao onPress={() => navigation.navigate('Login')}>
        <CancelarTexto>Cancelar</CancelarTexto>
      </CancelarBotao>
    </Background>
  );
}
