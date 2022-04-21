import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>0</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>0</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
          </View>
          <View style={styles.row}>
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
          </View>
          <View style={styles.row}>
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
          </View>
          <View style={styles.row}>
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
          </View>
        </View>
        <View style={styles.operations}>
          <Button title="1" />
          <Button title="2" />
          <Button title="3" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: '#2c3e50',
justifyContent:"center",
alignItems:"flex-end",
  },
  resultText: {
    fontSize: 50,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  calculation: {
    flex: 1,
    backgroundColor: '#27ae60',
    justifyContent:"center",
alignItems:"flex-end",
  },
  calculationText: {
    fontSize: 21,
    color: '#fff',
  },
  buttons: {
    flexGrow: 6,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#3498db',
  },
  operations: {
    flex: 1,
    backgroundColor: '#e67e22',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
