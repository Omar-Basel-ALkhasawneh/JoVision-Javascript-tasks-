function button1() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }

    let result = numbers.filter(mod3);
    console.log(result)


}

function button2() {
    let numbers = [];
    for (let i = 0; i <= 150; i++) {
        numbers.push(i);
    }
    let result = numbers;
    console.log(result);
}

function button3() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }

    let result = 0;
    result = numbers.map(add3);
    console.log(result);

}


function button4() {
    let numbers = [];
    let result = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    for (let i = 20; i < 41; i++) {
        result.push(numbers[i]);
    }
    console.log(result);
}

function button5() {
    let numbers = [];
    for (let i = 0; i < 101; i++) {
        numbers.push(i);
    }
    shuffleArray(numbers);
    console.log(numbers);
    numbers.reverse();
    console.log(numbers);
}






function add3(a) {
    re = a + 3;
    return re;
}



function mod3(a) {
    return a % 3 != 0;
}





function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
