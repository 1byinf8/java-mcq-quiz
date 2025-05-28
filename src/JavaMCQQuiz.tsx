import { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Trophy, BookOpen } from 'lucide-react';

const JavaMCQQuiz = () => {
  const questions = [
    {
      id: 1,
      question: "Which of these is the correct way to declare an array in Java?",
      options: ["int arr[];", "int[] arr;", "Both A and B", "None of the above"],
      correct: 2,
      explanation: "Both syntaxes are valid in Java. You can declare arrays as 'int arr[];' or 'int[] arr;'. The second form is preferred as it clearly shows the type is an array of integers."
    },
    {
      id: 2,
      question: "What is the index of the last element in an array of size n?",
      options: ["n", "n+1", "n-1", "0"],
      correct: 2,
      explanation: "Array indices start from 0 in Java. So for an array of size n, indices range from 0 to n-1. The last element is at index n-1."
    },
    {
      id: 3,
      question: "What is the default value of elements in an int array in Java?",
      options: ["0", "null", "undefined", "garbage"],
      correct: 0,
      explanation: "In Java, all numeric primitive arrays are initialized with 0 by default. For boolean arrays it's false, for char arrays it's '\\u0000', and for object arrays it's null."
    },
    {
      id: 4,
      question: "Which of the following methods can be used to sort an array?",
      options: ["Arrays.sort()", "Collections.sort()", "SortUtils.sort()", "array.sort()"],
      correct: 0,
      explanation: "Arrays.sort() is the standard method to sort arrays in Java. Collections.sort() is used for Lists, not arrays. SortUtils and array.sort() don't exist in Java."
    },
    {
      id: 5,
      question: "How to find the length of an array in Java?",
      options: ["arr.length()", "arr.size()", "arr.length", "arr.getLength()"],
      correct: 2,
      explanation: "Arrays have a 'length' field (not method) that gives the size. Note it doesn't have parentheses - it's a field, not a method like String.length()."
    },
    {
      id: 6,
      question: "Which of these data types can array store?",
      options: ["Only int", "Only primitive", "Only object", "Any data type"],
      correct: 3,
      explanation: "Java arrays can store any data type - primitives (int, char, boolean, etc.) or objects (String, custom classes, etc.). They're type-safe containers."
    },
    {
      id: 7,
      question: "Arrays in Java are:",
      options: ["Primitive", "Objects", "Interfaces", "Functions"],
      correct: 1,
      explanation: "Arrays in Java are objects. They inherit from Object class and have methods like toString(), equals(), etc. They're stored in heap memory like other objects."
    },
    {
      id: 8,
      question: "Which exception occurs when array index is out of range?",
      options: ["IndexOutOfBoundsException", "ArrayIndexOutOfBoundsException", "IllegalAccessException", "NullPointerException"],
      correct: 1,
      explanation: "ArrayIndexOutOfBoundsException is thrown when trying to access an array with an invalid index (negative or >= array length). It's a subclass of IndexOutOfBoundsException."
    },
    {
      id: 9,
      question: "Can we change the size of an array after initialization?",
      options: ["Yes", "No", "Only in constructor", "Only in main"],
      correct: 1,
      explanation: "Arrays in Java have fixed size once created. You cannot change their length. If you need dynamic sizing, use ArrayList or other Collections."
    },
    {
      id: 10,
      question: "Which loop is best for array traversal?",
      options: ["do-while", "for", "enhanced for", "while"],
      correct: 2,
      explanation: "Enhanced for loop (for-each) is best for simple traversal as it's cleaner and avoids index errors: 'for(int x : arr)'. Regular for loop is better when you need indices."
    },
    {
      id: 11,
      question: "Which class is used for creating immutable strings?",
      options: ["StringBuilder", "StringBuffer", "String", "CharSequence"],
      correct: 2,
      explanation: "String class creates immutable strings - once created, they cannot be changed. StringBuilder and StringBuffer are mutable. Any 'modification' to String creates a new object."
    },
    {
      id: 12,
      question: "How to compare two strings in Java?",
      options: ["==", ".equals()", ".compare()", "==="],
      correct: 1,
      explanation: "Use .equals() to compare string content. == compares references (memory addresses), not content. === doesn't exist in Java. .compare() doesn't exist either."
    },
    {
      id: 13,
      question: "Which method returns character at a specific index?",
      options: ["charAt()", "getChar()", "character()", "indexOf()"],
      correct: 0,
      explanation: "charAt(index) returns the character at specified index. indexOf() does the opposite - finds index of a character. getChar() and character() don't exist."
    },
    {
      id: 14,
      question: "StringBuilder is:",
      options: ["Immutable", "Mutable", "Final", "Abstract"],
      correct: 1,
      explanation: "StringBuilder is mutable - you can modify its content without creating new objects. This makes it efficient for multiple string operations compared to immutable String."
    },
    {
      id: 15,
      question: 'What is the output of "Hello" + 5 + 10?',
      options: ["Hello510", "15Hello", "Hello15", "Error"],
      correct: 0,
      explanation: "String concatenation is left-associative. 'Hello' + 5 becomes 'Hello5', then 'Hello5' + 10 becomes 'Hello510'. Numbers are converted to strings when concatenated with strings."
    },
    {
      id: 16,
      question: "Which method checks if string starts with a character?",
      options: ["start()", "startsWith()", "beginsWith()", "checkStart()"],
      correct: 1,
      explanation: "startsWith() method checks if a string starts with specified prefix. You can also specify starting index: str.startsWith('pre', 2)."
    },
    {
      id: 17,
      question: "Which method is used to find length of a string?",
      options: ["length", "size()", "length()", "getLength()"],
      correct: 2,
      explanation: "String.length() method returns the number of characters. Note it's a method (with parentheses) unlike array.length which is a field."
    },
    {
      id: 18,
      question: "What does trim() do?",
      options: ["Removes whitespace", "Converts to lowercase", "Deletes string", "Joins strings"],
      correct: 0,
      explanation: "trim() removes leading and trailing whitespace characters (spaces, tabs, newlines). It doesn't modify the original string but returns a new trimmed string."
    },
    {
      id: 19,
      question: "How are strings stored in memory?",
      options: ["Heap", "Stack", "Constant Pool", "Heap and String Pool"],
      correct: 3,
      explanation: "String literals are stored in String Pool (part of heap), while String objects created with 'new' are stored in heap. String Pool helps reuse identical string literals for memory efficiency."
    },
    {
      id: 20,
      question: "Which of the following can change a string?",
      options: ["String", "StringBuilder", "StringBuffer", "Both B and C"],
      correct: 3,
      explanation: "Both StringBuilder and StringBuffer are mutable and can modify string content. StringBuffer is thread-safe while StringBuilder is not. String is immutable."
    },
    {
      id: 21,
      question: "What does 1 << 2 return?",
      options: ["1", "2", "4", "8"],
      correct: 2,
      explanation: "Left shift (<<) multiplies by 2^n. 1 << 2 means shift 1 left by 2 positions: 001 becomes 100 in binary, which is 4 in decimal."
    },
    {
      id: 22,
      question: "Which operator is used for bitwise AND?",
      options: ["&", "&&", "|", "||"],
      correct: 0,
      explanation: "Single & is bitwise AND that operates on individual bits. Double && is logical AND for boolean expressions. | is bitwise OR, || is logical OR."
    },
    {
      id: 23,
      question: "Bitwise OR of 5 | 3 is?",
      options: ["7", "1", "3", "5"],
      correct: 0,
      explanation: "5 in binary is 101, 3 is 011. Bitwise OR: 101 OR 011 = 111 (binary) = 7 (decimal). OR returns 1 if either bit is 1."
    },
    {
      id: 24,
      question: "What is ~0 in binary?",
      options: ["0", "-1", "1", "undefined"],
      correct: 1,
      explanation: "~ is bitwise NOT (complement). ~0 flips all bits of 0. In two's complement representation (Java uses this), flipping all bits of 0 gives -1."
    },
    {
      id: 25,
      question: "How to check if a number is even using bitwise op?",
      options: ["(n & 1) == 0", "(n | 1) == 0", "(n ^ 1) == 0", "n == 2"],
      correct: 0,
      explanation: "Even numbers have 0 in their least significant bit (LSB). AND with 1 checks the LSB: if n & 1 == 0, the number is even."
    },
    {
      id: 26,
      question: "How to unset ith bit?",
      options: ["n & ~(1 << i)", "n | (1 << i)", "n ^ (1 << i)", "~n << i"],
      correct: 0,
      explanation: "To unset (make 0) the ith bit: create a mask with 1 << i, invert it with ~, then AND with n. This keeps all bits except the ith bit."
    },
    {
      id: 27,
      question: "Which operator is used for bitwise XOR?",
      options: ["^", "&", "!", "||"],
      correct: 0,
      explanation: "^ is XOR (exclusive OR). It returns 1 when bits are different, 0 when same. & is AND, ! is logical NOT, || is logical OR."
    },
    {
      id: 28,
      question: "How many bits are there in a byte?",
      options: ["2", "4", "8", "16"],
      correct: 2,
      explanation: "A byte contains 8 bits. This is a fundamental unit in computing. 2 bytes = 16 bits, 4 bytes = 32 bits (size of int in Java)."
    },
    {
      id: 29,
      question: "What is 4 >> 1?",
      options: ["4", "3", "2", "1"],
      correct: 2,
      explanation: "Right shift (>>) divides by 2^n. 4 >> 1 means shift 4 right by 1 position: 100 becomes 010 in binary, which is 2 in decimal."
    },
    {
      id: 30,
      question: "Which of these is not a bitwise operator?",
      options: ["~", "&", "^", "&&"],
      correct: 3,
      explanation: "&& is logical AND operator for boolean expressions, not bitwise. ~, &, ^ are bitwise operators that work on individual bits."
    },
    {
      id: 31,
      question: "What is recursion?",
      options: ["Looping", "Function calling itself", "Goto statement", "None"],
      correct: 1,
      explanation: "Recursion is when a function calls itself to solve a smaller version of the same problem. It needs a base case to stop the recursive calls."
    },
    {
      id: 32,
      question: "What is needed to avoid infinite recursion?",
      options: ["loop", "base case", "print", "scanner"],
      correct: 1,
      explanation: "Base case is essential to stop recursion. It's a condition where the function doesn't call itself, preventing infinite recursion and stack overflow."
    },
    {
      id: 33,
      question: "Which function can be written using recursion?",
      options: ["factorial", "fibonacci", "binary search", "all"],
      correct: 3,
      explanation: "All these functions can be implemented recursively. Factorial: n! = n * (n-1)!, Fibonacci: fib(n) = fib(n-1) + fib(n-2), Binary search divides the problem in half."
    },
    {
      id: 34,
      question: "Recursive function must always:",
      options: ["call itself", "terminate", "have base case", "all"],
      correct: 3,
      explanation: "A proper recursive function must: call itself (that's what makes it recursive), have a base case (to stop), and terminate (to avoid infinite recursion)."
    },
    {
      id: 35,
      question: "Recursion is similar to:",
      options: ["loop", "class", "stack", "array"],
      correct: 2,
      explanation: "Recursion uses the call stack. Each recursive call is pushed onto the stack, and when base case is reached, calls are popped off. This LIFO behavior is similar to stack data structure."
    },
    {
      id: 36,
      question: "Which of these is tail recursion?",
      options: ["Function ends with recursive call", "First line is recursion", "No recursion", "Recursion before loop"],
      correct: 0,
      explanation: "Tail recursion is when the recursive call is the last operation in the function. This allows for optimization where the compiler can reuse the same stack frame."
    },
    {
      id: 37,
      question: "Recursion causes:",
      options: ["memory leak", "stack overflow", "compile error", "infinite loop"],
      correct: 1,
      explanation: "Deep recursion or infinite recursion can cause stack overflow because each recursive call adds a frame to the call stack, consuming memory."
    },
    {
      id: 38,
      question: "Which is not a use case of recursion?",
      options: ["Tree traversal", "Sorting", "Finding GCD", "Reading input"],
      correct: 3,
      explanation: "Reading input is a simple I/O operation that doesn't need recursion. Tree traversal, sorting (quicksort, mergesort), and GCD are classic recursive problems."
    },
    {
      id: 39,
      question: "Recursion improves:",
      options: ["speed", "readability", "memory", "none"],
      correct: 1,
      explanation: "Recursion primarily improves code readability and elegance for problems that have recursive nature. It often uses more memory and may be slower than iterative solutions."
    },
    {
      id: 40,
      question: "Recursion is handled by:",
      options: ["queue", "heap", "stack", "register"],
      correct: 2,
      explanation: "The call stack handles recursion. Each function call is pushed onto the stack with its local variables and parameters. When function returns, it's popped from the stack."
    },
    {
      id: 41,
      question: "Which concept hides implementation details?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
      correct: 3,
      explanation: "Abstraction hides implementation details and shows only essential features. Encapsulation bundles data and methods. Both work together to hide complexity."
    },
    {
      id: 42,
      question: "Java supports:",
      options: ["Single inheritance", "Multiple inheritance", "Multilevel", "Both A and C"],
      correct: 3,
      explanation: "Java supports single inheritance (one superclass) and multilevel inheritance (A->B->C chain), but not multiple inheritance of classes to avoid diamond problem. Interfaces allow multiple inheritance."
    },
    {
      id: 43,
      question: "Which keyword is used to inherit a class?",
      options: ["implements", "inherits", "extends", "super"],
      correct: 2,
      explanation: "'extends' is used for class inheritance. 'implements' is for interfaces. 'super' refers to parent class. 'inherits' is not a Java keyword."
    },
    {
      id: 44,
      question: "What is method overloading?",
      options: ["Same method name, different params", "Same params", "Different return", "Class over class"],
      correct: 0,
      explanation: "Method overloading means multiple methods with same name but different parameters (number, type, or order). Return type alone cannot distinguish overloaded methods."
    },
    {
      id: 45,
      question: "Which concept allows object to behave differently?",
      options: ["Inheritance", "Abstraction", "Polymorphism", "Encapsulation"],
      correct: 2,
      explanation: "Polymorphism allows objects of different classes to be treated as objects of a common base class, and they can behave differently based on their actual type (method overriding)."
    },
    {
      id: 46,
      question: "Which class can't be extended?",
      options: ["abstract", "final", "static", "sealed"],
      correct: 1,
      explanation: "'final' classes cannot be extended (inherited). Examples: String, Integer. 'abstract' classes are meant to be extended. 'static' is not used for classes (except nested)."
    },
    {
      id: 47,
      question: "Can constructor be overloaded?",
      options: ["Yes", "No", "Only once", "Only with static"],
      correct: 0,
      explanation: "Yes, constructors can be overloaded by having different parameter lists. This allows creating objects in different ways. Constructor chaining uses this()/super()."
    },
    {
      id: 48,
      question: "Which keyword refers to current object?",
      options: ["super", "self", "current", "this"],
      correct: 3,
      explanation: "'this' refers to the current object instance. Used to distinguish between instance variables and parameters, or to call other constructors."
    },
    {
      id: 49,
      question: "Can a class have multiple constructors?",
      options: ["Yes", "No", "Only default", "Only parameterized"],
      correct: 0,
      explanation: "Yes, a class can have multiple constructors with different parameters (constructor overloading). If no constructor is defined, Java provides a default no-arg constructor."
    },
    {
      id: 50,
      question: "Which is parent of all classes?",
      options: ["Base", "Object", "Main", "Class"],
      correct: 1,
      explanation: "Object class is the root of all Java classes. Every class inherits from Object either directly or indirectly, getting methods like toString(), equals(), hashCode()."
    },
    {
      id: 51,
      question: "Which of the following is not a primitive type?",
      options: ["int", "boolean", "float", "String"],
      correct: 3,
      explanation: "String is a class (reference type), not a primitive. Java has 8 primitives: byte, short, int, long, float, double, char, boolean."
    },
    {
      id: 52,
      question: "Default value of boolean is:",
      options: ["true", "false", "0", "null"],
      correct: 1,
      explanation: "boolean primitive defaults to false. Boolean wrapper class defaults to null. Only reference types default to null."
    },
    {
      id: 53,
      question: "Which keyword is used to declare constant?",
      options: ["static", "final", "const", "var"],
      correct: 1,
      explanation: "'final' makes variables constant (cannot be reassigned). 'const' is reserved but not used. 'static' makes class-level variables. Often constants are 'static final'."
    },
    {
      id: 54,
      question: "What is size of int in Java?",
      options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
      correct: 1,
      explanation: "int is 4 bytes (32 bits) in Java, regardless of platform. Range: -2^31 to 2^31-1. byte=1, short=2, int=4, long=8 bytes."
    },
    {
      id: 55,
      question: "Which data type is used for 64-bit numbers?",
      options: ["int", "long", "double", "short"],
      correct: 1,
      explanation: "long is 64-bit integer type. double is also 64-bit but for floating-point numbers. int is 32-bit, short is 16-bit."
    },
    {
      id: 56,
      question: "Which type stores decimal values?",
      options: ["float", "double", "both A and B", "long"],
      correct: 2,
      explanation: "Both float (32-bit) and double (64-bit) store decimal values. double is more precise and is the default for decimal literals. long stores integers only."
    },
    {
      id: 57,
      question: "What is the default value of object references?",
      options: ["0", "false", "null", "undefined"],
      correct: 2,
      explanation: "All object references default to null, indicating they don't point to any object. Accessing null references throws NullPointerException."
    },
    {
      id: 58,
      question: "Which of the following is invalid variable name?",
      options: ["$value", "_num", "2data", "data2"],
      correct: 2,
      explanation: "Variable names cannot start with digits. They can start with letter, underscore, or dollar sign. '2data' is invalid, 'data2' is valid."
    },
    {
      id: 59,
      question: "Which keyword declares a variable?",
      options: ["let", "var", "int", "New"],
      correct: 2,
      explanation: "You declare variables with their data type like 'int', 'String', etc. 'var' exists (local variable type inference) but 'int' is more specific. 'let' is JavaScript."
    },
    {
      id: 60,
      question: "Wrapper class for int is:",
      options: ["Integer", "Int", "intClass", "WrapperInt"],
      correct: 0,
      explanation: "Integer is the wrapper class for int primitive. It provides utility methods and allows int to be used where objects are required (collections, generics)."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === questions[currentQuestion].correct;
      const newAnswers = [...answers, {
        questionId: questions[currentQuestion].id,
        selected: selectedAnswer,
        correct: questions[currentQuestion].correct,
        isCorrect,
        explanation: questions[currentQuestion].explanation
      }];
      setAnswers(newAnswers);
      
      if (isCorrect) {
        setScore(score + 1);
      }

      setShowResult(true);
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setShowResult(false);
        } else {
          setQuizCompleted(true);
        }
      }, 2000); // Increased time to read explanation
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return 'Outstanding! You have mastered Java fundamentals!';
    if (percentage >= 80) return 'Excellent! You have a strong grasp of Java concepts!';
    if (percentage >= 70) return 'Good job! Keep practicing to strengthen your understanding!';
    if (percentage >= 60) return 'Not bad! Review the concepts and try again!';
    return 'Keep studying! Focus on the explanations and practice more!';
  };

  if (quizCompleted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <div className="text-center mb-8">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h1>
          <div className={`text-2xl font-bold mb-2 ${getScoreColor()}`}>
            Score: {score}/{questions.length} ({Math.round((score/questions.length)*100)}%)
          </div>
          <p className="text-lg text-gray-600 mb-6">{getScoreMessage()}</p>
          
          <button
            onClick={restartQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Restart Quiz
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">📚 Review Your Answers:</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {answers.map((answer, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${answer.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {answer.isCorrect ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />}
                  <span className="font-semibold">Question {index + 1}</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{questions[index].question}</p>
                <p className="text-sm mb-2">
                  <span className="font-medium">Your answer:</span> {questions[index].options[answer.selected]}
                </p>
                {!answer.isCorrect && (
                  <p className="text-sm text-green-700 mb-2">
                    <span className="font-medium">Correct answer:</span> {questions[index].options[answer.correct]}
                  </p>
                )}
                <div className="text-xs text-gray-600 bg-white p-2 rounded border-l-2 border-blue-300">
                  <BookOpen className="w-3 h-3 inline mr-1" />
                  <span className="font-medium">Explanation:</span> {answer.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Complete Java MCQ Quiz</h1>
          <div className="text-lg font-semibold text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
          ></div>
        </div>

        <div className="text-right text-sm text-gray-600">
          Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                showResult
                  ? index === questions[currentQuestion].correct
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : index === selectedAnswer && selectedAnswer !== questions[currentQuestion].correct
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50'
                  : selectedAnswer === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-500 w-6">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span>{option}</span>
                {showResult && (
                  <div className="ml-auto">
                    {index === questions[currentQuestion].correct && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {index === selectedAnswer && selectedAnswer !== questions[currentQuestion].correct && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`p-4 rounded-lg mb-4 ${
            selectedAnswer === questions[currentQuestion].correct 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center gap-2 mb-3">
              {selectedAnswer === questions[currentQuestion].correct ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Correct! 🎉</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-800">
                    Incorrect. The correct answer is {String.fromCharCode(65 + questions[currentQuestion].correct)}.
                  </span>
                </>
              )}
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-blue-400">
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-blue-800">Explanation:</span>
                  <p className="text-sm text-gray-700 mt-1">{questions[currentQuestion].explanation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <div className="text-sm text-gray-500">
            Topics: Arrays • Strings • Bitwise Ops • Recursion • OOP • Data Types
          </div>
          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JavaMCQQuiz;