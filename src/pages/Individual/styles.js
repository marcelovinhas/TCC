import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
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

export const Title = styled.Text`
  font-size: 25px;
  color: #000;
  font-weight: bold;
  align-self: center;
  margin-top: 90px;
`;

export const ProviderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;

  align-items: center;
  margin: 0 10px 20px;
`;

export const Name = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
