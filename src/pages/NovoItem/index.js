import React, { useRef, useState } from 'react';

import { Caixa, Text, Item, ItemInput } from './styles';

import { Background } from '../../components/Background';

export default function NovoItem() {
  const quantidadeRef = useRef();

  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');

  return (
    <Background>
      <Caixa>
        <Text>Qual item deseja adicionar?</Text>

        <Item>
          <ItemInput
            icon="store"
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="none" // não coloca letra maiúscula
            placeholder="Exemplo: Melancia"
            returnKeyType="next" // muda o botão de passar adiante do teclado
            onSubmitEditing={() => quantidadeRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            value={item}
            onChangeText={setItem}
          />
        </Item>

        <Text>Qual a quantidade?</Text>

        <Item>
          <ItemInput
            icon="shopping-cart"
            autoCorrect={false} // não corrige o email automaticamente
            autoCapitalize="none" // não coloca letra maiúscula
            placeholder="Exemplo: 1 un"
            returnKeyType="send" // muda o botão de passar adiante do teclado
            // onSubmitEditing={() => quantidadeRef.current.focus()} // após clicar, já vai com o teclado aberto pro prox
            ref={quantidadeRef}
            value={quantidade}
            onChangeText={setQuantidade}
          />
        </Item>
      </Caixa>
    </Background>
  );
}
