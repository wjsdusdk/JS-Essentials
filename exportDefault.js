/* export default */

// 이름을 지정하지 않아도 됨
// 하나의 파일에서 하나의 데이터만 내보낼 수 있음

export default function (data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

// export default 123; // err
// 하나의 파일에서 하나의 데이터만 내보낼 수 있기 때문
