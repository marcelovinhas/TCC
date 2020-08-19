import React, { useRef, useState } from 'react';
// import { Keyboard } from 'react-native';

import { Background } from '../../components/Background';
import {
  Easy,
  Usuario,
  UsuarioInput,
  Senha,
  SenhaInput,
  EntrarBotao,
  EntrarTexto,
  EsqueciBotao,
  EsqueciTexto,
  ContaBotao,
  ContaTexto,
  CadastreTexto,
  Container,
} from './styles';

export default function Login({ navigation }) {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <Easy>EASY</Easy>
      <Usuario>
        <UsuarioInput
          icon="mail-outline"
          keyboardType="email-address" // adiciona @ e .com automaticamente
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="none" // não coloca letra maiúscula
          placeholder="Nome de usuário ou email"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => passwordRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          value={email}
          onChangeText={setEmail}
        />
      </Usuario>

      <Senha>
        <SenhaInput
          icon="lock-outline"
          secureTextEntry // não mostra o texto
          placeholder="Senha"
          returnKeyType="send"
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
        />
      </Senha>

      <EntrarBotao onPress={() => navigation.navigate('Inicial')}>
        <Container>
          <EntrarTexto>Entrar</EntrarTexto>
        </Container>
      </EntrarBotao>

      <EsqueciBotao onPress={() => navigation.navigate('Esqueci')}>
        <EsqueciTexto>Esqueci minha senha</EsqueciTexto>
      </EsqueciBotao>

      <ContaBotao onPress={() => navigation.navigate('Cadastro')}>
        <ContaTexto>Não tem uma conta?</ContaTexto>
        <CadastreTexto>Cadastre-se</CadastreTexto>
      </ContaBotao>
    </Background>
  );
}
