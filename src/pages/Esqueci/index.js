import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
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

import { Background } from '../../components/Background';

export default function Esqueci({ navigation }) {
  const [email, setEmail] = useState('');

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
            // onSubmitEditing={() => passwordRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            value={email}
            onChangeText={setEmail}
          />
        </Usuario>

        <EnviarBotao
          onPress={() =>
            Alert.alert('Senha enviada!', '', [
              {
                text: 'Tela de login',
                onPress: () => navigation.navigate('Login'),
              },
            ])
          }
        >
          <CorBotao>
            <EnviarTexto>Enviar link para login</EnviarTexto>
          </CorBotao>
        </EnviarBotao>

        <LinhaEsquerda />
        <LinhaDireita />
        <Ou>OU</Ou>

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
