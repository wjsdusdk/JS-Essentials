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