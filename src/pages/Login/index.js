import React, { useRef, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Background } from '../../components/Background';
import { signInRequest } from '../../store/modules/auth/actions';

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
  CorBotao,
} from './styles';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const senhaRef = useRef();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, senha));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <Easy>EASY</Easy>
        <Usuario>
          <UsuarioInput
            icon="mail-outline"
            keyboardType="email-address" // adiciona @ e .com automaticamente
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="none" // não coloca letra maiúscula
            placeholder="Email"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            onSubmitEditing={() => senhaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
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
            onSubmitEditing={handleSubmit}
            ref={senhaRef}
            value={senha}
            onChangeText={setSenha}
          />
        </Senha>

        <EntrarBotao loading={loading} onPress={handleSubmit}>
          <CorBotao>
            <EntrarTexto>Entrar</EntrarTexto>
          </CorBotao>
        </EntrarBotao>

        <EsqueciBotao onPress={() => navigation.navigate('Esqueci')}>
          <EsqueciTexto>Esqueci minha senha</EsqueciTexto>
        </EsqueciBotao>

        <ContaBotao onPress={() => navigation.navigate('Cadastro')}>
          <ContaTexto>Não tem uma conta?</ContaTexto>
          <CadastreTexto>Cadastre-se</CadastreTexto>
        </ContaBotao>
      </Background>
    </TouchableWithoutFeedback>
  );
}
