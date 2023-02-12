# CLI Exemplos

## Feature

```feature
Feature: Soma CLI
Scenario: Soma dois números inteiros
    Given Pode receber dois números pelo STDIN
    When Soma esses dois números
    Then Imprime o resultado
```

> Exemplos

- [x] Python
- [x] NodeJS

## Python

```py
firstNumber  = input("Insira o primeiro número:")
secondNumber = input("Insira o segundo número:")

def sum(x: int, y: int):
    return x + y

print(sum(int(firstNumber), int(secondNumber)))
```

## NodeJS

```js
const firstNumber = process.argv[2];
const secondNumber = process.argv[3];

const sum = (a, b) => a + b;

console.log(sum(Number(firstNumber), Number(secondNumber)));
```
