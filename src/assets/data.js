export const data = [
    {
      question: "Which device is required for the Internet connection?",
      option1: "Modem",
      option2: "Router",
      option3: "LAN Cable",
      option4: "Pen Drive",
      ans: 1,
    },
    {
      question: "Which continent has the highest number of countries?",
      option1: "Asia",
      option2: "Europe",
      option3: "North America",
      option4: "Africa",
      ans: 4,
    },
    {
      question: "Junk e-mail is also called?",
      option1: "Spam",
      option2: "Fake",
      option3: "Archived",
      option4: "Bin",
      ans: 1,
    },
    {
      question: "A computer cannot BOOT if it does not have the?",
      option1: "Application Software",
      option2: "Internet",
      option3: "Operating System",
      option4: "Mouse",
      ans: 3,
    },
    {
      "question": "What does the following code snippet do?",
      "code": "function factorial(n) {\n  if (n === 0 || n === 1) {\n    return 1;\n  }\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));",
      "option1": "Calculates the factorial of a number.",
      "option2": "Calculates the square of a number.",
      "option3": "Calculates the cube of a number.",
      "option4": "Throws an error.",
      "ans": 1
    }
    ,
    {
      "question": "What is the output of the following code?",
      "code": `
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayedLog(item) {
    await delay(1000);
    console.log(item);
  }
  
  delayedLog('Hello, world!');
  `,
      "option1": "The code will throw an error.",
      "option2": "The code will print 'Hello, world!' immediately.",
      "option3": "The code will print 'Hello, world!' after 1 second.",
      "option4": "The code will not print anything.",
      "ans": 3 
    },
    {
      "question": "What does the following code snippet do?",
      "code": "let fruits = ['apple', 'banana', 'cherry'];\nlet uppercased = fruits.map(fruit => fruit.toUpperCase());\nconsole.log(uppercased);",
      "option1": "Concatenates all strings in the array.",
      "option2": "Removes duplicate elements from the array.",
      "option3": "Converts all strings in the array to uppercase.",
      "option4": "Throws an error.",
      "ans": 3
    }
    
  ];
  