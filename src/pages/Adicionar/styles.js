import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
// import Button from '../../components/Button';
import Input from '../../components/Input';

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

export const styles = StyleSheet.create({
  superiorTitle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    color: '#FFF',
    fontSize: 25,
  },
  caixaBranca: {
    marginTop: 5,
    backgroundColor: '#FFF', // caixa de texto Quantidade
    padding: 9,
    height: 70,
    textAlign: 'center',
    color: '#000',
    borderRadius: 5,
    flexDirection: 'row',
  },
  titulo: {
    fontSize: 25,
    marginTop: 15,
    backgroundColor: '#FFF', // caixa de texto Quantidade
    padding: 9,
    height: 70,
    textAlign: 'center',
    color: '#000',
    borderRadius: 5,
  },
  lembrarTitle: {
    // backgroundColor: '#dae2ed',
    // marginTop: 250,
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    color: '#000',
    fontSize: 20,
  },
  repetirTitle: {
    // backgroundColor: '#dae2ed',
    // marginTop: 250,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    color: '#000',
    fontSize: 20,
  },
  lembrarContainer: {
    // paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderColor: '#dae2ed',
    elevation: 2,
    height: 40,
    width: 62,
    top: 10,
  },
  repetirContainer: {
    // paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#FFF',
    // top: 70,
    marginLeft: 10,
    elevation: 2,
  },
  botaoHeader: {
    flexDirection: 'row',
    top: 80,
  },
});
