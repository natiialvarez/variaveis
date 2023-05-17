let x = 10
// x = x + 1
// x += 1
x++ // substitui as formulas acima, indicando a adição de +1.
console.log(x)
x-- // indica a substração de -1
console.log(x)

{
    let z = 10
    let y = z++ //nesse caso primeiro o valor de z é retornado pra y (o 10) e depois que o z retorna que o ++ é considerando. por isso que o valor de x e y são diferentes
    console.log("Y:", y)
    console.log("Z:", z)
}

let z = 10
y = ++z //primeiro ele soma depois que ele retorna (ordem de leitura >> esquerda para direita)
console.log("Y:", y)
console.log("Z:", z)