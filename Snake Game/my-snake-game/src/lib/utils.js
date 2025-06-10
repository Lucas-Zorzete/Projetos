// COMIDA SE POSICIONANDO EM UM LUGAR ALEATÓRIO NO CAMPO
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
            // Math.Floor == arredonda o número decimal
            // aqui, sempre vai gerar um número entre 0 a 9 (já que matriz é 10x10)
}