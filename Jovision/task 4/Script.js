function calculateSum() {
    let number = [];
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        number.push(i);
        sum += i;
    }
    alert("The sum of numbers from 0 to 100 is: " + sum);
}
