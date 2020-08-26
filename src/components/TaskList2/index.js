import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TaskList2({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Icon name="check" color="#000" size={30} />
        <Text
          style={{
            color: '#121212',
            fontSize: 25,
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          {data.task}
        </Text>
      </View>
      <TextInput style={styles.task}>{data.contador}</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    marginRight: 3,
    alignItems: 'center',
    backgroundColor: '#96FBB9',
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    marginTop: 3,
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
    padding: 10,
    // justifyContent: 'space-between',
  },
  task: {
    color: '#121212',
    fontSize: 20,
    marginRight: 10,
    // paddingLeft: 8,
    // paddingRight: 8,
  },
});
