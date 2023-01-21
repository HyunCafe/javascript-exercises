const sumAll = function (starNum, endNum) {
    let sum = 0;
    if (typeof starNum !== 'number' || typeof endNum !== 'number') {
        return "ERROR";
    }
    if (starNum < 0 || endNum < 0) {
        return "ERROR";
    } else if (starNum < endNum) {
        for (let i = starNum; i <= endNum; i++) {
            sum += i;
        }
        return sum;
    } else if (starNum > endNum) {
        for (let i = endNum; i <= starNum; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
