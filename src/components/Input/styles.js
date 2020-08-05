import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor:
    '#57545e' /* cor do que está escrito dentro da caixa, poderia estar no index.js */,
})`
  font-family: Arial Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  flex: 1;
  letter-spacing: 1.6px;
`;
