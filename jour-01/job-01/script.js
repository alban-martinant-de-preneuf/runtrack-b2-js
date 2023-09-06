function myUpperCase(string) {
    const letters = { a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G", h: "H", i: "I", j: "J", k: "K", l: "L", m: "M", n: "N", o: "O", p: "P", q: "Q", r: "R", s: "S", t: "T", u: "U", v: "V", w: "W", x: "X", y: "Y", z: "Z", é: "É", è: "È", ê: "Ê", à: "À", ç: "Ç", ë: "Ë", ï: "Ï", ù: "Ù", û: "Û", ü: "Ü", ÿ: "Ÿ", æ: "Æ", œ: "Œ"}

    let upperString = ""

    for (const letter of string) {
        if (letters[letter] === undefined) {
            upperString += letter
        } else {
            upperString += letters[letter]
        }
    }

    return upperString
}