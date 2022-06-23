const operator = prompt("Enter your the operator of your choice : + , -,  /, *, %");
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

var result;

switch(operator):
       case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
         case '/':
             result = number1 / number2;
             break:
         case '*':
             result = number1 * number2;
             break;
         case '%':
              result = number1 % number2;
              break;
alert("Your answer is :"+ " " + result);
