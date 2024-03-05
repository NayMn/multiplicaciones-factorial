//calculo de factorial 
const factorial = (num) => {
    if (num <= 1) return 1
    return num * factorial(num - 1)
}


const funcionPrincipal = num => {

    if (num < 1 || num > 20) {
        console.log(`numero fuera del rango`)
        return
    }

    for (let i = 1; i <= num; i++) {
        console.log(`${i} x ${num} = ${i * num}`)
    }

    for (let i = 1; i <= num; i++) {
        console.log(`el factorial de ${i}! es: ${factorial(i)}`)
    }
}


const ingresar = prompt("ingresar un número")
funcionPrincipal(ingresar)
