import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Input from '../../components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

// export const Text = styled.Text`
//   font-size: 20px;
//   color: #000;
//   font-weight: bold;
//   align-self: center;
//   margin-top: 30px;
// `;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  opacity: ${(props) => (props.enabled ? 1 : 0.3)};
  align-items: center;
  margin: 0 10px 20px; /* com 20 no lugar de 10 fica bom */
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Compromisso = styled.View`
  width: 330px;
  height: 40px;
  margin-top: -15px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #000000;
  flex-direction: row;
  align-items: center;
`;

export const CompromissoInput = styled(Input)`
  font-family: Arial Bold;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  flex: 1;
`;
