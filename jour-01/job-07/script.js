function toPositive(number) {
    if (number < 0 ) {
        return number * -1
    } else {
        return number
    }
}

function myNearZero(array) {
    let closest = array[0]
    for (const number of array) {
        if (toPositive(number) < toPositive(closest)) {
            closest = number
        } 
    }

    return closest
}
