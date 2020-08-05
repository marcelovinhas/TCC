import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'; // RectButton é para botão retangular

import Button from '../../components/Button';
import Input from '../../components/Input';

export const Easy = styled.Text`
  position: absolute;
  width: 330px;
  height: 66px;
  left: 16px;
  top: 80px;

  font-family: Arial Bold;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
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
  top: 153px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const UsuarioInput = styled(Input)`
  font-family: Arial Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  flex: 1;
  letter-spacing: 1.6px;
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
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  flex: 1;
  letter-spacing: 1.6px;
`;

export const EntrarBotao = styled.TouchableOpacity`
  width: 270px;
  height: 43px;
  left: 60px;
  top: 300px;
  align-items: center;
  justify-content: center;

  background: #5671cf;
  border: 1px solid #384759;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const EntrarTexto = styled.Text`
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

export const EsqueciBotao = styled.TouchableOpacity`
  width: 332px;
  height: 23px;
  left: 25px;
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
  color: #5676a6;
`;

export const ContaBotao = styled.TouchableOpacity`
  width: 360px;
  height: 86px;
  left: 30px;
  top: 493px;
  flex-direction: row;
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
  left: 10px;
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
