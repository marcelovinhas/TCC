/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background } from '../../components/Background';
import { Caixa, styles } from './styles';
import TaskList2 from '../../components/TaskList2';

export default function Despensa({ navigation }) {

  const [nicho, setNicho] = useState('Macarrão');
  const [qtdmin, setQtdmin] = useState('1');
  const [vcompra, setVcompra] = useState('3');
  const qtddespensa = '0.00';

  function cor () {

    if (qtdmin==""){
      return { backgroundColor: "white",
      height: 200,
      marginBottom: 400,  borderWidth: 1,
      borderColor: '#D3D3D3' };
}
  else if (qtddespensa>1.1*qtdmin){
        return { backgroundColor: "#00FF7F", height: 200,
        marginBottom: 400,  borderWidth: 1,
        borderColor: '#D3D3D3' };
  }
  else if (qtddespensa<qtdmin){
    return { backgroundColor: "red", height: 200,
    marginBottom: 400, borderWidth: 1,
    borderColor: '#D3D3D3' };
  }
  else if (qtddespensa==qtdmin || qtddespensa<=1.1*qtdmin ){
    return { backgroundColor: "yellow", height: 200,
    marginBottom: 400, borderWidth: 1,
    borderColor: '#D3D3D3' };
  }
  else {
    return { backgroundColor: "white", height: 200,
    marginBottom: 400, borderWidth: 1,
    borderColor: '#D3D3D3' };
  }
}

  return (
    <Background>
      <Caixa>
        <View style={styles.superiorHeader}>
          <Text style={styles.superiorTitle}>Despensa</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Inicial', {aux:(qtddespensa), aux2: (qtdmin), aux3: (nicho), aux4: (vcompra)})}>
            <Icon
              style={{ marginLeft: 220, marginRight: 5, marginTop: 20 }}
              name="home"
              color="#FFF"
              size={40}
              // style={{height:60,width:60}}
            />
          </TouchableOpacity>
        </View>
      </Caixa>

      <View style={styles.content}>
        <Text style={styles.title}>O que eu tenho na despensa?</Text>
      </View>

      <View style={[cor()]}>
      <View style={styles.container2}>
      <TextInput
            style={{
              color: '#000',
              fontSize: 25,
              paddingLeft: 18,
              paddingRight: 8,
            }}
            placeholder="Nicho 1"
            value={nicho}
            onChangeText={(nicho) => setNicho(nicho)}
          />
           <Text style={{ color: '#000', fontSize: 20, paddingLeft: 220, paddingRight: 50 }}>
            {qtddespensa} kg
          </Text>

          {/* <Text style={{ color: '#000', fontSize: 20, paddingLeft: 220, paddingRight: 50 }}>
            Kg
          </Text> */}

        <View style={styles.container2} />
      </View>
      <View style={styles.container3}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#000', fontSize: 18, paddingLeft: 8 }}>
            Quantidade mínima
          </Text>
          <TextInput
            style={{
              color: '#000',
              fontSize: 20,
              paddingLeft: 170,

            }}
            value={qtdmin}
            onChangeText={(qtdmin) => setQtdmin(qtdmin)}
            placeholder="--"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.container3}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#000', fontSize: 18, paddingLeft: 8 }}>
            Quantidade para compra
          </Text>
          <TextInput
            style={{
              color: '#000',
              fontSize: 20,
              paddingLeft: 125,

            }}
            value={vcompra}
            onChangeText={(vcompra) => setVcompra(vcompra)}
            placeholder="--"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>

    </Background>
  );
}
