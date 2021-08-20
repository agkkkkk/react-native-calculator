import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");

  const operate = (ops) => {
    switch (ops) {
      case "AC":
        setCalc("");
        setResult("");
        break;

      case "Del":
        setCalc(calc.toString().substring(0, calc.length - 1));
        break;

      case "+":

      case "-":

      case "*":

      case "/":
        const lastChar = calc.split("").pop();
        if (operations.indexOf(lastChar) > 0) return;
        if (calc == "") return;

        setCalc(calc + ops);
    }
  };

  const validate = () => {
    const text = result;
    switch (text.slice(-1)) {
      case "+":
      case "-":
      case "*":
      case "/":
        return false;
    }
    return true;
  };

  const calculate = (num) => {
    if (num == "=") {
      validate() && evaluate();
      return;
    }

    setCalc(calc + num);
  };

  const evaluate = () => {
    setResult(eval(calc));
  };

  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [".", 0, "="],
  ];
  let rows = [];

  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          style={styles.btn}
          onPress={() => calculate(nums[i][j])}
        >
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>
      );
    }
    rows.push(<View style={styles.rows}>{row}</View>);
  }

  let operations = ["AC", "Del", "+", "-", "*", "/"];
  let ops = [];

  for (let i = 0; i < 6; i++) {
    ops.push(
      <TouchableOpacity
        style={styles.opbtn}
        onPress={() => operate(operations[i])}
      >
        <Text style={styles.opbtnText}>{operations[i]}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.calculations}>
        <Text style={styles.calculationText}>{calc}</Text>
      </View>
      <View style={styles.results}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>{rows}</View>
        <View style={styles.operations}>{ops}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 1,
    backgroundColor: "#141518",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultText: {
    fontSize: 32,
    color: "white",
  },
  calculations: {
    flex: 2,
    backgroundColor: "#141518",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  calculationText: {
    fontSize: 40,
    color: "white",
  },
  buttons: {
    flex: 6,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    backgroundColor: "#141518",
  },
  rows: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    width: "30%",
    height: "70%",
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: 50,
  },
  btnText: {
    fontSize: 36,
    color: "white",
  },
  operations: {
    flex: 1,
    backgroundColor: "#141518",
    justifyContent: "space-around",
    alignItems: "center",
  },
  opbtn: {
    height: "12%",
    width: "70%",
    backgroundColor: "#f1a43c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  opbtnText: {
    color: "white",
    fontSize: 24,
  },
});
