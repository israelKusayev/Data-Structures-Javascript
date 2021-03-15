const Stack = require("./stack");

const openToClose = {
  "<": ">",
  "[": "]",
  "(": ")",
  "{": "}",
};
const closeToOpen = {
  ">": "<",
  "]": "[",
  ")": "(",
  "}": "{",
};

function checkString(string) {
  const stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (openToClose[char]) {
      stack.push(char);
    } else if (closeToOpen[char]) {
      if (stack.empty()) return false;

      const poppedChar = stack.pop();
      if (openToClose[poppedChar] !== char) return false;
    }
  }

  return !!stack.empty();
}
