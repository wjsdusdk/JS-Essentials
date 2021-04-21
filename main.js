/* 1. 데이터 타입 확인 */

import getType from "./getType";
// .js 생략 가능
// ./를 안적으면 node_modules에서 파일을 찾기 때문에 에러

console.log(typeof "Hello world!"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object

// undefined: 의도하지 않은 비어있는 값
// null: 의도한 비어있는 값

function getType0(data0) {
    return Object.prototype.toString.call(data0);
}

console.log(getType0(123)); // [object Number]
console.log(getType0(false)); // [object Boolean]

/* function getType(data) {
    return Object.prototype.toString.call(data).slice(8,-1)
} */

console.log(getType(123)); // Number
console.log(getType(false)); // Boolean
console.log(getType(null)); // Null
console.log(getType({})); // Object
console.log(getType([])); // Array

/* 2. 산술 연산자 */

console.log(1 + 2); // 3
console.log(5 - 7); // -2
console.log(3 * 4); // 12
console.log(10 / 2); // 5
console.log(7 % 5); // 2   // 나머지

/* 3. 할당 연산자 */

let a = 2;
let b = 2;
let c = 2;
let d = 2;
let e = 2;

// 재할당 (const는 재할당이 불가)
a += 1; // a = a + 1 과 같은 의미
b -= 1; // b = b - 1 과 같은 의미
c *= 1; // c = c * 1 과 같은 의미
d /= 1; // d = d / 1 과 같은 의미
e %= 1; // e = e % 1 과 같은 의미

console.log(a); // 3
console.log(b); // 1
console.log(c); // 2
console.log(d); // 2
console.log(e); // 0

/* 4. 비교 연산자 */

const f = 1;
const g = 1;
const h = 3;

console.log(f === g); // true
console.log(f !== g); // false
console.log(f === h); // false
console.log(f !== h); // true

console.log(f < g); // false
console.log(f < h); // true
console.log(f >= g); // true

function isEqual(x, y) {
    return x === y;
}

console.log(isEqual(1, 1)); // true
console.log(isEqual(2, "2")); // false

/* 5. 논리 연산자 */

const i = 1 === 1;
const j = "AB" === "AB";
const k = true;
const l = false;
const m = "AB" === "ABC";
const n = 1 === 123;

console.log(i); // true
console.log(j); // true
console.log(k); // true
console.log(l); // false
console.log(m); // false
console.log(n); // false

// && : and
console.log("&&: ", i && j && k); // &&:  true
console.log("&&: ", i && j && l); // &&:  false

// || : or (true가 1개라도 있으면 true)
console.log("||: ", i || j || k); // &&:  true
console.log("||: ", i || j || l); // &&:  true
console.log("||: ", i || m || l); // &&:  true
console.log("||: ", n || m || l); // &&:  false

// ! : not
console.log("!: ", n); // false
console.log("!: ", !n); // true

/* 6. 삼항 연산자 */

const o = 1 < 2;

if (o) {
    console.log("참");
} else {
    console.log("거짓");
} // 참

console.log(o ? "참" : "거짓"); // 참
// o가 true면 "참", false면 "거짓"

/* 7. 조건문 if else */

import random from "./getRandom"; // random 자리의 이름은 마음대로 정하기

console.log(random());

const p = random();

// 계속 새로고침 해보기
if (p === 0) {
    console.log("p is 0");
} else if (p === 2) {
    console.log("p is 2");
} else if (p === 4) {
    console.log("p is 4");
} else {
    console.log("rest...");
}

/* 8. 조건문 switch */

const q = random();

// 계속 새로고침 해보기
switch (q) {
    case 0:
        console.log("q is 0");
        break; // 종료   // 안해주면 다음 단계도 실행됨
    case 2:
        console.log("q is 2");
        break;
    case 4:
        console.log("q is 4");
        break;
    default:
        console.log("rest..."); // if문의 else와 같은 의미로 break 안해도 됨
}

// 변수가 특정 값으로 딱 떨어지는 조건으로 분기 처리를 한다면 if문 보다 switch문이 적합

/* 9. 반복문 */

const ulEl = document.querySelector("ul");

console.log(ulEl); // <ul></ul>

// for (시작조건; 종료조건; 변화조건) {}
for (let i = 0; i < 10; i += 1) {
    console.log(i);

    const li = document.createElement("li");

    li.textContent = `list-${i + 1}`; // textContent : 값을 지정

    if ((i + 1) % 2 === 0) {
        li.addEventListener("click", function () {
            console.log(li.textContent); // textContent : 값을 가져옴
        });
    }

    ulEl.appendChild(li);
}

/* 10. 변수 유효범위 */

// let, const : 블록 레벨(가장 가까운 중괄호의 범위)의 유효범위

function scope1() {
    if (true) {
        const r = 123;
        console.log(r);
    }
}
scope1(); // 123

/* function scope2() {
    if (true) {
        const r = 123;
    }
    console.log(r);
}
scope2() // err */

function scope3() {
    if (true) {
        console.log(r);
        const r = 123;
    }
}
scope3(); // undefined

/* function scope4() {
    console.log(r);
    if (true) {
        const r = 123;
    }
}
scope4() // err */

// var : 함수 레벨(function 중괄호의 범위)의 유효범위

function scope5() {
    console.log(r);
    if (true) {
        var r = 123;
    }
}
scope5(); // undefined

function scope6() {
    if (true) {
        console.log(r);
        var r = 123;
    }
}
scope6(); // undefined

function scope7() {
    if (true) {
        var r = 123;
        console.log(r);
    }
}
scope7(); // 123

function scope8() {
    if (true) {
        var r = 123;
    }
    console.log(r);
}
scope8(); // 123

// var 보다 let, const 사용을 권장
// why?
// 유효범위가 커서 의도하지 않은 범위에서 변수가 사용될 수도 있고
// 메모리 누수로 발전할 수 있음 (메모리를 많이 차지)

/* 11. 형 변환 (데이터 타입 변환) */

const s = 1;
const t = "1";

console.log(s === t); // false
console.log(s == t); // true   // 형 변환이 일어남

// ==는 형 변환이 일어나기 때문에 === 사용을 권장

// 참으로 취급하는 값
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

if (true) {
    console.log(123);
} // 123

if ("false") {
    console.log(123);
} // 123

// 거짓으로 취급하는 값
// false, '', null, undefined, 0, -0, NaN

if (false) {
    console.log(123);
} // 아무것도 출력되지 않음

// (Not a Number) : 숫자 데이터

console.log(1 + undefined); // NaN

// 12. 함수 복습

function sum1(x, y) {
    console.log(x + y);
}
sum1(1, 3); // 4
sum1(4, 12); // 16

// x, y : 매개 변수
// 1, 3 : 인수

function sum2(x, y) {
    console.log(x + y);
    return x + y;
}
const u = sum2(1, 3);
const v = sum2(4, 12);

console.log(u);
console.log(v);
console.log(u + v);

// 변수를 선언하지 않고
// console.log(sum2(1, 3) + sum2(4, 12))
// 라고 해도 되지만 더 느림
// why?
// 변수를 선언하면 선언할 때만 함수를 호출하면 되지만
// 변수를 선언하지 않으면 매번 함수를 실행하기 때문에
// 여러번 함수를 실행하는 것은 비효율적

// 함수 선언 방식 (기명 함수)
function sum3(x, y) {
    console.log(x + y);
}

// 함수 표현 방식 (익명 함수)
const sum4 = function (x, y) {
    console.log(x + y);
};

// return (종료)

function sum5(x, y) {
    console.log(x);
    return x + y;
}
sum5(1, 3); // 1

function sum6(x, y) {
    return x + y;
    console.log(x);
}
sum6(1, 3); // 아무것도 출력되지 않음
// return함으로써 함수가 종료되기 때문에

function sum7(x, y) {
    if (x < 2) {
        return;
    }
    return x + y;
}
console.log(sum7(1, 3)); // undefined
console.log(sum7(7, 3)); // 10

function sum8(x, y) {
    if (x < 2) {
        return 123;
    }
    return x + y;
}
console.log(sum8(1, 3)); // 123

function sum9() {
    console.log(arguments);
    // arguments : 매개 변수 지정 없이도 함수 안에서 언제든 사용 가능
    // 권장되는 방법은 아니지만 매개 변수가 너무 많아서
    // 일일이 지정하기가 힘든 경우 사용

    return arguments[0] + arguments[1];
}
console.log(sum9(7, 3));

/* 13. 화살표 함수 */

// function () {}
const double1 = function (x) {
    return x * 2;
};
console.log("double: ", double1(7)); // 14

// 축약형 () => {}
const doubleArrow1 = (x) => x * 2;
console.log("double: ", doubleArrow1(7)); // 14

// 객체 데이터 축약형 () => ({})
const doubleArrow2 = (x) => ({ name: "Heropy" });
console.log("double: ", doubleArrow2(7)); // double:  {name: "Heropy"}

/* 14. 즉시실행함수(IIFE) */

// ;를 안써주면 err

// 즉시실행함수 X
const w = 7;
function double2() {
    console.log(w * 2);
}
double2(); // 14

// 즉시실행함수 O
(function () {
    console.log(w * 2);
})(); // 14

// 즉시실행함수 O
(function () {
    console.log(w * 2);
})(); // 14

/* 15. 호이스팅 */

// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// 함수표현 : double3()을 먼저 호출하는 것이 불가능

/* double3(); // err

const double3 = function () {
    console.log(w * 2);
}; */

// 함수선언 : double3()을 먼저 호출하는 것이 가능

double4(); // 14

function double4() {
    console.log(w * 2);
}

/* 16. 타이머 함수 */

// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// setTimeout(함수, 시간)
const timer1 = setTimeout(() => {
    console.log("timer1");
}, 2000); // 새로고침 해보기

// clearTimeout()
const h1El1 = document.querySelector("h1");
h1El1.addEventListener("click", () => {
    clearTimeout(timer1);
}); // 2초 안에 클릭해야함

// setInterval(함수, 시간)
const timer2 = setInterval(() => {
    console.log("timer2");
}, 4000); // 새로고침 해보기

// clearInterval()
const h1El2 = document.querySelector("h1");
h1El2.addEventListener("click", () => {
    clearInterval(timer2);
});

/* 콜백 */

// 함수의 인수로 사용되는 함수
// ex) setTimeout(함수, 시간)
// setTimeout 함수가 아니더라도 처리하는데 시간이 많이 걸리는 경우에 사용

function timeout1() {
    setTimeout(() => {
        console.log("timeout1");
    }, 4000);
}
timeout1();
console.log("Done1");

// console창에 Done이 먼저 나오고 뒤에 timeout이 나옴
// timeout이 Done보다 앞에 나오길 원함

function timeout2(cb) {
    setTimeout(() => {
        console.log("timeout2");
        cb();
    }, 4000);
}
timeout2(() => {
    console.log("Done2");
});
