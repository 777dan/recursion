let n = prompt("Введите число для фибоначчи");
let m = prompt("Введите число для факториала");
// sum = 0;
// for (let i = 1; i <= n; i++) {
//     // document.write(i * i + " ");
//     // sum += i;
// }
// document.write(sum);
// document.write("<br>");

function factorial(m) {
    // if (m != 1) return m * factorial(m - 1);
    // else {
    //     return 1;
    // }
    return m != 1 ? m * factorial(m - 1) : 1;
}

function fib(n) {
    // return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    if (n <= 1) return n;
    else {
        return fib(n - 1) + fib(n - 2)
    }
}
document.write("Факториал: " + factorial(m) + "<br>" + "Фибоначчи: " + fib(n));
