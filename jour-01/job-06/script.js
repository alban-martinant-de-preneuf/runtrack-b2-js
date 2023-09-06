function toSquare(number) {
    return number ** 2
}

function mySquareArray(array) {
    let arraySquare = []

    for (let number of array) {
        arraySquare = [...arraySquare, toSquare(number)]
    }

    return arraySquare
}