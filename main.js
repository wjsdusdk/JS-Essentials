/* JavaScript Essentials */

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

import random from "./getRandom";
// random 자리의 이름은 마음대로 정하기

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
// 화살표 함수에서 {}는 함수의 범위를 나타내므로 () 안에서 객체 데이터를 정의해줘야지만 함수 밖으로 반환
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

/* // setTimeout(함수, 시간)
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
}); */

/* 17. 콜백 함수 */

// 함수의 인수로 사용되는 함수
// ex) setTimeout(함수, 시간)
// setTimeout 함수가 아니더라도 처리하는데 시간이 많이 걸리는 경우에 사용

function timeout1() {
    setTimeout(() => {
        console.log("timeout1");
    }, 4000);
}
/* timeout1(); */
console.log("Done1");

// console창에 Done이 먼저 나오고 뒤에 timeout이 나옴
// timeout이 Done보다 앞에 나오길 원함

function timeout2(cb) {
    setTimeout(() => {
        console.log("timeout2");
        cb();
    }, 4000);
}
/* timeout2(() => {
    console.log("Done2");
}); */

/* 18. 클래스 - 생성자 함수(prototype), new */

// 생성자 함수를 사용하지 않은 비효율적인 방법

const heropy1 = {
    firstName: "Heropy", // firstName -> 속성(프로퍼티)
    lastName: "Park", // lastName -> 속성(프로퍼티)
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    // getFullName -> 함수 데이터가 할당되어 있기 때문에 속성이 아니고 메소드
    // this는 heropy를 지칭
}; // 속성과 메소드를 통틀어 멤버라고 함
console.log(heropy1); // {firstName: "Heropy", lastName: "Park", getFullName: ƒ}
console.log(heropy1.getFullName()); // Heropy Park

const amy1 = {
    firstName: "Amy",
    lastName: "Clarke",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(amy1); // {firstName: "Amy", lastName: "Clarke", getFullName: ƒ}
console.log(amy1.getFullName()); // Amy Clarke

const neo1 = {
    firstName: "Neo",
    lastName: "Smith",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(neo1); // {firstName: "Neo", lastName: "Smith", getFullName: ƒ}
console.log(neo1.getFullName()); // Neo Smith

// 생성자 함수를 사용한 효율적인 방법

function User1(first, last) {
    this.firstName = first;
    this.lastName = last;
} // 생성자 함수의 이름 규칙 : 첫 번째 철자 대문자 (일반 함수와 구분하기 위해)
User1.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}; // prototype : 속성 (User 안의 여러 데이터)

const heropy2 = new User1("Heropy", "Park"); // heropy2 -> 생성자 함수의 인스턴스
const amy2 = new User1("Amy", "Clarke");
const neo2 = new User1("Neo", "Smith");

console.log(heropy2); // User1 {firstName: "Heropy", lastName: "Park"}
console.log(amy2); // User1 {firstName: "Amy", lastName: "Clarke"}
console.log(neo2); // User1 {firstName: "Neo", lastName: "Smith"}

console.log(heropy2.getFullName()); // Heropy Park
console.log(amy2.getFullName()); // Amy Clarke
console.log(neo2.getFullName()); // Neo Smith

// 리터럴 : 특정한 기호만 가지고 데이터를 만드는 것
// ex) {}, [], ""

// prototype : 속성으로 객체의 데이터들을 가지고 있음

const x = [1, 2, 3];

// includes : 포함하는지
console.log(x.includes(4)); // false
console.log(x.includes(2)); // true

/* 19. 클래스 - this */

// 일반(normal) 함수 : 호출 위치에 따라 this 정의
// 화살표(arrow) 함수 : 자신이 선언된 함수 범위에서 this 정의

const heropy3 = {
    name: "Heropy",
    /* normal: function () {
        console.log(this.name);
    }, */
    normal() {
        console.log(this.name);
    }, // 클래스 패턴   // 축약형
    arrow: () => {
        console.log(this.name);
    },
};
heropy3.normal(); // Heropy   // heropy3 범위 -> heropy3에서 호출했기 때문
// heropy3.arrow(); // undefined   // 코딩하는 환경에 따라 지칭하는 것이 다름

const amy3 = {
    name: "Amy",
    normal: heropy3.normal,
    arrow: heropy3.arrow,
};
amy3.normal(); // Amy   // amy3 범위 -> amy3에서 호출했기 때문
// amy3.arrow(); // undefined   // heropy3와 같음 -> 선언된 함수 범위는 변하지 않기 때문

// 생성자 함수에 this 적용하기

function User2(name) {
    this.name = name;
}
User2.prototype.normal = function () {
    console.log(this.name);
};
User2.prototype.arrow = () => {
    console.log(this.name);
};

const heropy4 = new User2("Heropy");

heropy4.normal(); // Heropy
// heropy4.arrow(); // undefined   // 선언된 함수가 없어서

const timer3 = {
    name: "Heropy!!",
    normalTimeout: function () {
        // setTimeout(함수, 시간)
        setTimeout(function () {
            console.log(this.name);
        }, 2000);
    },
    arrowTimeout: function () {
        // setTimeout(함수, 시간)
        setTimeout(() => {
            console.log(this.name);
        }, 3000);
    },
};
/* timer3.normalTimeout(); // undefined
timer3.arrowTimeout(); // Heropy!! */

// setTimeout이나 setInterval같은 타이머 함수를 사용할 경우
// 콜백 함수로 일반 함수보다 화살표 함수를 쓰는 것이 활용도가 높음

// 언제 일반 함수를 사용하고 언제 화살표 함수를 사용할지 구분할 줄 알아야함

/* 20. 클래스 - ES6 Classes */

// function User3(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }
// User3.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

// 생성자 함수를 클래스로 구현하기 - 권장하는 방법

class User3 {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    } // constructor: function (first, last)의 축약형
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    } // prototype 사용하지 않고 prototype으로 만들어지는 메소드 정의
}

const heropy5 = new User3("Heropy", "Park");

console.log(heropy5); // User3 {firstName: "Heropy", lastName: "Park"}

/* 21. 클래스 - 상속(확장) */

class Vehicle {
    constructor(name, wheel) {
        this.name = name;
        this.wheel = wheel;
    }
}

class Bicycle extends Vehicle {
    constructor(name, wheel) {
        super(name, wheel); // super은 Vehicle을 의미, super가 있는 자리에서 Vehicle이 실행
    }
} // extends : 상속(확장)

class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name, wheel);
        this.license = license; // 추가적인 기능 작성
    }
}

const myVehicle = new Vehicle("운송수단", 2);
const myBicycle = new Bicycle("삼천리", 2);
const daughtersBicycle = new Bicycle("세발", 3);
const myCar = new Car("벤츠", 4, true);
const daughtersCar = new Car("포르쉐", 4, false);

console.log(myVehicle); // Vehicle {name: "운송수단", wheel: 2}
console.log(myBicycle); // Bicycle {name: "삼천리", wheel: 2}
console.log(daughtersBicycle); // Bicycle {name: "세발", wheel: 3}
console.log(myCar); // Car {name: "벤츠", wheel: 4, license: true}
console.log(daughtersCar); // Car {name: "포르쉐", wheel: 4, license: false}

/* JavaScript Level up */

/* 1. 데이터 - 문자 */

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

// String.indexOf() : 몇 번째 문자인지

const indexOf1 = "Hello world!".indexOf("world");
const indexOf2 = "Hello world!".indexOf("Heropy");
const indexOf3 = "Hello world!".indexOf("HEROPY") !== -1;

console.log(indexOf1); // 6
console.log(indexOf2); // -1   // 일치하는 값이 없음
console.log(indexOf3); // false

// String.length : 문자 수

const length = "01 23".length;
console.log(length); // 5   // 공백도 문자로 인식

// String.slice() : 문자 자르기

const slice1 = "Hello world!".slice(0, 3); // slice(0부터 시작, 0부터 시작하고 직전까지 추출)
const slice2 = "Hello world!".slice(6, 11);

console.log(slice1); // Hel
console.log(slice2); // world

// String.replace() : 문자 바꾸기

const replace1 = "Hello world!".replace("world", "HEROPY");
const replace2 = "Hello world!".replace(" world!", "");

console.log(replace1); // Hello HEROPY!
console.log(replace2); // Hello

// String.match() : 배열형식으로 추출
// 이메일에서 아이디 추출

const email = "thesecon@gmail.com";
const id = email.match(/.+(?=@)/); // /.+(?=@)/ : 정규표현식

console.log(id); // ["thesecon", index: 0, input: "thesecon@gmail.com", groups: undefined]
console.log(id[0]); // thesecon

// String.trim() : 맨 앞과 맨 뒤의 공백 제거

const trim = "   Hello   world!   ".trim();
console.log(trim);

/* 2. 데이터 - 숫자와 수학 */

const pi = 3.14159265358979;
console.log(pi); // 3.14159265358979

// Number.toFixed() : 반올림

const str = pi.toFixed(2);
console.log(str); // 3.14
console.log(typeof str); // string

// 전역함수 : 전체의 영역에서 사용 가능한 함수
// ex) setTimeout, setInterval, clearTimeout, clearInterval, parseInt, parseFloat

// parseInt(), parseFloat() : 문자데이터를 숫자데이터로 변환

const integer = parseInt(str); // parse : 분석, Int : 정수
const float = parseFloat(str); // parse : 분석, Float : 소숫점 자리 유지
console.log(integer); // 3
console.log(float); // 3.14
console.log(typeof integer, typeof float); // number number

// Math : 수학적인 상수와 함수를 위핸 속성과 메서드를 가진 자바스크립트에 내장되어있는 내장 객체 (함수 객체 X)

// Math.abs : 절대값

console.log("abs: ", Math.abs(-12)); // 12   // 절대값
console.log("min: ", Math.min(2, 8)); // 2   // 작은값
console.log("max: ", Math.max(2, 8)); // 8   // 큰값
console.log("ceil: ", Math.ceil(3.14)); // 4   // 올림 (기본적으로 정수 단위로 올림)
console.log("floor: ", Math.floor(3.94)); // 3   // 내림
console.log("round: ", Math.round(3.14)); // 3   // 반올림
console.log("round: ", Math.round(3.54)); // 4   // 반올림
console.log("random: ", Math.random()); // 정수가 0인 랜덤 숫자
console.log("random: ", Math.floor(Math.random() * 10)); // 0~9 범위의 랜덤 숫자

/* 3. 데이터 - 배열 */

const numbers = [1, 2, 3, 4]; // 요소 : element, item
const fruits = ["Apple", "Banana", "Cherry"];

console.log(numbers[1]); // 2
console.log(fruits[2]); // Cherry

// Array.length : 배열의 요소 갯수

console.log(numbers.length); // 4
console.log(fruits.length); // 3
console.log([1, 2].length); // 2
console.log([].length); // 0

// Array1.concat(Array2) : 배열 데이터를 병합해 새로운 배열 데이터를 반환 (원본 데이터 손상 X)

console.log(numbers.concat(fruits)); // (7) [1, 2, 3, 4, "Apple", "Banana", "Cherry"]
console.log(numbers); // (4) [1, 2, 3, 4]
console.log(fruits); // (3) ["Apple", "Banana", "Cherry"]

// Array.forEach(콜백함수) : 배열 데이터의 요소 갯수만큼 콜백함수를 반복적으로 실행 (반환 X)

fruits.forEach(function (element, index, array) {
    console.log(element, index, array);
}); // 매개변수의 이름은 마음대로 정하기

// Apple 0 (3) ["Apple", "Banana", "Cherry"]
// Banana 1 (3) ["Apple", "Banana", "Cherry"]
// Cherry 2 (3) ["Apple", "Banana", "Cherry"]

// Array.map(콜백함수) : 배열 데이터의 요소 갯수만큼 콜백함수를 반복적으로 실행 (반환 O, 원본 데이터 손상 X)

const map1 = fruits.forEach(function (fruit, index) {
    console.log(`${fruit}-${index}`);
}); // 콜백함수 밖으로 반환 X

/* 축약
fruits.forEach((fruit, index) => {
    console.log(`${fruit}-${index}`);
}); */

// Apple-0
// Banana-1
// Cherry-2

const map2 = fruits.map(function (fruit, index) {
    return `${fruit}-${index}`;
}); // 콜백함수 밖으로 반환 O

const map3 = fruits.map(function (fruit, index) {
    return {
        id: index,
        name: fruit,
    };
}); // 콜백함수 밖으로 반환 O

/* 축약
fruits.map((fruit, index) => ({
    id: index,
    name: fruit,
})); */

console.log(map1); // undefined
console.log(map2); // (3) ["Apple-0", "Banana-1", "Cherry-2"]
console.log(map3); // (3) [{…}, {…}, {…}]

// Array.filter() : 필터링된 결과(true)만 반환 (반환 O, 원본 데이터 손상 X)

const filter1 = numbers.map((number) => {
    return number < 3;
});

/* 축약
numbers.map((number) => number < 3); */

const filter2 = numbers.filter((number) => {
    return number < 3;
});

/* 축약
numbers.filter((number) => number < 3); */

console.log(filter1); // (4) [true, true, false, false]
console.log(filter2); // (2) [1, 2]

// Array.find() : 조건을 만족하는 첫 번째 요소의 값을 반환 (없다면 undefined)

const find = fruits.find((fruit) => {
    return /^B/.test(fruit);
});

/* 축약
const find = fruits.find((fruit) => /^B/.test(fruit)); */

// 정규표현식 /^B/
// ^ : 시작
// 대문자 B로 시작하는 문자 데이터

console.log(find); // Banana

// Array.findIndex() : 일치하는 첫 번째 데이터의 index를 찾음

const findIndex = fruits.findIndex((fruit) => {
    return /^B/.test(fruit);
});

/* 축약
const findIndex = fruits.findIndex((fruit) => /^B/.test(fruit)); */

// 정규표현식 /^B/
// ^ : 시작
// 대문자 B로 시작하는 문자 데이터

console.log(findIndex); // 1

// Array.includes() : 포함 여부

const includes1 = numbers.includes(3);
const includes2 = fruits.includes("HEROPY");

console.log(includes1); // true
console.log(includes2); // false

// Array.push() : 배열의 맨 뒤에 요소 추가 (원본 데이터 수정됨)

numbers.push(5);
console.log(numbers); // (5) [1, 2, 3, 4, 5]

// Array.unshift() : 배열의 맨 앞에 요소 추가 (원본 데이터 수정됨)

numbers.unshift(0);
console.log(numbers); // (6) [0, 1, 2, 3, 4, 5]

// Array.reverse() : 배열의 순서를 거꾸로 바꿈 (원본 데이터 수정됨)

numbers.reverse();
fruits.reverse();

console.log(numbers); // (6) [5, 4, 3, 2, 1, 0]
console.log(fruits); // (3) ["Cherry", "Banana", "Apple"]

// Array.splice() : 배열의 요소 제거 & 추가 (원본 데이터 수정됨)

numbers.splice(2, 1); // splice(index, 갯수)
console.log(numbers); // (5) [5, 4, 2, 1, 0]

numbers.splice(2, 0);
console.log(numbers); // (5) [5, 4, 2, 1, 0]   // 변화없음

numbers.splice(2, 0, 999); // splice(index, 갯수, 추가할 데이터)
console.log(numbers); // (6) [5, 4, 999, 2, 1, 0]

numbers.splice(2, 2, 88); // splice(index, 갯수, 추가할 데이터)
console.log(numbers); // (5) [5, 4, 88, 1, 0]

/* 4. 데이터 - 객체 */

// Object.assign(대상 객체, 출처 객체)
// : 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사해서 대상 객체 반환

// 참조형 데이터 : 메모리 주소를 참조하는 데이터
// ex) 객체 데이터 {}, 배열 데이터 [], 함수 function

// 원시형 데이터
// ex) 문자, 숫자, boolean, null, undefined

const userAge1 = {
    // Key: value,
    name: "Heropy",
    age: 85,
};

const userEmail1 = {
    name: "Heropy",
    email: "thesecon@gmail.com",
};

const userName = {
    name: "Mina",
};

const target1 = Object.assign(userAge1, userEmail1);
const y = { k: 123 };
const z = { k: 123 };

console.log(target1); // {name: "Heropy", age: 85, email: "thesecon@gmail.com"}
console.log(userAge1); // {name: "Heropy", age: 85, email: "thesecon@gmail.com"}
console.log(target1 === userAge1); // true   // 메모리 주소가 같음
console.log(y === z); // false   // 메모리 주소가 다름

const target0 = Object.assign(userAge1, userName); // key가 같을 경우 덮어쓰기
console.log(target0); // {name: "Mina", age: 85, email: "thesecon@gmail.com"}

const userAge2 = {
    // Key: value,
    name: "Heropy",
    age: 85,
};

const userEmail2 = {
    name: "Heropy",
    email: "thesecon@gmail.com",
};

// 원본 손상시키지 않고 새로운 객체 데이터 생성
const target2 = Object.assign({}, userAge2, userEmail2); // 출처 객체의 수는 마음대로
const target3 = Object.assign({}, userAge2);

console.log(target2); // {name: "Heropy", age: 85, email: "thesecon@gmail.com"}
console.log(userAge2); // {name: "Heropy", age: 85}
console.log(target2 === userAge2); // false

console.log(target3); // {name: "Heropy", age: 85}
console.log(target3 === userAge2); // false   // 메모리 주소가 다름

// Object.keys()

const user1 = {
    name: "Heropy",
    age: 85,
    email: "thesecon@gmail.com",
};

const keys = Object.keys(user1);

console.log(keys); // (3) ["name", "age", "email"]   // key들을 배열로 만듬
console.log(user1.email); // thesecon@gmail.com
console.log(user1["email"]); // thesecon@gmail.com   // 아래처럼 사용할 경우 사용

const values1 = keys.map((key) => user1.key);
const values2 = keys.map((key) => user1[key]); // return 생략한 축약형

console.log(values1); // (3) [undefined, undefined, undefined]   // 정상적인 동작 X
console.log(values2); // (3) ["Heropy", 85, "thesecon@gmail.com"]

/* 5. 데이터 - 구조 분해 할당 */

// 비구조화 할당

// 객체 데이터에 구조 분해 할당 - key명대로 할당

const user4 = {
    name: "Heropy",
    age: 85,
    mail: "thesecon@gmail.com",
    number: "010-1234-5678",
};

// 구조 분해 할당을 통해 각각의 변수로 만듬
const { name = "Mina", age, mail, address, birth = 991212, number: phone } = user4;
const year = age;

console.log(`사용자의 이름은 ${name}입니다.`); // 사용자의 이름은 Heropy입니다.   // 덮어쓰기 X
console.log(`${name}의 나이는 ${age}세입니다.`); // Heropy의 나이는 85세입니다.
console.log(`${name}의 이메일 주소는 ${mail}입니다.`); // Heropy의 이메일 주소는 thesecon@gmail.com입니다.
console.log(address); // undefined
console.log(`${name}의 생년월일은 ${birth}입니다.`); // Heropy의 생년월일은 991212입니다.
console.log(`${name}의 나이는 ${year}세입니다.`); // Heropy의 나이는 85세입니다.
/* console.log(`${name}의 전화번호는 ${number}입니다.`); // err   // 바로 윗줄과의 차이 */
console.log(`${name}의 전화번호는 ${phone}입니다.`); // Heropy의 전화번호는 010-1234-5678입니다.

// 구조 분해 할당하지 않고 하는 방법 2가지
console.log(`${user4.name}의 나이는 ${user4["age"]}세입니다.`); // Heropy의 나이는 85세입니다.

// 배열 데이터에 구조 분해 할당 - 순서대로 할당

const fruits1 = ["Apple", "Banana", "Cherry"];
const [aa, bb, cc, dd] = fruits1;

const colors = ["red", "orange", "yellow"];
const [, , ee] = colors;

console.log(aa, bb, cc, dd); // Apple Banana Cherry undefined
console.log(ee); // yellow

/* 6. 데이터 - 전개 연산자 (...) */

const fruits2 = ["Apple", "Banana", "Cherry", "Orange"];

console.log(fruits2); // (4) ["Apple", "Banana", "Cherry", "Orange"]
console.log(...fruits2); // Apple Banana Cherry Orange   // 배열 데이터를 문자 데이터로 변환
console.log("Apple", "Banana", "Cherry", "Orange"); // Apple Banana Cherry Orange

// 객체 데이터로 변환해주는 함수

function toObject1(a, b, c) {
    return {
        A: a,
        B: b,
        C: c,
    };
}

console.log(toObject1(...fruits2)); // {A: "Apple", B: "Banana", C: "Cherry"}
console.log(toObject1(fruits2)); // {A: Array(4), B: undefined, C: undefined}   // 정상적인 동작 X
console.log(toObject1(fruits2[0], fruits2[1], fruits2[2])); // {A: "Apple", B: "Banana", C: "Cherry"}

function toObject2(a, b, ...c) {
    return {
        a: a, // key = value일 경우 축약 가능
        b: b,
        c: c,
    };
} // ...c : 나머지

/* 축약형
const toObject2 = (a, b, ...c) => ({ a, b, c }); */

console.log(toObject2(...fruits2)); // {a: "Apple", b: "Banana", c: Array(2)}

/* 7. 데이터 - 데이터 불변성 */

// 원시형 데이터 : 다르게 생기면 다른 데이터
// ex) String, Number, Boolean, undefined, null

let ff = 1;
let gg = 4;
console.log(ff, gg, ff === gg); // 1 4 false

gg = ff;
console.log(ff, gg, ff === gg); // 1 1 true

ff = 7;
console.log(ff, gg, ff === gg); // 7 1 false   // 함께 바뀌지 않음

let hh = 1;
console.log(gg, hh, gg === hh); // 1 1 true   // 원시 데이터(1)가 이미 있다면 새로 만들지 않고 기존 데이터 참조

// 참조형 데이터 : 메모리 주소를 참조하는 데이터 (똑같이 생겨도 다른 데이터일 수 있음)
// ex) Object {}, Array [], Function 함수

let ii = { k: 1 };
let jj = { k: 1 };
console.log(ii, jj, ii === jj); // {k: 1} {k: 1} false

ii.k = 7;
jj = ii;
console.log(ii, jj, ii === jj); // {k: 7} {k: 7} true

ii.k = 2;
console.log(ii, jj, ii === jj); // {k: 2} {k: 2} true   // 같은 메모리 주소를 참조하기 때문에 함께 바뀜

let kk = jj;
console.log(ii, jj, kk, ii === kk); // {k: 2} {k: 2} {k: 2} true   // 같은 메모리 주소를 참조하기 때문에 함께 바뀜

ii.k = 9;
console.log(ii, jj, kk, ii === kk); // {k: 9} {k: 9} {k: 9} true   // 같은 메모리 주소를 참조하기 때문에 함께 바뀜

// 참조형 데이터의 경우 하나를 수정하면 다른 것들도 의도치 않게 수정될 수 있기 때문에 조심해야함

// 8. 데이터 - 얕은 복사 & 깊은 복사

// 얕은 복사 - 표면만 복사

// 깊은 복사 - 내부까지 복사
// 순수 자바스크립트로 직접적으로 구현하긴 복잡해서 lodash 사용
// js-test> npm i lodash

import _ from "lodash";
// ./를 안적으면 node_modules에서 파일을 찾음
// _ : 객체 데이터

const user5 = {
    name: "Heropy",
    age: 85,
    emails: ["thesecon@gmail.com"],
};
const copyUser1 = user5;
const copyUser2 = Object.assign({}, user5); // 얕은 복사 방법 1
const copyUser3 = { ...user5 }; // 얕은 복사 방법 2

const copyUser4 = _.cloneDeep(user5); // 깊은 복사 방법

console.log(copyUser1 === user5); // true
console.log(copyUser2 === user5); // false
console.log(copyUser3 === user5); // false

console.log(copyUser4 === user5); // false

user5.age = 22;
console.log("user5", user5); // {name: "Heropy", age: 22, emails: Array(1)}
console.log("copyUser1", copyUser1); // copyUser1 {name: "Heropy", age: 22, emails: Array(1)}
console.log("copyUser2", copyUser2); // copyUser2 {name: "Heropy", age: 85, emails: Array(1)}
console.log("copyUser3", copyUser3); // copyUser3 {name: "Heropy", age: 85, emails: Array(1)}

console.log("copyUser4", copyUser4); // copyUser4 {name: "Heropy", age: 85, emails: Array(1)}

user5.emails.push("neo@zillinks.com");
console.log("user5", user5); // user5 {name: "Heropy", age: 22, emails: Array(2)}
console.log("copyUser3", copyUser3); // copyUser3 {name: "Heropy", age: 22, emails: Array(2)}
console.log(user5.emails === copyUser3.emails); // true
// 배열 데이터도 참조형 데이터
// user5만 복사하고 emails는 따로 복사하지 않아서 같은 메모리 주소를 참조 (얕은 복사)

console.log("copyUser4", copyUser4); // copyUser4 {name: "Heropy", age: 85, emails: Array(1)}
console.log(user5.emails === copyUser4.emails); // false

// 참조형 데이터 안에 참조형 데이터가 있는 경우는 깊은 복사하는 것이 좋음

/* 9. 데이터 실습 - 가져오기 & 내보내기 */

// export default

import checkType from "./exportDefault"; // checkType 자리에 아무 이름 사용 가능
console.log(checkType([1, 2, 3])); // Array

// export

/* import { randomNumber } from "./export"
console.log(randomNumber(), randomNumber()); // 0 4 */

/* import { randomNumber, person1 } from "./export";
console.log(person1); // {name: "Heropy", age: 85} */

/* import { randomNumber, person1, person2 as person2heropy } from "./export";
// console.log(person2); // err
console.log(person2heropy); // {name: "Amy", age: 40}
// person2라는 이름으로 데이터를 가져오지만 person2heropy라는 이름으로 활용
// 객체 구조 분해의 { number: phone }와 같은 기능 */

// 모든 export 데이터 가져오기
import * as R from "./export";
// R 자리에 아무 이름 사용 가능
// * (와일드카드) : 여러 내용을 한꺼번에 지정할 목적으로 사용
console.log(R); // {person1: {…}, person2: {…}, default: 123, __esModule: true, randomNumber: ƒ}

/* 10. 데이터 실습 - Lodash */

// import _ from "lodash"; // 상단에 이미 적었기 때문에 주석 처리

// _.uniq(array) : 배열 데이터의 중복 요소를 고유하게 바꿈

console.log(_.uniq([2, 1, 2])); // (2) [2, 1]

// _.uniqBy(array, 속성)
// 배열 데이터의 중복을 구분할 속성을 기준으로 중복 요소를 고유하게 바꿈
// 이미 중복이 있는 경우 사용 (배열 데이터가 하나일 경우 사용)

const usersA = [
    { userId: "1", name: "HEROPY" },
    { userId: "2", name: "Neo" },
];

const usersB = [
    { userId: "1", name: "HEROPY" },
    { userId: "3", name: "Amy" },
];

const usersC = usersA.concat(usersB); // 배열 데이터를 병합해 새로운 배열 데이터를 반환 (원본 데이터 손상 X)
console.log("concat", usersC); // concat (4) [{…}, {…}, {…}, {…}]

const usersD = _.uniqBy(usersC, "userId");
console.log("uniqBy", usersD); // uniqBy (3) [{…}, {…}, {…}]

// _.unionBy(array1, array2, 속성)
// 배열 데이터의 중복을 구분할 속성을 기준으로 중복 요소를 고유하게 병합
// 중복이 발생할 수 있는 여러 배열 데이터들을 병합하기 전에 사용 (배열 데이터가 여러개일 경우 사용)

const usersE = _.unionBy(usersA, usersB, "userId");
console.log("uniqBy", usersE); // uniqBy (3) [{…}, {…}, {…}]

// _.find(array, 속성) : 배열 데이터에서 기준 속성이 포함된 객체 데이터 반환

const users = [
    { userId: "1", name: "HEROPY" },
    { userId: "2", name: "Neo" },
    { userId: "3", name: "Amy" },
    { userId: "4", name: "Evan" },
    { userId: "5", name: "Lewis" },
];

const foundUser = _.find(users, { name: "Amy" });
console.log(foundUser); // {userId: "3", name: "Amy"}

// _.foundUserIndex(array, 속성) : 배열 데이터에서 기준 속성이 포함된 객체 데이터의 index 반환

const foundUserIndex = _.findIndex(users, { name: "Amy" });
console.log(foundUserIndex); // 2

// _.remove(array, 속성) : 배열 데이터에서 기준 속성이 포함된 객체 데이터를 제거

_.remove(users, { name: "HEROPY" });
console.log(users); // (4) [{…}, {…}, {…}, {…}]

/* 11. 데이터 실습 - JSON */

// 자바스크립트의 객체 표기법

const user6 = {
    name: "Heropy",
    age: 85,
    "e-mail": ["thesecon@gmail.com", "neo@zillinks.com"], // 특수 문자를 사용할 경우 "" 사용
};

console.log("user6", user6); // user6 {name: "Heropy", age: 85, e-mail: Array(2)}

// myData.json

// 123
// false

// 하나의 .json파일은 하나의 데이터이기 때문에
// Number 데이터와 Boolean 데이터를 함께 쓸 수 없음
// 둘 중 하나만 쓸 수 있음

/* {
    "string": "HEROPY",
    "number": 123,
    "boolean": true,
    "null": null,
    "object": {},
    "array": [],
    // "undefined": undefined // 사용 불가
} */

import myData from "./myData.json"; // .js파일만 확장자 생략 가능

// .json 파일은 문자 데이터지만 변환되서 객체 데이터로 출력
console.log(myData); // {string: "HEROPY", number: 123, boolean: true, null: null, object: {…}, …}

// JSON.stringify() : 자바스크립트의 데이터를 .json 포맷인 문자 데이터로 변환 (JSON : 전역 객체)

const str2 = JSON.stringify(user6);
console.log("str2", str2); // str2 {"name":"Heropy","age":85,"e-mail":["thesecon@gmail.com","neo@zillinks.com"]}
console.log(typeof str2); // string

// JSON.stringify() : .json 포맷인 문자 데이터를 자바스크립트의 실제 데이터로 변환 (JSON : 전역 객체)

const obj = JSON.parse(str2);
console.log("obj", obj); // obj {name: "Heropy", age: 85, e-mail: Array(2)}
console.log(typeof obj); // object

// 12. 데이터 실습 - Storage

// Application (Console과 같은 라인에 있음) -> Local Storage -> http://localhost:1234
// 브라우저에서 관리되는 저장소
// 도메인 주소(사이트)에 종속되어 저장
// 데이터를 임의로 지우지 않는 이상 지워지지 않고 반영구적으로 사용

// Application (Console과 같은 라인에 있음) -> Session Storage -> http://localhost:1234
// 브라우저에서 관리되는 저장소
// 페이지 세션이 끝날 때(페이지를 닫을 때) 데이터 사라짐

// Storage에 데이터를 저장하는 방법
// 문자 데이터로 저장하는 것을 권장
// Storage.setItem(Key, Value)
/* 
localStorage.setItem("user6", user6); // [object Object]

// 문자 데이터로 변환
localStorage.setItem("user6", JSON.stringify(user6));
// {"name":"Heropy","age":85,"e-mail":["thesecon@gmail.com","neo@zillinks.com"]}

// 자바스크립트의 실제 데이터로 변환
console.log(JSON.parse(localStorage.getItem("user6")));
// {name: "Heropy", age: 85, e-mail: Array(2)}

// 특정 데이터를 읽어오는 용도로만 사용할 경우
// Storage.getItem(Key)

console.log(localStorage.getItem("user6"));
// {"name":"Heropy","age":85,"e-mail":["thesecon@gmail.com","neo@zillinks.com"]}

// 데이터를 제거하는 방법
// Storage.removeItem(Key)

// localStorage.removeItem("user6");
// Application (Console과 같은 라인에 있음) -> Local Storage -> http://localhost:1234
// 에서 제거됐는지 확인하기

// 주석처리함으로써 데이터가 지워져도 데이터를 제거하지 않은 이상 Local Storage에 남아있는지 확인하기 */

// age 85를 22로 변경해보기

const str3 = localStorage.getItem("user6");
const obj2 = JSON.parse(str3);
console.log(obj2); // {name: "Heropy", age: 85, e-mail: Array(2)}

obj2.age = 22;
console.log(obj2); // {name: "Heropy", age: 22, e-mail: Array(2)}

localStorage.setItem("user6", JSON.stringify(obj2));

// lodash의 Lowdb를 이용하면 손쉽게 가능

/* 13. 데이터 실습 - OMDb API */

// 주소 검색창에 http://www.omdbapi.com/?apikey=7035c60c&s=frozen (frozen->영화제목) 쳐보기
// 웹 페이지 자체에 뜨기 때문에 main.js에서 활용할 수 없음

// axios을 이용해 main.js에서 활용할 수 있게 하기
// axios : HTTP 요청을 처리해주는 자바스크립트 패키지
// js-test> npm i axios

import axios from "axios";

function fetchMovies() {
    axios.get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen").then((res) => {
        console.log(res); // res : response, result의 약어
        const h1El = document.querySelector('h2')
        const imgEl = document.querySelector('img')
        h1El.textContent = res.data.Search[0].Title
        imgEl.src = res.data.Search[0].Poster
    });
} // http보다 https를 권장
fetchMovies(); // {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
