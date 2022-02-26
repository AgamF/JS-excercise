const add = (a, b) => console.log(a + b);

add(2,3);

// _________________________________________________

const converter = (minNum) => {
    let min = 60;
    console.log(min * minNum);
}

converter(3);

// _________________________________________________

const stringer = (int) => console.log(int.toString());

stringer(2831675);

// _________________________________________________

const incrementer = (int) => {
    console.log(int+1);
}

incrementer(11);

// _________________________________________________

const triangleArea = (base, height) => console.log((base * height) / 2);

triangleArea(10, 5);

// _________________________________________________

const ageConverter = (ageInYears) => {
    let year = 365; // Days
    console.log(year * ageInYears);
}

ageConverter(54);

// _________________________________________________

const array = [1, 2, 3, 4, 5];

const returnFirstElem = (arr) => {
    console.log(arr[0]);
}

returnFirstElem(array);

// _________________________________________________

const powerCalc = (voltage, current) => console.log(voltage * current)

powerCalc(230, 10);

// _________________________________________________

const hoursToSeconds = (hour) => console.log(3600 * hour);

hoursToSeconds(4);

// _________________________________________________

const perimeter = (x, y) => console.log((y * 2) + (x * 2));

perimeter(4, 10);

// _________________________________________________

const lessOrEq = (num) => {
    if (num < 0 || num === 0) return true;
    else return false;
}

lessOrEq(-1);

// _________________________________________________

const lessThan100 = (x, y) => {
    sum = x + y;
    if (sum < 100) return true;
    else return false;
}

lessThan100(29, 24);

// _________________________________________________