for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log("짝");
    }  else {
        console.log(i);
    }
}

var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum = sum + i;
    if (sum > 500) {
        break;
    }
}
console.log(i);

for (var i = 10; i >= 1; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        continue;
    } console.log(i);
}

var text = "JavaScript is powerful and fun";
var result = 0;
for (var i = 0; i <= text.length; i++) {
    if (text[i] === "i") {
        result = result + 1
    }
} console.log(result);

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}
var count = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        count = count + i;
    }
} console.log(count);

var str = "Javascript";
var mol = "";
for (var i = str.length - 1; i >= 0;  i--) {
    mol = mol + str[i];
} console.log(mol);

var num = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        num = num + 1;
    }
} console.log(num);