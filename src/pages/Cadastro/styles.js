import styled from 'styled-components/native';

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

export const Nome = styled.View`
  width: 330px;
  height: 40px;
  left: 16px;
  top: 160px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const NomeInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
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

export const Email = styled.View`
  width: 330px;
  height: 41px;
  left: 16px;
  top: 220px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const EmailInput = styled(Input)`
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
  top: 250px;
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

export const ConfirmarSenha = styled.View`
  width: 330px;
  height: 41px;
  left: 16px;
  top: 280px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const ConfirmarSenhaInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const CadastrarBotao = styled.TouchableOpacity`
  width: 270px;
  height: 43px;
  top: 320px;
  align-self: center; /* coloca no meio no sentido horizontal */
  justify-content: center;

  background: #5671cf;
  border: 2px solid #333333;

  border-radius: 5px;
`;

export const CadastrarTexto = styled.Text`
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

export const CancelarBotao = styled.TouchableOpacity`
  width: 150px;
  height: 43px;
  top: 435px;
  margin-left: 10px;
  align-self: flex-start; /* coloca no meio no sentido horizontal */
  justify-content: center;

  border: 2px solid #333333;

  border-radius: 15px;
`;

export const CancelarTexto = styled.Text`
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
