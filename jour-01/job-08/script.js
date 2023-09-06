function arrayLength(array) {
    let count = 0;

    for (let element of array) {
        count++;
    }

    return count;
}

function myArraySort(arrayToSort, order) {
    let swaped = true
    while (swaped) {
        swaped = false
        for (let i = 0; i < arrayLength(arrayToSort) - 1; i++) {
            let condition = order === 'DESC' ? (arrayToSort[i] < arrayToSort[i + 1]) : (arrayToSort[i] > arrayToSort[i + 1]);
            if (condition) {
                let tmp = arrayToSort[i];
                arrayToSort[i] = arrayToSort[i + 1];
                arrayToSort[i + 1] = tmp;
                swaped = true;
            }
        }
    }

    return arrayToSort;
}