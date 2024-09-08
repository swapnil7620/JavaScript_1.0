let Num = 5;
function fact(n) {
    if (n == 0)
        return 1;

    else {
        return n * fact(n - 1);
    }
}
let result = fact(Num);
console.log(result);
