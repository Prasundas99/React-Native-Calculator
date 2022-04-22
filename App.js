import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

const App = () => {
  const [resultText, setResultText] = React.useState('');

  let calculate = () => {
    const text = resultText;
  };

  let buttonPressed = value => {
    if (value === '=') {
      return calculate();
    }
    setResultText(resultText + value);
  };

  let rows = [];
  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, '.', '='],
  ];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          onPress={() => buttonPressed(nums[i][j])}
          style={styles.btn}
          key={i + '-' + j}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rows.push(
      <View style={styles.row} key={i}>
        {row}
      </View>,
    );
  }

  let operate = operator => {
    let lastChar = resultText.split('').pop();
    if (resultText.length === 0) {
      return;
    }
    switch (operator) {
      case 'D':
        setResultText(resultText.slice(0, -1));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (ops.indexOf(lastChar) > 0 || lastChar === '.') {
          return;
        }
        setResultText(resultText + operator);
      default:
        return 'error';
    }
  };

  let ops = ['D', '+', '-', '*', '/'];
  let opRow = [];
  for (let i = 0; i < 5; i++) {
    opRow.push(
      <TouchableOpacity
        onPress={() => operate(ops[i])}
        style={styles.btn}
        key={i + '-op'}>
        <Text style={styles.btnText}>{ops[i]}</Text>
      </TouchableOpacity>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>0</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>{rows}</View>
        <View style={styles.operations}>{opRow}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  result: {
    flex: 2,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'flex-end',
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
  btnText: {
    fontSize: 30,
  },
  calculation: {
    flex: 1,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'flex-end',
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
