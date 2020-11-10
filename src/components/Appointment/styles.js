import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${(props) => (props.past ? 0.3 : 1)};
`;

export const Left = styled.View``;

export const Info = styled.View`
  margin-left: 5px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #000;
`;

export const Assunto = styled.Text`
  color: #000;
  font-size: 18px;
  margin-top: 4px;
`;

export const Time = styled.Text`
  color: #555;
  font-size: 15px;
  margin-top: 4px;
`;
