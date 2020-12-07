import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
// import Button from '../../components/Button';
import Input from '../../components/Input';

export const Text = styled.Text`
  /* font-family: ROBOTO; */
  margin-top: 80px;
  /* margin-left: 5px; */
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  letter-spacing: 1.6px;
  color: #000000;
`;

export const Nome = styled.View`
  width: 330px;
  height: 40px;
  left: 16px;
  top: 25px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const Email = styled.View`
  width: 330px;
  height: 40px;
  left: 16px;
  top: 50px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const SenhaAntiga = styled.View`
  width: 330px;
  height: 41px;
  left: 16px;
  top: 25px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const Senha = styled.View`
  width: 330px;
  height: 41px;
  left: 16px;
  top: 50px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const ConfirmarSenha = styled.View`
  width: 330px;
  height: 41px;
  left: 16px;
  top: 75px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const SairBotao = styled.TouchableOpacity`
  width: 150px;
  height: 43px;
  top: 260px;
  margin-left: 10px;
  align-self: flex-start; /* coloca no meio no sentido horizontal */
  justify-content: center;
  border: 2px solid #333333;
  border-radius: 15px;
`;

export const SairTexto = styled.Text`
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

export const SalvarBotao = styled.TouchableOpacity`
  width: 150px;
  height: 43px;
  top: 215px;
  margin-left: 230px;
  align-self: flex-start; /* coloca no meio no sentido horizontal */
  justify-content: center;
  border: 2px solid #333333;
  border-radius: 15px;
`;

export const SalvarTexto = styled.Text`
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

export const Caixa = styled.View`
  margin-top: 0px;
  /*margin-bottom: 400px; */
  position: absolute;
  width: 415px;
  height: 70px;
  align-self: center;
  /*margin: 80px 0px 400px;*/
  flex: 1;
  background: #000000;
  border: 2px solid #000000;
`;

export const styles = StyleSheet.create({
  superiorTitle: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    color: '#FFF',
    fontSize: 25,
  },
  superiorHeader: {
    flexDirection: 'row',
  },
});
