import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TaskList({ data, handLeDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handLeDelete(data)}>
        <Icon
          name="check"
          color="#121212"
          size={30}
          // style={{height:60,width:60}}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.task}> {data.task} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  task: {
    color: '#121212',
    fontSize: 20,
    paddingLeft: 8,
    paddingRight: 20,
  },
});
