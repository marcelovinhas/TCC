import React from 'react';
import BleManager from 'react-native-ble-manager';
import { Text } from 'react-native';

import { Background } from '../../components/Background';

export default function Adicionar() {
  BleManager.start({ showAlert: false }).then(() => {
    // Success code
    console.log('Module initialized');
  });
  return (
    <Background>
      <Text>TELA DE CALENDÁRIO</Text>
    </Background>
  );
}
