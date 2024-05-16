var sum_to_n_a = function(n) {
    // your code here
    if (n === 1) return 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    // O(n)
};

var sum_to_n_b = function(n) {
    // your code here
    return (n * (n + 1)) / 2
    // O(1)
};

var sum_to_n_c = function(n) {
    // your code here
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    return arr.reduce((a, b) => a + b);
    // O(n)
};

console.log(sum_to_n_c(6)); 
console.log(sum_to_n_b(7)); 
console.log(sum_to_n_a(5)); 

