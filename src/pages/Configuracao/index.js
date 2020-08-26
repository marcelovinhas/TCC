import React, { useRef, useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '../../components/Background';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/usuario/actions';

import {
  Caixa,
  Text,
  Nome,
  TextInput,
  Senha,
  ConfirmarSenha,
  Email,
  SairBotao,
  SairTexto,
  SalvarBotao,
  SalvarTexto,
  styles,
  SenhaAntiga,
} from './styles';

export default function Configuracao({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.usuario.profile);

  const emailRef = useRef();
  const senhaAntigaRef = useRef();
  const senhaRef = useRef();
  const confirmarSenhaRef = useRef();

  const [nome, setNome] = useState(profile.nome);
  const [email, setEmail] = useState(profile.email);
  const [senhaAntiga, setSenhaAntiga] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  useEffect(() => {
    setSenhaAntiga('');
    setSenha('');
    setConfirmarSenha('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        nome,
        email,
        senhaAntiga,
        senha,
        confirmarSenha,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
    // CommonActions.reset({
    //   name: 'login',
    // });
  }

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

      <View style={{ flexDirection: 'row' }}>
        <Icon
          style={{ marginLeft: 15, marginRight: 5, top: 118 }}
          name="create"
          color="#000"
          size={30}
        />
        <Text>Editar perfil</Text>
      </View>

      <Nome>
        <TextInput
          icon="sentiment-satisfied"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="words"
          placeholder="Nome Completo"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => emailRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          value={nome}
          onChangeText={setNome}
        />
      </Nome>

      <Email>
        <TextInput
          icon="mail-outline"
          autoCorrect={false} // não corrige o email automaticamente
          autoCapitalize="none" // não coloca letra maiúscula
          placeholder="Email"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => senhaAntigaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={emailRef}
          value={email}
          onChangeText={setEmail}
        />
      </Email>

      <View style={{ flexDirection: 'row' }}>
        <Icon
          style={{ marginLeft: 15, marginRight: 5, top: 114 }}
          name="person"
          color="#000"
          size={35}
        />
        <Text>Configuracoes da conta</Text>
      </View>

      <SenhaAntiga>
        <TextInput
          icon="lock-open"
          secureTextEntry // não mostra o texto
          placeholder="Senha atual"
          returnKeyType="next" // muda o botão de passar adiante do teclado
          onSubmitEditing={() => senhaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={senhaAntigaRef}
          value={senhaAntiga}
          onChangeText={setSenhaAntiga}
        />
      </SenhaAntiga>

      <Senha>
        <TextInput
          icon="lock-outline"
          secureTextEntry // não mostra o texto
          placeholder="Nova senha"
          returnKeyType="next"
          onSubmitEditing={() => confirmarSenhaRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
          ref={senhaRef}
          value={senha}
          onChangeText={setSenha}
        />
      </Senha>

      <ConfirmarSenha>
        <TextInput
          icon="lock"
          secureTextEntry // não mostra o texto
          placeholder="Confirmar nova senha"
          returnKeyType="send"
          ref={confirmarSenhaRef}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </ConfirmarSenha>

      <SairBotao onPress={handleLogout}>
        <SairTexto>Sair</SairTexto>
      </SairBotao>

      <SalvarBotao onPress={handleSubmit}>
        <SalvarTexto>Salvar</SalvarTexto>
      </SalvarBotao>

      {/* <SalvarBotao
        onPress={() =>
          Alert.alert('Alteracoes salvas!', '', [
            {
              text: 'Voltar para tela inicial',
              onPress: () => navigation.navigate('Inicial'),
            },
          ])
        }
      >
        <SalvarTexto>Salvar</SalvarTexto>
      </SalvarBotao> */}
    </Background>
  );
}
