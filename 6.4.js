const percentageOfWorld = (population) => population / 7900 * 100;
const populations = [10, 1044, 333, 83];
function populationsPercentages (arr) {
    const percentages = [];
    for (let i = 0; i < arr.length; i++) {
        percentages.push(percentageOfWorld (arr[i]));
    }
    return percentages;
};

console.log(populationsPercentages(populations));


