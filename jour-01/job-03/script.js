function strLength(str) {
    count = 0;

    for (char in str) {
        count++
    }

    return count
}

function myIsInString(haystack, needle) {
    for (let i = 0; i <= strLength(haystack) - strLength(needle); i++) {
        let isMatch = true;
        for (let j = 0; j < strLength(needle); j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            return true;
        }
    }
    return false
}