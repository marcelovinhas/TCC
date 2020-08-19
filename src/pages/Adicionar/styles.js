import styled from 'styled-components/native';

// import Button from '../../components/Button';
import Input from '../../components/Input';

export const Titulo = styled.View`
  width: 330px;
  height: 40px;
  left: 16px;
  top: 100px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const TituloInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const Local = styled.View`
  width: 330px;
  height: 40px;
  left: 16px;
  top: 125px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const LocalInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const Descricao = styled.View`
  width: 330px;
  height: 40px;
  left: 16px;
  top: 150px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const DescricaoInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const Data = styled.View`
  width: 330px;
  height: 41px;
  left: 16px;
  top: 175px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const DataInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const Hora = styled.View`
  width: 330px;
  height: 41px;
  left: 16px;
  top: 200px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const HoraInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;

export const Lembrar = styled.Text`
  margin-top: 250px;
  align-self: stretch;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 1.6px;
  margin-left: 20px;
`;

export const Repetir = styled.Text`
  margin-top: 80px;
  align-self: stretch;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 1.6px;
  margin-left: 20px;
`;

export const SairBotao = styled.TouchableOpacity`
  width: 150px;
  height: 43px;
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
  margin-left: 70px;
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
  width: 400px;
  height: 70px;
  align-self: center;
  /*margin: 80px 0px 400px;*/
  flex: 1;
  background: #000000;
  border: 2px solid #000000;
`;
