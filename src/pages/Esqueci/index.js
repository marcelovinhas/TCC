import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';

import { Background } from '../../components/Background';

import { forgotPasswordRequest } from '../../store/modules/senha/actions';

import {
  Text,
  Usuario,
  UsuarioInput,
  EnviarBotao,
  EnviarTexto,
  LinhaEsquerda,
  LinhaDireita,
  Ou,
  CriarBotao,
  CriarTexto,
  LoginBotao,
  LoginTexto,
  CorBotao,
} from './styles';

export default function Esqueci({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  // const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(forgotPasswordRequest(email));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <Text>Esqueceu sua senha?</Text>

        <Text>Insira o seu email para receber um link de recuperação.</Text>

        <Usuario>
          <UsuarioInput
            icon="mail-outline"
            keyboardType="email-address" // adiciona @ e .com automaticamente
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="none" // não coloca letra maiúscula
            placeholder="Email"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            onSubmitEditing={handleSubmit}
            value={email}
            onChangeText={setEmail}
          />
        </Usuario>

        {/* <EnviarBotao
          onPress={() =>
            Alert.alert('Senha enviada!', '', [
              {
                text: 'Tela de login',
                onPress: () => navigation.navigate('Login'),
              },
            ])
          }
        > */}
        <EnviarBotao onPress={handleSubmit}>
          <CorBotao>
            <EnviarTexto>Enviar link para login</EnviarTexto>
          </CorBotao>
        </EnviarBotao>

        <LinhaEsquerda />
        <LinhaDireita />
        <Ou>OU</Ou>

        <CriarBotao onPress={() => navigation.navigate('RedefinirSenha')}>
          <CriarTexto>Redefinir senha</CriarTexto>
        </CriarBotao>

        <LoginBotao onPress={() => navigation.navigate('Login')}>
          <LoginTexto>Voltar ao login</LoginTexto>
        </LoginBotao>
      </Background>
    </TouchableWithoutFeedback>
  );
}
