const nums = [1, 2, 3]

const doublePure = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);

    }
    return newArr;
};

const doubleImpure = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
};
console.log(doubleImpure(nums));

console.log(doublePure(nums));