const quizzes = {
  lesson1: [
    {
      question: "What is the correct file extension for Python files?",
      options: [".py", ".java", ".cpp", ".txt"],
      answer: 0
    },
    {
      question: "Who developed the Python programming language?",
      options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
      answer: 1
    },
    {
      question: "In which year was Python first released?",
      options: ["1991", "1985", "2000", "1995"],
      answer: 0
    },
    {
      question: "Which symbol is used to start a comment in Python?",
      options: ["//", "#", "--", "/*"],
      answer: 1
    },
    {
      question: "Which of the following is a valid Python variable name?",
      options: ["2data", "data-set", "data_set", "data set"],
      answer: 2
    },
    {
      question: "What will the `print(2 + 3 * 4)` output?",
      options: ["20", "14", "24", "18"],
      answer: 1
    },
    {
      question: "Which function is used to output something in Python?",
      options: ["print()", "echo()", "display()", "show()"],
      answer: 0
    },
    {
      question: "Which data type is used to store textual data?",
      options: ["int", "str", "float", "bool"],
      answer: 1
    },
    {
      question: "What is the output of `type(10)`?",
      options: ["class 'float'", "class 'str'", "class 'int'", "class 'bool'"],
      answer: 2
    },
    {
      question: "Which of the following is a correct assignment in Python?",
      options: ["x == 5", "int x = 5", "x := 5", "x = 5"],
      answer: 3
    },
    {
      question: "What is the default mode in which Python files are run?",
      options: ["Compiled", "Scripted", "Interpreted", "Bytecode"],
      answer: 2
    },
    {
      question: "Which of these is used to take input from the user?",
      options: ["get()", "input()", "scan()", "read()"],
      answer: 1
    },
    {
      question: "What is the output of `print('3' + '4')`?",
      options: ["34", "7", "12", "Error"],
      answer: 0
    },
    {
      question: "What will the following code print: `print(type(True))`?",
      options: ["class 'bool'", "class 'int'", "class 'str'", "class 'NoneType'"],
      answer: 0
    },
    {
      question: "Which of these is not a core Python data type?",
      options: ["int", "float", "real", "bool"],
      answer: 2
    }
  ],
  lesson2: [
  {
    question: "Which of the following is a numeric data type in Python?",
    options: ["str", "bool", "int", "None"],
    answer: 2
  },
  {
    question: "What is the output of `type(3.14)`?",
    options: ["class 'int'", "class 'str'", "class 'float'", "class 'bool'"],
    answer: 2
  },
  {
    question: "Which of these is a sequence data type?",
    options: ["int", "list", "bool", "float"],
    answer: 1
  },
  {
    question: "What value does the `bool()` function return for an empty string?",
    options: ["True", "False", "None", "Error"],
    answer: 1
  },
  {
    question: "Which of these is a correct boolean literal in Python?",
    options: ["TRUE", "true", "Yes", "True"],
    answer: 3
  },
  {
    question: "What is the result of `len('hello')`?",
    options: ["4", "5", "6", "Error"],
    answer: 1
  },
  {
    question: "Which function tells you the type of a value?",
    options: ["typeof()", "gettype()", "typeof", "type()"],
    answer: 3
  },
  {
    question: "Which of the following is mutable?",
    options: ["tuple", "int", "str", "list"],
    answer: 3
  },
  {
    question: "What is the type of `[1, 2, 3]`?",
    options: ["list", "tuple", "set", "dict"],
    answer: 0
  },
  {
    question: "Which data type can store key-value pairs?",
    options: ["list", "tuple", "dict", "set"],
    answer: 2
  },
  {
    question: "What will `type(True)` return?",
    options: ["class 'str'", "class 'bool'", "class 'int'", "class 'float'"],
    answer: 1
  },
  {
    question: "How do you define a tuple with one element?",
    options: ["(5)", "[5]", "{5}", "(5,)"],
    answer: 3
  },
  {
    question: "What does `None` represent in Python?",
    options: ["Zero", "Empty string", "A null value", "False"],
    answer: 2
  },
  {
    question: "What is the result of `isinstance(5, int)`?",
    options: ["True", "False", "Error", "None"],
    answer: 0
  },
  {
    question: "Which function converts a string to an integer?",
    options: ["str()", "int()", "bool()", "float()"],
    answer: 1
  }
],
  lesson3: [{
    question: "Which function is used to take input from the user in Python?",
    options: ["input()", "get()", "read()", "ask()"],
    answer: 0
  },
  {
    question: "What data type does `input()` return?",
    options: ["int", "float", "str", "bool"],
    answer: 2
  },
  {
    question: "What is the output of `input('Name: ')` if the user types Amy?",
    options: ["Amy", "'Amy'", "\"Amy\"", "All of the above"],
    answer: 0
  },
  {
    question: "To convert a user input into an integer, which function should be used?",
    options: ["str()", "int()", "float()", "bool()"],
    answer: 1
  },
  {
    question: "What happens if you try to convert 'hello' with `int('hello')`?",
    options: ["0", "Error", "None", "hello"],
    answer: 1
  },
  {
    question: "What does `float('3.14')` return?",
    options: ["3", "3.0", "3.14", "'3.14'"],
    answer: 2
  },
  {
    question: "Which function converts a string `'True'` into a boolean?",
    options: ["int()", "str()", "bool()", "float()"],
    answer: 2
  },
  {
    question: "What will `input() + input()` return if user enters 3 and 4?",
    options: ["7", "34", "12", "Error"],
    answer: 1
  },
  {
    question: "How do you take input and convert it to an integer correctly?",
    options: ["int = input()", "int(input())", "input(int())", "int(input)"],
    answer: 1
  },
  {
    question: "If user enters '45.6', how can you convert it to a float?",
    options: ["float('45.6')", "int('45.6')", "bool('45.6')", "str(45.6)"],
    answer: 0
  },
  {
    question: "Which of the following is NOT a valid type conversion function?",
    options: ["int()", "bool()", "float()", "convert()"],
    answer: 3
  },
  {
    question: "How can you safely combine an integer and a string in print?",
    options: ["print('Score: ' + 90)", "print('Score: ' + str(90))", "print(90 + 'Score: ')", "print(str + 90)"],
    answer: 1
  },
  {
    question: "What does `bool('False')` return?",
    options: ["False", "True", "Error", "None"],
    answer: 1
  },
  {
    question: "How do you store a user's name in a variable?",
    options: ["name = input()", "input = name()", "print(name) = input()", "name = str(input"],
    answer: 0
  },
  {
    question: "Which line correctly takes two numbers from the user and adds them?",
    options: ["a + b = input()", "int(input()) + int(input())", "input() + input()", "float + float"],
    answer: 1
  }],
  lesson4: [{
    question: "Which keyword is used for a conditional statement in Python?",
    options: ["if", "for", "define", "when"],
    answer: 0
  },
  {
    question: "What is the output of `if 5 > 3: print('Yes')`?",
    options: ["Error", "Yes", "False", "None"],
    answer: 1
  },
  {
    question: "What is the correct syntax for an else block?",
    options: ["else then:", "else:", "otherwise:", "end:"],
    answer: 1
  },
  {
    question: "Which keyword is used to test multiple conditions after an if statement?",
    options: ["elseif", "elif", "else if", "elif()"],
    answer: 1
  },
  {
    question: "What will `if False:` do?",
    options: ["Execute code inside block", "Skip the block", "Raise Error", "Return True"],
    answer: 1
  },
  {
    question: "What type of loop is used to repeat a block a specific number of times?",
    options: ["while", "if", "for", "do"],
    answer: 2
  },
  {
    question: "What is the output of `for i in range(3): print(i)`?",
    options: ["0 1 2", "1 2 3", "0 1 2 3", "3 2 1"],
    answer: 0
  },
  {
    question: "What does the `break` statement do?",
    options: ["Skips next iteration", "Exits loop entirely", "Restarts loop", "Pauses loop"],
    answer: 1
  },
  {
    question: "Which statement skips to the next loop iteration?",
    options: ["next", "pass", "skip", "continue"],
    answer: 3
  },
  {
    question: "What is the result of `while False:`?",
    options: ["Runs once", "Runs forever", "Never runs", "Raises error"],
    answer: 2
  },
  {
    question: "How many times will `for i in range(0, 5, 2)` loop?",
    options: ["5", "3", "2", "4"],
    answer: 1
  },
  {
    question: "What is the correct way to write a while loop?",
    options: ["while x < 5", "while(x<5):", "while x < 5:", "loop while x < 5:"],
    answer: 2
  },
  {
    question: "What will `pass` do in a loop?",
    options: ["Exit loop", "Do nothing", "Skip next step", "Raise error"],
    answer: 1
  },
  {
    question: "What does `range(1, 6)` produce?",
    options: ["1 to 6", "0 to 5", "1 to 5", "1 to 7"],
    answer: 2
  },
  {
    question: "Which block is always executed after a loop completes?",
    options: ["else", "finally", "done", "end"],
    answer: 0
  }],
  lesson5:[
  {
    question: "Which operator is used to concatenate strings in Python?",
    options: ["&", "+", "*", "%"],
    answer: 1
  },
  {
    question: "What is the output of `'Hello' + 'World'`?",
    options: ["Hello World", "Hello+World", "HelloWorld", "Error"],
    answer: 2
  },
  {
    question: "What is the result of `'Python'[0]`?",
    options: ["P", "y", "n", "0"],
    answer: 0
  },
  {
    question: "Which method returns the number of characters in a string?",
    options: ["count()", "length()", "len()", "size()"],
    answer: 2
  },
  {
    question: "What does `'hi'.upper()` return?",
    options: ["hi", "HI", "Hi", "Error"],
    answer: 1
  },
  {
    question: "Which method makes the first letter uppercase?",
    options: ["title()", "capitalize()", "upper()", "lower()"],
    answer: 1
  },
  {
    question: "What is the result of `'  Amy  '.strip()`?",
    options: ["'Amy'", "'  Amy  '", "'Amy  '", "'  Amy'"],
    answer: 0
  },
  {
    question: "Which method checks if a string is all digits?",
    options: ["isnumeric()", "isdigit()", "isnumber()", "isdigits()"],
    answer: 1
  },
  {
    question: "What does `'Python'.lower()` return?",
    options: ["PYTHON", "Python", "python", "pYTHON"],
    answer: 2
  },
  {
    question: "How do you get the last character of a string `s`?",
    options: ["s[0]", "s[-1]", "s[1]", "s[len]"],
    answer: 1
  },
  {
    question: "Which method splits a string into a list?",
    options: ["slice()", "divide()", "split()", "chop()"],
    answer: 2
  },
  {
    question: "What is the result of `'Amy'.replace('A', 'E')`?",
    options: ["Emy", "Amy", "EMY", "Eay"],
    answer: 0
  },
  {
    question: "What is the output of `'Amy' * 3`?",
    options: ["AmyAmyAmy", "Amy*3", "Amy 3 times", "Error"],
    answer: 0
  },
  {
    question: "Which of these checks if a string starts with 'Py'?",
    options: ["startswith('Py')", "start('Py')", "begins('Py')", "has('Py')"],
    answer: 0
  },
  {
    question: "How do you count the number of times 'a' appears in a string?",
    options: ["count('a')", "str.count('a')", "s.count('a')", "string.count()"],
    answer: 2
  }],
  lesson6: [{
    question: "Which of the following defines a list in Python?",
    options: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "<1, 2, 3>"],
    answer: 2
  },
  {
    question: "What is the index of the first element in a Python list?",
    options: ["1", "0", "-1", "Depends on list type"],
    answer: 1
  },
  {
    question: "What is the output of `len([10, 20, 30])`?",
    options: ["2", "3", "10", "Error"],
    answer: 1
  },
  {
    question: "What does `my_list.append(4)` do?",
    options: ["Replaces 4th item", "Adds 4 at beginning", "Adds 4 at end", "Deletes 4"],
    answer: 2
  },
  {
    question: "How do you access the last item of `nums = [1, 2, 3]`?",
    options: ["nums[3]", "nums[-1]", "nums[0]", "nums[last]"],
    answer: 1
  },
  {
    question: "What happens if you access an index that doesn’t exist?",
    options: ["0 is returned", "None is returned", "Error", "It creates a new item"],
    answer: 2
  },
  {
    question: "What does `list1 + list2` do?",
    options: ["Adds values", "Compares lists", "Concatenates lists", "Deletes duplicates"],
    answer: 2
  },
  {
    question: "Which method removes the first matching value from a list?",
    options: ["remove()", "pop()", "delete()", "clear()"],
    answer: 0
  },
  {
    question: "Which method removes an item at a specific index?",
    options: ["remove(index)", "pop(index)", "delete(index)", "popvalue(index)"],
    answer: 1
  },
  {
    question: "What does `my_list[1:3]` return?",
    options: ["Element 1 and 3", "Elements from index 1 to 2", "Error", "Index 3 only"],
    answer: 1
  },
  {
    question: "What does `list.reverse()` do?",
    options: ["Returns reversed list", "Sorts list", "Changes list in place", "Deletes list"],
    answer: 2
  },
  {
    question: "What is the result of `[1, 2] * 2`?",
    options: ["[2, 4]", "[1, 2, 1, 2]", "Error", "[1, 1, 2, 2]"],
    answer: 1
  },
  {
    question: "Which function sorts a list permanently?",
    options: ["sort()", "sorted()", "order()", "arrange()"],
    answer: 0
  },
  {
    question: "Which function returns a new sorted list without changing the original?",
    options: ["sort()", "sorted()", "reverse()", "reorder()"],
    answer: 1
  },
  {
    question: "What does `my_list.clear()` do?",
    options: ["Deletes first item", "Removes all items", "Resets to None", "Sorts the list"],
    answer: 1
  }],
  lesson7: [
  {
    question: "Which keyword is used to import a module in Python?",
    options: ["require", "include", "import", "load"],
    answer: 2
  },
  {
    question: "What does `math.sqrt(16)` return?",
    options: ["8", "4.0", "4", "16"],
    answer: 1
  },
  {
    question: "Which module provides functions to work with random values?",
    options: ["random", "math", "sys", "os"],
    answer: 0
  },
  {
    question: "How do you import only the `pi` constant from the `math` module?",
    options: ["import math.pi", "import pi", "from math import pi", "math = pi"],
    answer: 2
  },
  {
    question: "Which function tells you the length of an object?",
    options: ["count()", "size()", "length()", "len()"],
    answer: 3
  },
  {
    question: "What does `dir()` do?",
    options: ["Deletes a directory", "Lists valid attributes of an object", "Imports modules", "Creates folders"],
    answer: 1
  },
  {
    question: "Which module gives access to system-specific functions?",
    options: ["os", "sys", "platform", "time"],
    answer: 1
  },
  {
    question: "What will `round(3.67)` return?",
    options: ["3.6", "3", "4", "Error"],
    answer: 2
  },
  {
    question: "What is the output of `abs(-5)`?",
    options: ["5", "-5", "0", "Error"],
    answer: 0
  },
  {
    question: "Which function returns the largest number in a list?",
    options: ["min()", "max()", "top()", "sort()"],
    answer: 1
  },
  {
    question: "Which built-in function converts a string to an integer?",
    options: ["str()", "int()", "float()", "bool()"],
    answer: 1
  },
  {
    question: "What does `type([])` return?",
    options: ["list", "class 'list'", "[]", "object"],
    answer: 1
  },
  {
    question: "Which built-in module helps you work with dates and times?",
    options: ["time", "calendar", "datetime", "date"],
    answer: 2
  },
  {
    question: "How do you install a third-party module using pip?",
    options: ["pip get module_name", "install module_name", "pip install module_name", "pip.add(module_name)"],
    answer: 2
  },
  {
    question: "Which built-in function returns user input as a string?",
    options: ["read()", "scan()", "input()", "get()"],
    answer: 2
  }],
  test:[
  {
    question: "What is the output of print(type(5.0))?",
    options: ["int", "float", "str", "double"],
    answer: 1
  },
  {
    question: "What does print(\"Hello\" + \"World\") display?",
    options: ["Hello World", "HelloWorld", "Hello+World", "Error"],
    answer: 1
  },
  {
    question: "What is the result of 5 // 2?",
    options: ["2.5", "2", "3", "2.0"],
    answer: 1
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "define", "func"],
    answer: 1
  },
  {
    question: "Which function is used to get input from the user?",
    options: ["scan()", "input()", "get()", "fetch()"],
    answer: 1
  },
  {
    question: "What will len(\"Python\") return?",
    options: ["5", "7", "6", "8"],
    answer: 2
  },
  {
    question: "Which is the default file opening mode in Python?",
    options: ["write", "read", "append", "execute"],
    answer: 1
  },
  {
    question: "Which method adds an item to a list?",
    options: ["insert()", "add()", "append()", "extend()"],
    answer: 2
  },
  {
    question: "Which symbol is used for single-line comments?",
    options: ["#", "//", "/**/", "/*"],
    answer: 0
  },
  {
    question: "What does range(2, 5) return?",
    options: ["2, 3, 4, 5", "2, 3, 4", "3, 4, 5", "2 to 5"],
    answer: 1
  },
  {
    question: "How many times will 'for i in range(3):' run?",
    options: ["2", "3", "4", "Infinite"],
    answer: 1
  },
  {
    question: "Which of these is a valid variable name?",
    options: ["1num", "my_var", "my-var", "import"],
    answer: 1
  },
  {
    question: "Which function converts a string to an integer?",
    options: ["str()", "int()", "convert()", "float()"],
    answer: 1
  },
  {
    question: "What is the output of print(2 ** 3)?",
    options: ["6", "5", "8", "9"],
    answer: 2
  },
  {
    question: "What does the 'break' keyword do?",
    options: ["Pauses loop", "Exits loop", "Restarts loop", "Skips current iteration"],
    answer: 1
  },
  {
    question: "What does the 'continue' keyword do?",
    options: ["Exits loop", "Pauses loop", "Skips to next iteration", "Ends program"],
    answer: 2
  },
  {
    question: "What is 'if 5 > 3:' an example of?",
    options: ["Loop", "Function", "Conditional statement", "Syntax error"],
    answer: 2
  },
  {
    question: "Which function gives ASCII value of a character?",
    options: ["chr()", "ord()", "ascii()", "asc()"],
    answer: 1
  },
  {
    question: "Which function gives character from ASCII value?",
    options: ["chr()", "ord()", "ascii()", "to_char()"],
    answer: 0
  },
  {
    question: "Which of the following is immutable?",
    options: ["list", "tuple", "dictionary", "set"],
    answer: 1
  },
  {
    question: "What is the output of 'hello'.upper()?",
    options: ["hello", "Hello", "HELLO", "error"],
    answer: 2
  },
  {
    question: "Which function removes the last item from a list?",
    options: ["pop()", "remove()", "delete()", "discard()"],
    answer: 0
  },
  {
    question: "What does open('file.txt', 'w') do?",
    options: ["Opens file for writing", "Opens file for reading", "Appends to file", "Deletes file"],
    answer: 0
  },
  {
    question: "What does file.read() do?",
    options: ["Reads file content", "Writes to file", "Deletes content", "Closes file"],
    answer: 0
  },
  {
    question: "What does the 'return' keyword do in a function?",
    options: ["Calls the function", "Sends value back", "Ends loop", "Continues function"],
    answer: 1
  },
  {
    question: "What will len([10, 20, 30]) return?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    question: "What is the output of type([])?",
    options: ["tuple", "list", "dict", "string"],
    answer: 1
  },
  {
    question: "What is a Python module?",
    options: ["A variable", "A file with functions", "A data type", "A loop"],
    answer: 1
  },
  {
    question: "Which module provides mathematical functions?",
    options: ["string", "time", "math", "random"],
    answer: 2
  },
  {
    question: "How do you import a module?",
    options: ["import math", "load(math)", "include math", "get math"],
    answer: 0
  },
  {
    question: "Which operator checks for equality?",
    options: ["=", "==", ":=", "==="],
    answer: 1
  },
  {
    question: "Which function opens a file in Python?",
    options: ["open()", "file()", "get()", "access()"],
    answer: 0
  },
  {
    question: "'w' vs 'a' mode in file opening:",
    options: ["Both overwrite", "Both append", "'w' overwrites, 'a' appends", "Both create new file only"],
    answer: 2
  },
  {
    question: "What defines a code block in Python?",
    options: ["Indentation", "Semicolon", "Brackets", "Tabs only"],
    answer: 0
  },
  {
    question: "What is recursion in Python?",
    options: ["Function stopping itself", "Function calling itself", "Loop in function", "Importing same file twice"],
    answer: 1
  },
  {
    question: "What does E-Commerce stand for?",
    options: ["Easy Communication", "Electronic Committee", "Electronic Commerce", "Engine Communication"],
    answer: 2
  },
  {
    question: "Which is a type of E-Commerce?",
    options: ["C2W", "A2A", "B2C", "C3P0"],
    answer: 2
  },
  {
    question: "Which of these is a payment gateway?",
    options: ["Flipkart", "WhatsApp", "Razorpay", "Adobe"],
    answer: 2
  },
  {
    question: "Which payment method does NOT use a card?",
    options: ["Credit Card", "Debit Card", "UPI", "Visa"],
    answer: 2
  },
  {
    question: "What is the full form of SSL?",
    options: ["Secure Software License", "Software Secure Layer", "Secure Socket Layer", "System Security Lock"],
    answer: 2
  },
  {
    question: "What is an advantage of E-Commerce?",
    options: ["Open only on weekdays", "Manual updates", "Available 24x7", "Requires no internet"],
    answer: 2
  },
  {
    question: "What is a major risk in E-Commerce?",
    options: ["Less users", "Lack of space", "Data theft", "No delivery"],
    answer: 2
  },
  {
    question: "Which is NOT an online payment method?",
    options: ["Net banking", "UPI", "Cash on Delivery", "Credit card"],
    answer: 2
  },
  {
    question: "Which is a form of internet marketing?",
    options: ["Road banners", "Email marketing", "TV ads", "Store branding"],
    answer: 1
  },
  {
    question: "What does SEO stand for?",
    options: ["Safe Email Operations", "Search Engine Optimization", "Smart E-Commerce Output", "Secure E-Order"],
    answer: 1
  },
  {
    question: "What is a digital signature used for?",
    options: ["Authentication", "Decoration", "Marketing", "Encryption"],
    answer: 0
  },
  {
    question: "Which is NOT internet marketing?",
    options: ["Social media", "Television ad", "SEO", "Email marketing"],
    answer: 1
  },
  {
    question: "Which is safer for E-Commerce:",
    options: ["HTTP", "HTTPS", "FTP", "WWW"],
    answer: 1
  },
  {
    question: "What is a smart card?",
    options: ["A greeting card", "Card with chip", "Digital license", "Paper bill"],
    answer: 1
  },
  {
    question: "Which of the following is a B2B example?",
    options: ["Retailer to consumer", "Shopper to shopper", "Manufacturer to wholesaler", "Seller to customer"],
    answer: 2
  }
]
};

let currentQuestion = 0;
let userAnswers = [];

function loadQuiz(lesson) {
  const data = quizzes[lesson];
  const quizContainer = document.getElementById("quiz");
  const resultsDiv = document.getElementById("results");

  function showQuestion(index) {
    const q = data[index];
    quizContainer.innerHTML = `
      <div class="question">
        <p>${index + 1}. ${q.question}</p>
        ${q.options.map((opt, i) =>
          `<label><input type="radio" name="option" value="${i}"> ${opt}</label><br>`
        ).join("")}
      </div>
      <button id="nextBtn">${index < data.length - 1 ? "Next" : "Submit"}</button>
    `;

    document.getElementById("nextBtn").onclick = () => {
      const selected = document.querySelector('input[name="option"]:checked');
      if (!selected) return alert("Answer ta dao👉🏻👈🏻");
      userAnswers[index] = parseInt(selected.value);
      currentQuestion++;
      if (currentQuestion < data.length) {
        showQuestion(currentQuestion);
      } else {
        showResults();
      }
    };
  }

  function showResults() {
    let score = 0;
    quizContainer.innerHTML = "";
    data.forEach((q, i) => {
      const correct = userAnswers[i] === q.answer;
      if (correct) score++;
      const userAnswer = userAnswers[i] !== undefined ? q.options[userAnswers[i]] : "No answer";
      const correctAnswer = q.options[q.answer];
      resultsDiv.innerHTML += `
        <div class="question" style="border-left: 6px solid ${correct ? '#2ecc71' : '#e74c3c'}">
          <p><strong>Q${i + 1}:</strong> ${q.question}</p>
          <p>Your answer: ${userAnswer} ${correct ? "✅" : "❌"}</p>
          ${!correct ? `<p>Correct answer: ${correctAnswer}</p>` : ""}
        </div>
      `;
    });
    resultsDiv.innerHTML = `<h2>You scored ${score}/${data.length}</h2>` + resultsDiv.innerHTML;
  }

  showQuestion(currentQuestion);
}

