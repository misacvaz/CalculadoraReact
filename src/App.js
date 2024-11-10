import { Container, Content, Row } from "./styles";

import Input from "./Compunents/Input/index"
import Button from "./Compunents/Button/index"
import { useState,  useCallback, useEffect } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState("");
  const [isNewInput, setIsNewInput] = useState(false);

   const handleEquals = useCallback(() => {
			if (firstNumber !== null && operation) {
				let result;
				const num1 = parseNumber(firstNumber);
				const num2 = parseNumber(currentNumber);

				switch (operation) {
					case "+":
						result = num1 + num2;
						break;
					case "-":
						result = num1 - num2;
						break;
					case "*":
						result = num1 * num2;
						break;
					case "/":
						result = num1 / num2;
						break;
					case "mod":
						result = num1 % num2;
						break;
					case "√":
						result = num1 * Math.sqrt(num2);
						break;
					case "²":
						result = num1 ** 2;
						break;
					default:
						result = num2;
						break;
				}
				setCurrentNumber(String(result));
				setFirstNumber(null);
				setOperation("");
				setIsNewInput(true);
			}
		},[currentNumber, firstNumber, operation]);
  

  const handleOnClear = useCallback(() => {
			setCurrentNumber("0");
			setFirstNumber(null);
			setOperation("");
			setIsNewInput(false);
		},[]);

  const handleAddNumber = useCallback((num) => {
    setCurrentNumber((prev) => (isNewInput ? num : `${prev === "0" ? "" : prev}${num}`));
    setIsNewInput(false);
  },[isNewInput]);

  const handleOperation = useCallback((op) => {
			if (firstNumber === null) {
				setFirstNumber(currentNumber);
				setOperation(op);
				setIsNewInput(true);
			} else {
				handleEquals();
				setOperation(op);
			}
		}, [currentNumber, firstNumber, handleEquals]);

  const handleDecimal = useCallback(() => {
			if (!currentNumber.includes(".")) {
				setCurrentNumber((prev) => `${prev}.`);
			}
		}, [currentNumber]);

  const handlePercentage = useCallback(() => {
			setCurrentNumber(String(Number(currentNumber) / 100));
		},[currentNumber]);

 
  const handleSquareRoot = useCallback(() => {
			if (firstNumber && operation === "√") {
				// Caso especial: 2 √4 -> 2 * √4
				const result = Number(firstNumber) * Math.sqrt(Number(currentNumber));
				setCurrentNumber(String(result));
			} else {
				setCurrentNumber(String(Math.sqrt(Number(currentNumber))));
			}
			setFirstNumber(null);
			setOperation("");
		},[currentNumber, firstNumber, operation]);

  const handleSquare = () => {
    // Eleva o número atual ao quadrado
    setCurrentNumber(String((Number(currentNumber)**2)));
  };

  const handleFactorial = useCallback(() => {
			const num = Number(currentNumber);
			if (!Number.isInteger(num) || num < 0) {
				setCurrentNumber("Erro"); // Fatorial é só para inteiros não negativos
				return;
			}
			let result = 1;
			for (let i = 1; i <= num; i++) {
				result *= i;
			}
			setCurrentNumber(String(result));
		},[currentNumber]);

  const handleMod = useCallback(() => {
			if (firstNumber === null) {
				setFirstNumber(currentNumber);
				setOperation("mod");
				setIsNewInput(true);
			} else {
				handleEquals();
			}
		},[currentNumber, firstNumber, handleEquals]);

  const parseNumber = (value) => {
    return value === "π" ? Math.PI : Number.parseFloat(value);
  };

 

  const handlePi = useCallback(() => {
			if (currentNumber === "0" || isNewInput) {
				setCurrentNumber("π");
			} else {
				setFirstNumber(currentNumber);
				setOperation("*");
				setCurrentNumber("π");
				setIsNewInput(true);
			}
		},[currentNumber, isNewInput]);
  

  const handleKeyPress = useCallback((event) => {
  const { key } = event;

  if (key >= "0" && key <= "9") {
    handleAddNumber(key);  // Adiciona número
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperation(key);  // Adiciona operação
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();// evite o comprotamento padrão do navegador
    handleEquals();  // Calcula o resultado
  } else if (key === "Escape" || key === "C") {
    handleOnClear();  // Limpa a tela
  } else if (key === ".") {
    handleDecimal();  // Adiciona ponto decimal
  } else if (key === "%") {
    handlePercentage();  // Calcula o percentual
  } else if (key === "r" || key === "√") {
    handleSquareRoot();  // Calcula a raiz quadrada
  } else if (key === "p" || key === "π") {
    handlePi();  // Adiciona o valor de Pi
  } else if (key === "!" || key === "f") {
    handleFactorial();  // Calcula o fatorial
  } else if (key === "m") {
    handleMod();  // Modulo
  }
}, [
  handleAddNumber,
  handleOperation,
  handleEquals,
  handleDecimal,
  handlePercentage,
  handleSquareRoot,
  handlePi,
  handleFactorial,
  handleMod,
  handleOnClear
]);

useEffect(() => {
  window.addEventListener("keydown", handleKeyPress);

  // Limpando o listener quando o componente for desmontado
  return () => {
    window.removeEventListener("keydown", handleKeyPress);
  };
}, [handleKeyPress]); 




  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="mod" onClick={handleMod} />
          <Button label="π" onClick={handlePi} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="√" onClick={handleSquareRoot} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="x" onClick={() => handleOperation("*")} />
          <Button label="x²" onClick={handleSquare} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="-" onClick={() => handleOperation("-")} />
          <Button label="!" onClick={handleFactorial} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={handleDecimal} />
          <Button label="%" onClick={handlePercentage} />
          <Button label="+" onClick={() => handleOperation("+")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
