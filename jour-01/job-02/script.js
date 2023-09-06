function myCountChar(haystack, needle) {
    let count = 0;

    for (let char of haystack) {
        if (char === needle) {
            count++
        }
    }

    return count
}