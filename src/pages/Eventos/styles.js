import styled from 'styled-components/native';

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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  margin-top: 70px;
`;
