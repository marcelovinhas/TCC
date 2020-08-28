import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

// import Button from '../../components/Button';
import Input from '../../components/Input';

export const Easy = styled.Text`
  position: absolute;
  width: 330px;
  height: 66px;
  left: 20px;
  top: 90px;

  font-family: 'RobotoSlab-Regular';
  /* font-weight: bold; */
  font-size: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 6px;
  /* letter-spacing: 0.1em; */

  color: #000000;
`;

export const Usuario = styled.View`
  width: 330px;
  height: 40px;
  left: 16px;
  top: 190px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const UsuarioInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const Senha = styled.View`
  width: 330px;
  height: 41px;
  left: 16px;
  top: 227px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const SenhaInput = styled(Input)`
  font-family: Arial Bold;
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

export const EntrarBotao = styled.TouchableOpacity`
  width: 270px;
  height: 43px;
  top: 300px;
  align-self: center; /* coloca no meio no sentido horizontal */
  justify-content: center;

  /* background: #5671cf; */
  border: 2px solid #333333;

  border-radius: 5px;
`;

export const EntrarTexto = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 35px; */
  display: flex;
  align-self: center;
  text-align: center;
  letter-spacing: 1.8px;

  color: #ffffff;
`;

export const EsqueciBotao = styled.TouchableOpacity`
  width: 332px;
  height: 23px;
  align-self: center; /* coloca no meio no sentido horizontal */
  top: 315px;
`;

export const EsqueciTexto = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.4px;
  color: #5671cf;
`;

export const ContaBotao = styled.TouchableOpacity`
  width: 360px;
  height: 86px;
  align-self: center; /* coloca no meio no sentido horizontal */
  top: 450px;
  /* flex-direction: row; */
`;

export const ContaTexto = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.4px;
  color: #57545e;
`;

export const CadastreTexto = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.4px;
  color: #5676a6;
`;
