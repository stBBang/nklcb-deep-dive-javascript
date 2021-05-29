// 단항연산자 

// +의 쓰임세 
// 문자열을 숫자로 변환시킬 때
let x = "1"; // 문자열
x = +x;
console.log( x );  // 1
console.log(typeof x); // number

// -의 쓰임세 
// 문자열을 숫자로 변환시킬 때 부호를 변환할 때
let y = "1"; // 문자열
y = -y;
console.log( y );  // -1
console.log(typeof y); //number

// ++ 연산자 값을 증가시킬 때
let nConsoleVal = x;
console.log(nConsoleVal, x); // 1, 1
nConsoleVal = ++x;
console.log(nConsoleVal, x); // 2, 2
nConsoleVal = x++;
console.log(nConsoleVal, x); // 2, 3

// -- 연산자 값을 감소시킬 때
nConsoleVal = --x;
console.log(nConsoleVal, x); // 2, 2
nConsoleVal = x--;
console.log(nConsoleVal, x); // 2, 1

// 2항 연산자
// +  값을 더할 때 문자열을 더할 때
nConsoleVal = x + y
console.log(nConsoleVal); // 0

nConsoleVal = x + y + "3" + x + y
console.log(nConsoleVal); // 031-1

// - 값을 뺄때
console.log(2 - 1); // 1

// * 값을 곱할때
console.log(2 * 2); // 4

// / 값을 나눌때
console.log(2 / 2); // 1

// % 값 나머지를 구할떄
console.log(5 % 2); // 1



// 대입연산자
let consoleVal2 = 0;

consoleVal2 += 1;
console.log(consoleVal2);

consoleVal2 -= 1;
console.log(consoleVal2);

consoleVal2 = 5;
consoleVal2 *= 2;
console.log(consoleVal2);

consoleVal2 /= 2;
console.log(consoleVal2);

consoleVal2 %= 2;
console.log(consoleVal2);

// 비교연산자
console.log(10 == 10);
console.log(10 != 10);

console.log('0' == '') // false
console.log(0 == '') // true
console.log(0 == '0') // true
console.log(false == 'false') // false
console.log(false == '0') // true
console.log(false == null) // false
console.log(false == undefined) // false
console.log(null == undefined) // true

console.log( 0 === '') //false
console.log( 5 === '5') //false
console.log(NaN === NaN) //false
console.log(0 === -0) //false


console.log(2 > 2) // false
console.log(2 > 1) // true
console.log(2 >= 2) // true
console.log(2 < 2) // false
console.log(2 < 3) // true
console.log(2 <= 2) // true


// 삼항연산자
let consoleVal3 = true ? '조건식이 true' : '조건식이 false';
console.log(consoleVal3); 
consoleVal3 = false ? '조건식이 true' : '조건식이 false';
console.log(consoleVal3);