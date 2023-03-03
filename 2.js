function verificarSePertenceFibonacci(number) {
    if (isNaN(number)) {
        throw new Error('Valor inválido. Informe um número.')
    }
    let a = 0
    let b = 1
    while (b < number) {
        let temp = b
        b += a
        a = temp
    }

    return b === number || number === 0
}

const numberToCheck = 151
const numberInSequence = verificarSePertenceFibonacci(numberToCheck)

if (numberInSequence) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`)
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}