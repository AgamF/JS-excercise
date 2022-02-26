const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const sum = (arr) => {
    let total = 0;
    for (const item of arr) {
        total += item;
    }
    console.log(`The total is ${total}`);
}

sum(array)