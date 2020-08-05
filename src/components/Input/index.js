/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {/* se a propriedade icon existir, renderiza um ícone */}
      {icon && <Icon name={icon} size={20} color="#000000" />}
      {/* Text Input recebe todas as outras propriedades, com exceção de style */}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

// Input.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // pode ser um objeto ou array
// };

// Input.defaultProps = {
//   icon: null, // pq  não é obrigatória
//   style: {}, // pq  não é obrigatória
// };

export default forwardRef(Input);
