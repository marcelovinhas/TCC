import styled from 'styled-components';

// import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const Assunto = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: #333;
`;

export const CorBotao = styled(LinearGradient).attrs({
  colors: ['#5671cf', '#133DD0'],
})`
  justify-content: center;
  flex: 1;
`;

export const ConfirmarBotao = styled.TouchableOpacity`
  width: 270px;
  height: 50px;
  margin-top: 20px;
  align-self: center; /* coloca no meio no sentido horizontal */
  justify-content: center;

  /* background: #5671cf; */
  border: 2px solid #333333;

  border-radius: 5px;
`;

export const ConfirmarTexto = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 35px; */
  display: flex;
  align-self: center;
  text-align: center;
  letter-spacing: 1.8px;

  color: #ffffff;
`;
