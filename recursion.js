let n = prompt("Введите n");
sum = 0;
for (let i = 1; i <= n; i++) {
    document.write(i * i + " ");
    sum += i;
}
document.write(sum);
document.write("<br>");

function sumX2(n) {
    if (n != 1) return n * sumX2(n - 1);
    else {
        return 1;
    }
}
let k = sumX2(n);
document.write(k);
