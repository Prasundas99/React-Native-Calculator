import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result}></View>
      <View style={styles.calculation}></View>
      <View style={styles.buttons}>
        <View style={styles.numbers}></View>
        <View style={styles.operations}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  result:{
    flex: 2,
    backgroundColor: '#2c3e50',
  },
  calculation:{
    flex: 1,
    backgroundColor: '#27ae60',
  },
  buttons:{
    flexGrow: 7,
    flexDirection: 'row',
  },
  numbers:{
    flex: 3,
    backgroundColor: '#3498db',
  },
  operations:{
    flex: 1,
    backgroundColor: '#e67e22',
  }
});

export default App;
