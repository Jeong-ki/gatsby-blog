const calculateFunctions = {
  getDifference(firstNum: number, secondNum: number) {
    postMessage({
      queryMethodListener: 'difference',
      queryMethodArguments: [firstNum - secondNum],
    });
  },

  getMultiple(firstNum: number, secondNum: number) {
    postMessage({
      queryMethodListener: 'multiple',
      queryMethodArguments: [firstNum * secondNum],
    });
  },

  getFibonacci(firstNum: number, secondNum: number) {
    function fibonacci(n: number) {
      if (n <= 0) return 0;
      if (n === 1) return 1;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
    postMessage({
      queryMethodListener: 'fibonacci',
      queryMethodArguments: [fibonacci(firstNum), fibonacci(secondNum)],
    });
  },
};

onmessage = (event) => {
  const { queryMethod, queryMethodArguments } = event.data;
  if (queryMethod in calculateFunctions) {
    calculateFunctions[queryMethod](...queryMethodArguments);
  } else {
    postMessage({ error: 'Unknown queryMethod' });
  }
};