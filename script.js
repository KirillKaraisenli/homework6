// 1

let nu = 0;

while (nu <= 10) {
    
    console.log(nu);
nu += 1;
}

// 2
let num = 20;

for (let i = 0; i <= num; i += 1) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// 3
let numb = 70
for (let i = 7;i <= numb; i += 7) {
    console.log(i);
}

// 6
let numbe = 33;
let n = 11;

for (let i = 0; i <= numbe; i += 1) {
    if (i > n) {
        break;
    }
    console.log(i);
}

// 7

let number = 1;

while (number < 20) {
    if (number % 3 === 0) {
        number +=1;
        continue;
    }
    console.log(number);
    number +=1;
}