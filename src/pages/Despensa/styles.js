import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

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
  title: {
    marginTop: 100,
    paddingBottom: 10, // define a altura da  área de preenchimento na parte inferior de um elemento
    fontSize: 25,
    textAlign: 'center', // posicao do texto horizontal
    color: '#000',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#dae2ed',
    alignItems: 'center',
    justifyContent: 'center', // alinhar os filhos dentro do eixo principal de seu contêiner(pode ser vertical(column)ou horizontal(row))
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9, // fica acima de outros componentes
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modal: {
    flex: 1,
    backgroundColor: '#dae2ed',
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 23,
    color: '#000',
  },
  modalBody: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#dae2ed', // caixa de texto Add Item
    padding: 9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  input2: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    backgroundColor: '#dae2ed', // caixa de texto Quantidade
    padding: 9,
    height: 40,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  handleAdd: {
    backgroundColor: '#dae2ed',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },
  handleAddText: {
    fontSize: 20,
  },
  superiorTitle: {
    // backgroundColor: '#dae2ed',
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
  superiorHeader: {
    flexDirection: 'row',
  },
  fixos: {
    flexDirection: 'row',
    position: 'absolute',
    width: 200,
    height: 60,
    backgroundColor: '#dae2ed',
    alignItems: 'center',
    justifyContent: 'center', // alinhar os filhos dentro do eixo principal de seu contêiner(pode ser vertical(column)ou horizontal(row))
    borderRadius: 30,
    left: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9, // fica acima de outros componentes
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  container0: {
    flex: 1,
    marginBottom: 480,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    marginTop: 3,
    flexDirection: 'row',
    marginRight: 3,
    alignItems: 'center',

    justifyContent: 'space-around',
  },
  container3: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    flexDirection: 'row',
    elevation: 1.0,
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    // borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  task: {
    color: '#121212',
    fontSize: 20,
    // paddingLeft: 8,
    // paddingRight: 8,
  },
});
