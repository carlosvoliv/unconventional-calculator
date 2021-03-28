const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

const getUserNumberInput = () => {
  return +userInput.value;
};

const createAndWriteOutput = (operator, resultBeforeCalc,calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription)
}

const writeToLog = (
  operationId,
  prevResult,
  operationNumber,
  newResult
) => {
  const logEntry = {
    operation: operationId,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

const calculateResult = (calculationType) => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
};

const add = () => {
  calculateResult('ADD');
};

const subtract = () => {
  calculateResult('SUBTRACT');
};

const multiply = () => {
  calculateResult('MULTIPLY');
};

const divide = () => {
  calculateResult('DIVIDE');
};

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)