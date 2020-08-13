import React from 'react';
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
} from './styles';

import { Background } from '../../components/Background';

export default function Esqueci({ navigation }) {
  return (
    <Background>
      <Text>Esqueceu sua senha?</Text>

      <Text>
        Insira o seu usuário ou email para receber um link de recuperação.
      </Text>

      <Usuario>
        <UsuarioInput
          icon="mail-outline"
          keyboardType="email-address" // adiciona @ e .com automaticamente
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="none" // não coloca letra maiúscula
          placeholder="Nome de usuário ou email"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          // onSubmitEditing={() => passwordRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          // value={email}
          // onChangeText={setEmail}
        />
      </Usuario>

      <EnviarBotao>
        <EnviarTexto>Enviar link para login</EnviarTexto>
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
  );
}
