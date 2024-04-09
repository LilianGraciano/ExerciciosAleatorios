


let OneNumber = prompt("Digite o primeiro número:")
let SecondNumber = prompt("Digite o segundo número:")
let Sum = Number(OneNumber) + Number(SecondNumber)

alert("A soma dos dois primeiros números: " + (Number(Sum)))
alert("A subtração dos dois primeiros números: " + (Number(OneNumber) - Number(SecondNumber)))
alert("A multiplicação dos dois primeiros números: " + (Number(OneNumber) * Number(SecondNumber)))
alert("A divisão dos dois primeiros números: " + (Number(OneNumber) / Number(SecondNumber)))
alert("O resto da divisão dos dois primeiros números: " + (Number(OneNumber) % Number(SecondNumber)))


if (Sum % 2 === 0 ){
    alert("A soma dos dois número é par.")
}
else {
    alert("A soma dos dois número é impar")
}

if (OneNumber === SecondNumber){
    alert("Os números são iguais")
}
else {
    alert("Os números são diferentes")
}





