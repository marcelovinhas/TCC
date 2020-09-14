import React, { useState, useRef } from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { Background } from '../../components/Background';

import { resetPasswordRequest } from '../../store/modules/senha/actions';

import {
  Text,
  Email,
  InputConta,
  Token,
  Senha,
  ConfirmarSenha,
  CorBotao,
  EnviarBotao,
  EnviarTexto,
  CriarBotao,
  CriarTexto,
  LoginBotao,
  LoginTexto,
} from './styles';

export default function RedefinirSenha({ navigation }) {
  const dispatch = useDispatch();

  const tokenRef = useRef();
  const senhaRef = useRef();
  const confirmarSenhaRef = useRef();

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(resetPasswordRequest(email, token, senha, confirmarSenha));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <Text>Esqueceu sua senha?</Text>

        <Text>
          Utilize o código de confirmação enviado para seu email para redefinir
          sua senha.
        </Text>

        <Email>
          <InputConta
            icon="mail-outline"
            keyboardType="email-address" // adiciona @ e .com automaticamente
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="none" // não coloca letra maiúscula
            placeholder="Email"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            onSubmitEditing={() => tokenRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            value={email}
            onChangeText={setEmail}
          />
        </Email>

        <Token>
          <InputConta
            icon="lock-open"
            placeholder="Código de confirmação"
            returnKeyType="next"
            onSubmitEditing={() => senhaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            ref={tokenRef}
            value={token}
            onChangeText={setToken}
          />
        </Token>

        <Senha>
          <InputConta
            icon="lock-outline"
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
          <InputConta
            icon="lock"
            secureTextEntry // não mostra o texto
            placeholder="Repetir Senha"
            returnKeyType="next"
            onSubmitEditing={handleSubmit}
            ref={confirmarSenhaRef}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
        </ConfirmarSenha>

        <EnviarBotao onPress={handleSubmit}>
          <CorBotao>
            <EnviarTexto>Redefinir senha</EnviarTexto>
          </CorBotao>
        </EnviarBotao>

        <CriarBotao onPress={() => navigation.navigate('Cadastro')}>
          <CriarTexto>Criar nova conta</CriarTexto>
        </CriarBotao>

        <LoginBotao onPress={() => navigation.navigate('Login')}>
          <LoginTexto>Voltar ao login</LoginTexto>
        </LoginBotao>
      </Background>
    </TouchableWithoutFeedback>
  );
}
