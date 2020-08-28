import styled from 'styled-components/native';

import Input from '../../components/Input';

export const Caixa = styled.View`
  /* margin-top: 80px;
  margin-bottom: 400px; */
  position: absolute;
  align-self: center;
  margin: 80px 0px 400px;
  flex: 1;
  background: #ffffff;
  border: 2px solid #000000;
`;

export const Text = styled.Text`
  /* font-family: ROBOTO; */
  margin-top: 15px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  letter-spacing: 1.6px;

  color: #000000;
`;

export const Item = styled.View`
  width: 330px;
  height: 40px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 25px;
  margin-right: 10px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const ItemInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;
