function aka(num) {
    let num1 = 0, num2 = 0, num3 = 1, num4, i;
    if (num == 0)
        return num1;
    for (i = 2; i <= num; i++) {
        num4 = num1 + num2 + num3;
        num3 = num4;
        num1 = num2;
        num2 = num3;
    }
    return num3;
}
console.log(aka(5))
