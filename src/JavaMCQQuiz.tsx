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
    },
      {
        id: 61,
        question: "Find the odd man out: 10, 25, 45, 54, 60, 75, 80",
        options: ["10", "45", "54", "75"],
        correct: 2,
        explanation: "All numbers except 54 are divisible by 5. 54 is the only number that is not divisible by 5, making it the odd one out."
      },
      {
        id: 62,
        question: "What was the day of the week on 17th June, 1998?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correct: 2,
        explanation: "Using the day calculation formula or calendar reference, 17th June 1998 fell on a Wednesday."
      },
      {
        id: 63,
        question: "The ratio between the perimeter and the breadth of a rectangle is 5 : 1. If the area of the rectangle is 216 sq. cm, what is the length of the rectangle?",
        options: ["16 cm", "18 cm", "24 cm", "None of these"],
        correct: 1,
        explanation: "Let breadth = b, then perimeter = 5b. Since perimeter = 2(l + b), we have 5b = 2(l + b), which gives l = 1.5b. With area = l × b = 216, we get 1.5b² = 216, so b = 12 cm and l = 18 cm."
      },
      {
        id: 64,
        question: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
        options: ["Rs. 1090", "Rs. 1160", "Rs. 1190", "Rs. 1202"],
        correct: 2,
        explanation: "Loss = 15% of 1400 = 0.15 × 1400 = Rs. 210. Selling price = Cost price - Loss = 1400 - 210 = Rs. 1190."
      },
      {
        id: 65,
        question: "A and B started a partnership business investing some amount in the ratio of 3 : 5. C joined then after six months with an amount equal to that of B. In what proportion should the profit at the end of one year be distributed among A, B and C?",
        options: ["3 : 5 : 2", "3 : 5 : 5", "6 : 10 : 5", "Data inadequate"],
        correct: 2,
        explanation: "A's investment = 3x for 12 months = 36x months. B's investment = 5x for 12 months = 60x months. C's investment = 5x for 6 months = 30x months. Ratio = 36:60:30 = 6:10:5."
      },
      {
        id: 66,
        question: "The average weight of 8 person's increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
        options: ["76 kg", "76.5 kg", "85 kg", "Data inadequate"],
        correct: 2,
        explanation: "Increase in total weight = 8 × 2.5 = 20 kg. Weight of new person = Weight of replaced person + Increase = 65 + 20 = 85 kg."
      },
      {
        id: 67,
        question: "How many kilogram of sugar costing Rs. 9 per kg must be mixed with 27 kg of sugar costing Rs. 7 per kg so that there may be a gain of 10% by selling the mixture at Rs. 9.24 per kg?",
        options: ["36 kg", "42 kg", "54 kg", "63 kg"],
        correct: 3,
        explanation: "Cost price of mixture should be Rs. 8.4 per kg (since 9.24 ÷ 1.1 = 8.4). Using alligation: (9-8.4):(8.4-7) = 0.6:1.4 = 3:7. So for 27 kg of Rs. 7 sugar, we need (27×3)÷7 = 63 kg of Rs. 9 sugar."
      },
      {
        id: 68,
        question: "A motorboat, whose speed in 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is:",
        options: ["4", "5", "6", "10"],
        correct: 1,
        explanation: "Let stream speed = s km/hr. Downstream speed = 15+s, Upstream speed = 15-s. Time = 30/(15+s) + 30/(15-s) = 4.5 hours. Solving: 60(15-s+15+s)/((15+s)(15-s)) = 4.5, which gives 225-s² = 400, so s = 5 km/hr."
      },
      {
        id: 69,
        question: "In a mixture 60 litres, the ratio of milk and water 2 : 1. If this ratio is to be 1 : 2, then the quantity of water to be further added is:",
        options: ["20 litres", "30 litres", "40 litres", "60 litres"],
        correct: 3,
        explanation: "Initially: Milk = 40L, Water = 20L. For ratio 1:2, if milk remains 40L, water needed = 80L. Additional water = 80 - 20 = 60 litres."
      },
      {
        id: 70,
        question: "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
        options: ["1 hour", "2 hours", "6 hours", "8 hours"],
        correct: 2,
        explanation: "Let A takes x hours, B takes (x+6) hours. Combined rate: 1/x + 1/(x+6) = 1/4. Solving: (x+6+x)/(x(x+6)) = 1/4, which gives x² + 6x = 8x + 24, so x² - 2x - 24 = 0. Therefore x = 6 hours."
      },
      {
        id: 71,
        question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Cost price = 6 toffees for Re. 1, so cost per toffee = 1/6 rupee. For 20% gain, selling price per toffee = (1/6) × 1.2 = 1/5 rupee. So toffees sold for Re. 1 = 1 ÷ (1/5) = 5 toffees."
      },
      {
        id: 72,
        question: "A, B, C subscribe Rs. 50,000 for a business. A subscribes Rs. 4000 more than B and B Rs. 5000 more than C. Out of a total profit of Rs. 35,000, A receives:",
        options: ["Rs. 8400", "Rs. 11,900", "Rs. 13,600", "Rs. 14,700"],
        correct: 3,
        explanation: "Let C = x, then B = x + 5000, A = x + 9000. Total: x + (x + 5000) + (x + 9000) = 50000, so 3x = 36000, x = 12000. A = 21000, B = 17000, C = 12000. A's share = (21000/50000) × 35000 = Rs. 14,700."
      },
      {
        id: 73,
        question: "In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
        options: ["6.25", "6.5", "6.75", "7"],
        correct: 0,
        explanation: "Runs scored in first 10 overs = 10 × 3.2 = 32 runs. Runs needed in remaining 40 overs = 282 - 32 = 250 runs. Required run rate = 250/40 = 6.25 runs per over."
      },
      {
        id: 74,
        question: "Tea worth Rs. 126 per kg and Rs. 135 per kg are mixed with a third variety in the ratio 1 : 1 : 2. If the mixture is worth Rs. 153 per kg, the price of the third variety per kg will be:",
        options: ["Rs. 169.50", "Rs. 170", "Rs. 175.50", "Rs. 180"],
        correct: 2,
        explanation: "Let third variety cost Rs. x per kg. Total cost for 4 kg mixture = 126 + 135 + 2x = 261 + 2x. Cost of mixture = 4 × 153 = 612. So 261 + 2x = 612, which gives 2x = 351, therefore x = Rs. 175.50."
      },
      {
        id: 75,
        question: "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
        options: ["2 hours", "3 hours", "4 hours", "5 hours"],
        correct: 2,
        explanation: "Downstream speed = boat speed + stream speed = 13 + 4 = 17 km/hr. Time = Distance/Speed = 68/17 = 4 hours."
      },
      {
        id: 76,
        question: "Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:",
        options: ["2 : 5", "3 : 5", "4 : 5", "6 : 7"],
        correct: 2,
        explanation: "Let the third number be x. First number = 1.2x, Second number = 1.5x. Ratio = 1.2x : 1.5x = 1.2 : 1.5 = 12 : 15 = 4 : 5."
      },
      {
        id: 77,
        question: "Two pipes A and B can fill a cistern in 37.5 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        options: ["5 min.", "9 min.", "10 min.", "15 min."],
        correct: 1,
        explanation: "Let B work for t minutes. A works for 30 minutes. Work done: t/45 + 30/37.5 = 1. Solving: t/45 + 4/5 = 1, so t/45 = 1/5, therefore t = 9 minutes."
      },
      {
        id: 78,
        question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        options: ["7", "8", "9", "10", "11"],
        correct: 3,
        explanation: "Let C's age = x. Then B's age = 2x, A's age = 2x + 2. Total: x + 2x + (2x + 2) = 27, so 5x + 2 = 27, which gives x = 5. Therefore, B's age = 2x = 10 years."
      },
      {
        id: 79,
        question: "Find the odd man out: 396, 462, 572, 427, 671, 264",
        options: ["396", "427", "671", "264"],
        correct: 1,
        explanation: "All numbers except 427 are divisible by 11. 396÷11=36, 462÷11=42, 572÷11=52, 671÷11=61, 264÷11=24, but 427÷11=38.8... (not divisible). So 427 is the odd one out."
      },
      {
        id: 80,
        question: "What will be the day of the week 15th August, 2010?",
        options: ["Sunday", "Monday", "Tuesday", "Friday"],
        correct: 0,
        explanation: "Using day calculation methods or calendar reference, 15th August 2010 was a Sunday."
      },
      {
        id: 81,
        question: "Find the odd man out: 8, 27, 64, 100, 125, 216, 343",
        options: ["27", "100", "125", "343"],
        correct: 1,
        explanation: "All numbers except 100 are perfect cubes. 8=2³, 27=3³, 64=4³, 125=5³, 216=6³, 343=7³, but 100 is not a perfect cube. So 100 is the odd one out."
      },
      {
        id: 82,
        question: "What was the day of the week on 28th May, 2006?",
        options: ["Thursday", "Friday", "Saturday", "Sunday"],
        correct: 3,
        explanation: "Using day calculation methods or calendar reference, 28th May 2006 was a Sunday."
      },
      {
        id: 83,
        question: "An error 2% in excess is made while measuring the side of a square. The percentage of error in the calculated area of the square is:",
        options: ["2%", "2.02%", "4%", "4.04%"],
        correct: 3,
        explanation: "If side is measured as 102% of actual, then area = (1.02)² = 1.0404 times actual area. Error = 1.0404 - 1 = 0.0404 = 4.04%."
      },
      {
        id: 84,
        question: "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
        options: ["Rs. 18.20", "Rs. 70", "Rs. 72", "Rs. 88.25"],
        correct: 2,
        explanation: "Let cost price = C. Selling price = C + 22.5% of C = 1.225C = 392. So C = 392/1.225 = Rs. 320. Profit = 392 - 320 = Rs. 72."
      },
      {
        id: 85,
        question: "A starts business with Rs. 3500 and after 5 months, B joins with A as his partner. After a year, the profit is divided in the ratio 2 : 3. What is B's contribution in the capital?",
        options: ["Rs. 7500", "Rs. 8000", "Rs. 8500", "Rs. 9000"],
        correct: 3,
        explanation: "A's investment = 3500 × 12 = 42000 month-rupees. Let B's investment = x. B's investment = x × 7 = 7x month-rupees. Ratio: 42000 : 7x = 2 : 3. So 42000/7x = 2/3, which gives x = Rs. 9000."
      },
      {
        id: 86,
        question: "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
        options: ["0", "1", "10", "19"],
        correct: 3,
        explanation: "If the average is zero, the sum is zero. To maximize positive numbers, we can have 19 positive numbers and 1 negative number whose absolute value equals the sum of the 19 positive numbers."
      },
      {
        id: 87,
        question: "In what ratio must a grocer mix two varieties of pulses costing Rs. 15 and Rs. 20 per kg respectively so as to get a mixture worth Rs. 16.50 kg?",
        options: ["3 : 7", "5 : 7", "7 : 3", "7 : 5"],
        correct: 2,
        explanation: "Using alligation: (20 - 16.5) : (16.5 - 15) = 3.5 : 1.5 = 7 : 3. So Rs. 15 variety : Rs. 20 variety = 7 : 3."
      },
      {
        id: 88,
        question: "A boat running upstream takes 8 hours 48 minutes to cover a certain distance, while it takes 4 hours to cover the same distance running downstream. What is the ratio between the speed of the boat and speed of the water current respectively?",
        options: ["2 : 1", "3 : 2", "8 : 3", "Cannot be determined"],
        correct: 2,
        explanation: "Let boat speed = b, current speed = c. Upstream time = 8.8 hrs, downstream time = 4 hrs. Distance/(b-c) = 8.8, Distance/(b+c) = 4. So (b+c)/(b-c) = 8.8/4 = 2.2 = 11/5. Solving: 5b + 5c = 11b - 11c, so 6b = 16c, giving b:c = 8:3."
      },
      {
        id: 89,
        question: "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
        options: ["2 : 3 : 4", "6 : 7 : 8", "6 : 8 : 9", "None of these"],
        correct: 0,
        explanation: "Original ratio 5:7:8. After increase: 5×1.4 : 7×1.5 : 8×1.75 = 7 : 10.5 : 14 = 14 : 21 : 28 = 2 : 3 : 4."
      },
      {
        id: 90,
        question: "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
        options: ["20 hours", "25 hours", "35 hours", "Cannot be determined"],
        correct: 2,
        explanation: "Let A's rate = 1/x per hour. Then B's rate = 2/x, C's rate = 4/x. Combined rate = 1/x + 2/x + 4/x = 7/x = 1/5. So x = 35 hours."
      },
      {
        id: 91,
        question: "Find the odd man out: 3, 5, 11, 14, 17, 21",
        options: ["21", "17", "14", "3"],
        correct: 2,
        explanation: "All numbers except 14 are prime numbers. 3, 5, 11, 17 are prime, but 14 = 2 × 7 is composite. So 14 is the odd one out."
      },
      {
        id: 92,
        question: "It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
        options: ["Sunday", "Saturday", "Friday", "Wednesday"],
        correct: 2,
        explanation: "From 2006 to 2010 = 4 years. Number of leap years = 1 (2008). Total days = 4×365 + 1 = 1461 days. 1461 ÷ 7 = 208 remainder 5. So 5 days after Sunday = Friday."
      },
      {
        id: 93,
        question: "The ratio between the length and the breadth of a rectangular park is 3 : 2. If a man cycling along the boundary of the park at the speed of 12 km/hr completes one round in 8 minutes, then the area of the park (in sq. m) is:",
        options: ["15360", "153600", "30720", "307200"],
        correct: 1,
        explanation: "Let length = 3x, breadth = 2x. Perimeter = 2(3x + 2x) = 10x. Distance in 8 minutes = 12 × (8/60) = 1.6 km = 1600 m. So 10x = 1600, x = 160. Area = 3x × 2x = 6x² = 6 × 160² = 153,600 sq.m."
      },
      {
        id: 94,
        question: "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
        options: ["Rs. 2000", "Rs. 2200", "Rs. 2400", "Data inadequate"],
        correct: 0,
        explanation: "Let cost price = C. Profit% = (1920-C)/C × 100, Loss% = (C-1280)/C × 100. Since they're equal: (1920-C)/C = (C-1280)/C. So 1920-C = C-1280, giving C = 1600. For 25% profit: SP = 1600 × 1.25 = Rs. 2000."
      },
      {
        id: 95,
        question: "Three partners shared the profit in a business in the ratio 5 : 7 : 8. They had partnered for 14 months, 8 months and 7 months respectively. What was the ratio of their investments?",
        options: ["5 : 7 : 8", "20 : 49 : 64", "38 : 28 : 21", "None of these"],
        correct: 1,
        explanation: "Profit ratio = Investment ratio × Time ratio. Let investments be I₁ : I₂ : I₃. Then I₁×14 : I₂×8 : I₃×7 = 5 : 7 : 8. So I₁ : I₂ : I₃ = 5/14 : 7/8 : 8/7 = 20 : 49 : 64."
      },
      {
        id: 96,
        question: "A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?",
        options: ["Rs. 4991", "Rs. 5991", "Rs. 6001", "Rs. 6991"],
        correct: 0,
        explanation: "Total for 6 months = 6 × 6500 = 39,000. Sum of 5 months = 6435 + 6927 + 6855 + 7230 + 6562 = 34,009. Sixth month sale = 39,000 - 34,009 = Rs. 4,991."
      },
      {
        id: 97,
        question: "A can contains a mixture of two liquids A and B is the ratio 7 : 5. When 9 litres of mixture are drawn off and the can is filled with B, the ratio of A and B becomes 7 : 9. How many litres of liquid A was contained by the can initially?",
        options: ["10", "20", "21", "25"],
        correct: 2,
        explanation: "Let initial quantity = 12x (7x of A, 5x of B). After removing 9L: A = 7x - (7/12)×9 = 7x - 5.25, B = 5x - (5/12)×9 + 9 = 5x + 5.25. New ratio: (7x-5.25):(5x+5.25) = 7:9. Solving: 9(7x-5.25) = 7(5x+5.25), gives x = 3. Initial A = 7×3 = 21L."
      },
      {
        id: 98,
        question: "A man's speed with the current is 15 km/hr and the speed of the current is 2.5 km/hr. The man's speed against the current is:",
        options: ["8.5 km/hr", "9 km/hr", "10 km/hr", "12.5 km/hr"],
        correct: 2,
        explanation: "Speed with current = boat speed + current speed = 15 km/hr. Current speed = 2.5 km/hr. So boat speed = 15 - 2.5 = 12.5 km/hr. Speed against current = 12.5 - 2.5 = 10 km/hr."
      },
      {
        id: 99,
        question: "A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",
        options: ["Rs. 500", "Rs. 1500", "Rs. 2000", "None of these"],
        correct: 2,
        explanation: "Ratio A:B:C:D = 5:2:4:3. C gets 4k, D gets 3k. C - D = k = 1000. So B's share = 2k = 2 × 1000 = Rs. 2000."
      },
      {
        id: 100,
        question: "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
        options: ["60 gallons", "100 gallons", "120 gallons", "180 gallons"],
        correct: 2,
        explanation: "Let capacity = C gallons. Rate of pipe 1 = C/20, pipe 2 = C/24, waste pipe = -3. Combined rate: C/20 + C/24 - 3 = C/15. Solving: (6C + 5C)/120 - 3 = C/15, so 11C/120 - 3 = C/15. This gives C = 120 gallons."
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