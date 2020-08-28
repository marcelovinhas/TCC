import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Input from '../../components/Input';

export const Text = styled.Text`
  margin-top: 15px;
  top: 80px;
  text-align: center;
  justify-content: center;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 1.6px;
`;

export const Usuario = styled.View`
  width: 330px;
  height: 40px;
  left: 16px;
  top: 150px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
  font-size: 60px;
`;

export const UsuarioInput = styled(Input)`
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const CorBotao = styled(LinearGradient).attrs({
  colors: ['#5671cf', '#133DD0'],
})`
  justify-content: center;
  flex: 1;
`;

export const EnviarBotao = styled.TouchableOpacity`
  width: 270px;
  height: 43px;
  top: 220px;
  align-self: center; /* coloca no meio no sentido horizontal */
  justify-content: center;

  background: #5671cf;
  border: 2px solid #333333;

  border-radius: 5px;
`;

export const EnviarTexto = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.8px;

  color: #ffffff;
`;

export const LinhaDireita = styled.View`
  top: 264px;
  border: 1px solid #333333;
  width: 150px;
  left: 225px;
`;

export const LinhaEsquerda = styled.View`
  top: 266px;
  border: 1px solid #333333;
  width: 150px;
  left: 16px;
`;

export const Ou = styled.Text`
  margin-top: 250px;
  align-self: center;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 1.6px;
`;

export const CriarBotao = styled.TouchableOpacity`
  width: 220px;
  height: 43px;
  top: 30px;
  align-self: center; /* coloca no meio no sentido horizontal */
  justify-content: center;

  border: 2px solid #333333;

  border-radius: 15px;
`;

export const CriarTexto = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.8px;

  color: #333333;
`;

export const LoginBotao = styled.TouchableOpacity`
  width: 380px;
  height: 43px;
  top: 140px;
  align-self: center; /* coloca no meio no sentido horizontal */
  justify-content: center;
  background: #ffffff;

  border: 2px solid #333333;
`;

export const LoginTexto = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 1.8px;

  color: #333333;
`;
