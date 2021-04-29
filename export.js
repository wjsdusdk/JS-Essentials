/* export */

// 이름을 지정해야 됨
// 하나의 파일에서 여러개의 데이터 내보낼 수 있음

export function randomNumber() {
    return Math.floor(Math.random() * 10);
}

export const person1 = {
    name: "Heropy",
    age: 85,
};

export const person2 = {
    name: "Amy",
    age: 40,
};

export default 123; // export와 export default 혼용 가능

// 따라서 내보낼 데이터가 하나라면 export default 여러개라면 export
