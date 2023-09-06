function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

function myPrimeList(limit) {
    let primeList = []

    for (let i = 2; i < limit; i++) {
        if (isPrime(i)) {
            primeList = [...primeList, i]
        }
    }

    return primeList
}
