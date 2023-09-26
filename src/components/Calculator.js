import React, { useState, useEffect, useCallback } from 'react';
import * as math from 'mathjs';
import Button from './Button';
//import Display from './Display';
import './Calculator.css';  // Make sure the path to this CSS file is correct

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = useCallback((value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(math.evaluate(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  }, [input]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.match(/[0-9+\-*/%=.,]|Backspace/)) {
        handleButtonClick(e.key);
      } else if (e.key === "Enter") {
        handleButtonClick("=");
      }
    };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key.match(/[0-9+\-*/%=.,]|Backspace|Enter/)) {
//         handleButtonClick(e.key);
//       }
//     };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input, handleButtonClick]);

  return (
    <div className="calculator">
      {/* New Input Section */}
      <div className="calculator-text">Scientific Calculator</div>
      <div className="calculator-display">
      
      <input 
        type="text" 
        value={input} 
        readOnly
        className="calculator-input" 
      />
      </div>

      {/* <Display input={input} /> */}
      <div className="button-grid">
        <Button label="0" onClick={() => handleButtonClick("0")} />
        <Button label="1" onClick={() => handleButtonClick("1")} />
        <Button label="2" onClick={() => handleButtonClick("2")} />
        <Button label="3" onClick={() => handleButtonClick("3")} />
        <Button label="4" onClick={() => handleButtonClick("4")} />
        <Button label="5" onClick={() => handleButtonClick("5")} />
        <Button label="6" onClick={() => handleButtonClick("6")} />
        <Button label="7" onClick={() => handleButtonClick("7")} />
        <Button label="8" onClick={() => handleButtonClick("8")} />
        <Button label="9" onClick={() => handleButtonClick("9")} />
        <Button label="+" onClick={() => handleButtonClick("+")} />
        <Button label="-" onClick={() => handleButtonClick("-")} />
        <Button label="*" onClick={() => handleButtonClick("*")} />
        <Button label="/" onClick={() => handleButtonClick("/")} />
        <Button label="sin" onClick={() => handleButtonClick("sin(")} />
        <Button label="cos" onClick={() => handleButtonClick("cos(")} />
        <Button label="tan" onClick={() => handleButtonClick("tan(")} />
        <Button label="rad" onClick={() => handleButtonClick("rad(")} />
        <Button label="ln" onClick={() => handleButtonClick("ln(")} />
        <Button label="log" onClick={() => handleButtonClick("log(")} />
        <Button label="e" onClick={() => handleButtonClick("e")} />
        <Button label="pi" onClick={() => handleButtonClick("pi")} />
        <Button label="sqrt" onClick={() => handleButtonClick("sqrt(")} />
        <Button label="^" onClick={() => handleButtonClick("^")} />
        <Button label="C" onClick={() => handleButtonClick("C")} />
        <Button label="=" onClick={() => handleButtonClick("=")} />
        <Button label="." onClick={() => handleButtonClick(".")} />
        <Button label="(" onClick={() => handleButtonClick("(")} />
        <Button label=")" onClick={() => handleButtonClick(")")} />

      </div>
    </div>
  );
};

export default Calculator;










// import React, { useState, useEffect, useCallback } from 'react';
// //import math from 'mathjs';
// import * as math from 'mathjs';
// import { evaluate } from 'mathjs';
// import Button from './Button';
// import Display from './Display';
// import './Calculator.css';

// const Calculator = () => {
//   const [input, setInput] = useState("");

//   const handleButtonClick = useCallback((value) => {
//     if (value === "C") {
//       setInput("");
//     } else if (value === "=") {
//       try {
//         setInput(math.evaluate(input).toString());
//       } catch (error) {
//         setInput("Error");
//       }
//     } else {
//       setInput((prevInput) => prevInput + value);
//     }
//   }, [input]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key.match(/[0-9+\-*/%=.,]|Backspace|Enter/)) {
//         handleButtonClick(e.key);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [input, handleButtonClick]);

//   return (
//     <div className="calculator">
//       <Display input={input} />
//       <div className="button-grid">
//         {/* Numbers */}
//         <Button label="0" onClick={() => handleButtonClick("0")} />
//         <Button label="1" onClick={() => handleButtonClick("1")} />
//         <Button label="2" onClick={() => handleButtonClick("2")} />
//         <Button label="3" onClick={() => handleButtonClick("3")} />
//         <Button label="4" onClick={() => handleButtonClick("4")} />
//         <Button label="5" onClick={() => handleButtonClick("5")} />
//         <Button label="6" onClick={() => handleButtonClick("6")} />
//         <Button label="7" onClick={() => handleButtonClick("7")} />
//         <Button label="8" onClick={() => handleButtonClick("8")} />
//         <Button label="9" onClick={() => handleButtonClick("9")} />
        
//         {/* Basic operations */}
//         <Button label="+" onClick={() => handleButtonClick("+")} />
//         <Button label="-" onClick={() => handleButtonClick("-")} />
//         <Button label="*" onClick={() => handleButtonClick("*")} />
//         <Button label="/" onClick={() => handleButtonClick("/")} />
        
//         {/* Scientific Keys */}
//         <Button label="sin" onClick={() => handleButtonClick("sin(")} />
//         <Button label="cos" onClick={() => handleButtonClick("cos(")} />
//         <Button label="tan" onClick={() => handleButtonClick("tan(")} />
//         <Button label="rad" onClick={() => handleButtonClick("rad(")} />
//         <Button label="ln" onClick={() => handleButtonClick("ln(")} />
//         <Button label="log" onClick={() => handleButtonClick("log(")} />
//         <Button label="e" onClick={() => handleButtonClick("e")} />
//         <Button label="pi" onClick={() => handleButtonClick("pi")} />
//         <Button label="sqrt" onClick={() => handleButtonClick("sqrt(")} />
//         <Button label="^" onClick={() => handleButtonClick("^")} />
        
//         {/* Special Keys */}
//         <Button label="C" onClick={() => handleButtonClick("C")} />
//         <Button label="=" onClick={() => handleButtonClick("=")} />
//         <Button label="." onClick={() => handleButtonClick(".")} />
//         <Button label="(" onClick={() => handleButtonClick("(")} />
//         <Button label=")" onClick={() => handleButtonClick(")")} />
//       </div>
//     </div>
//   );
// };

// export default Calculator;








// import React, { useState } from 'react';
// import Display from './Display';
// import Button from './Button';
// import { evaluate } from 'mathjs';
// import '../styles/Calculator.css';  // Importing the CSS


// const Calculator = () => {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState(null);

//   const buttonLabels = [
//     '7', '8', '9', '/',
//     '4', '5', '6', '*',
//     '1', '2', '3', '-',
//     '0', '.', '=', '+',
//     'C', '(', ')', 'sqrt',
//     'sin', 'cos', 'tan', 'log',
//     'ln', 'exp', 'pi', '^'
//   ];

//   const handleButtonClick = (label) => {
//     if (label === 'C') {
//       setInput("");
//       setResult(null);
//     } else if (label === '=') {
//       try {
//         setResult(evaluate(input));
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (['sqrt', 'sin', 'cos', 'tan', 'log', 'ln', 'exp', 'pi', '^'].includes(label)) {
//       setInput((prevInput) => `${prevInput} ${label} `);
//     } else {
//       setInput((prevInput) => prevInput + label);
//     }
//   };

//   return (
//     <div>
//       <h1>Scientific Calculator</h1>
//       <Display input={input} result={result} />
//       <div className="button-grid">
//         {buttonLabels.map((label, index) => (
//           <Button key={index} label={label} onClick={() => handleButtonClick(label)} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calculator;
