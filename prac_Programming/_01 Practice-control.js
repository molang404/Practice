// 1
var j = "짝"
for (var i = 1; i <= 20; i++) {
    if  (i % 3 == 0) {
        console.log("짝");
    } else {
        console.log(i);
    }
}
// 3
for (var i = 10; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// 4
for (var i = 1; i <= 10; i++) {
    if (i == 7) {
        console.log(" ");
    } else {
        console.log(i);
    }
}

// 문제 정답
//1 1부터 20까지 출력하는데, 3의 배수일 때 짝
for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log("짝");
    } else {
        console.log(i);
    }
}

//2 1부터 100까지 출력하다가 합계가 500이 넘는 순간, 그 숫자 출력하고 종료

// 1 사이클 => i = 1 => sum 1
// 2 사이클 => i = 2 => sum + 2 = 3
// 3 사이클 => i = 3 => 합계 + 3 = 6
var sum = 0;
for (var i =1; i <= 100; i++) {
    sum = sum + i;
    if (sum >= 500) {
        console.log(sum);
        break;
    }
}

//3 10부터 1까지 거꾸로 출력하는데 짝수일 떄만 출력
for (var i = 10; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//4
for (var i = 1; i <= 10; i++) {
    if (i == 7) {
        continue;
    }
    console.log(i);
}

//5 var text = "JavaScript is powerful and fun!"; 이라는 text에서 "c"의 갯수 세기
var text = "JavaScript is powerful and fun!"; // 31 글자 -> 1부터 31글자까지 있다
var result = 0; // "c"를 만났을 떄 갯수 카운틸 할 변수

// text 라고 하는 변수는 string 타입이고, 그 변수에서 .length를 사용하면 전체 자릿수가 나옴
for (var i = 0; i < text.length; i++) {
    if (text[i] === "c") {
        result = result + 1;
    }
}
console.log(result);

// 3월 17일 연습 문제

// 1 1부터 20 사이의 숫자 중 홀수만 출력
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// 2 구구단 중 3단 출력
for (var i = 3; i <= 3; i++) {

    for (var k = 1; k <= 9; k++) {
        console.log(i + " * " + k + " = " + i*k);
    }
}
for (var i = 1; i <= 9; i++) {
    console.log(3*i);
}

// 3 1부터 100까지의 숫자 중 짝수의 합
var mol = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        mol = mol + i;
    }
}
console.log(mol);

// 4 var str = "Javascript" 를 역순으로 출력
var str = "JavaScript";
var result = "";
for (var i = str.length - 1; i >= 0; i--) {
    result = result + str[i];  // result += str[i]
   // str.length = 10 ( 자릿수는 10 = 컴퓨터가 인식하는 인덱스 숫자 0~9 dc6)
}
console.log(result);

//5 1부터 100까지의 숫자 중 4의 베수가 몇 개인지 출력
var mol2 = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        mol2++;
    }
}
console.log(mol2);
