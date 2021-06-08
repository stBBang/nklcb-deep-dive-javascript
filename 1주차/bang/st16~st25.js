//16장 st
const bang = {
    name : "Hyung Jin",
    subBang:{},
    
    get info(){
        return "${this.name}";
    },
    set info(name){
        [this.name] = name;
    }

};
//bang.[[Prototype]]        --뭔지 모르겠음
//bang.__proto__
bang.age=31;
console.log(Object.getOwnPropertyDescriptors(bang,"name"));
//console.log(Object.getOwnPropertyDescriptors(cc));

console.log("get set 테스트",bang.name+"/"+bang.age);

//금지 preventExtensions  추가만 x 
/*
console.log(Object.isExtensible(bang));
Object.preventExtensions(bang);
bang.mail = "7958737@naver.com";
console.log(bang);
console.log(Object.isExtensible(bang));
*/
//밀봉 
/*
console.log(Object.isSealed(bang));
console.log(Object.seal(bang));
delete bang.name;
console.log(bang);
console.log(Object.isSealed(bang));
*/
//동결 읽기만 가능
console.log(Object.isFrozen(bang));
Object.freeze(bang);
bang.name ="BBang";
console.log(bang);
console.log(Object.isFrozen(bang));
//중첩객체
bang.subBang.name = "BBang";
console.log(bang);
//포이치문
//Object.keys(target). forEach (key => deepFreeze (target[key])); 
//ed

//15장
const st15 = new Object();
st15.name = "bang";
st15.sayhello = function(){
    console.log("어려워 디지것다."+this.name);
}
console.log(st15);
st15.sayhello();

//단점 비슷한거  val만 다를뿐이라 효율이 떨어짐.
const sub1 ={
    val : 5
    ,getval(){
         return 2* this.val;
    }
}

const sub2 ={
    val : 10    
    ,getval(){
        return 2* this.val;
    }
}

//==> 생성자 함수에 의한 객체 생성 방식의 장점
function setVal(val){
    this.val  = val;
    this.getVal = function(){
        return 2*this.val;
    }
}
const val1 = new setVal(5);
const val2 = new setVal(10);
console.log(val1.getVal());
console.log(val2.getVal());
//ed

//st18
//1,2
const plus = function(num){
    return ++num;
}
const minus = function(num){
    return --num;
}
//2
const plmi = {plus,minus};

//3,4
function make(plmi){
    let num=0;
    return function(){
        num = plmi(num);
        return num;
    }
}

//3
const increaser = make(plmi.plus);
console.log(increaser());
const decreaser = make(plmi.minus);
console.log(decreaser());
//ed


//20장st
//암묵적 전역
//var jin = "ppap";
function ppap(){
    //"use strict";
    jin="aapa";    
}
ppap();
console.log(jin);
//ed

//st21장
const strObj = new String("bang");
console.log(typeof strObj);
const str = "BBang";
console.log(typeof str);
//ed

//st22장
const circle = {
    red : 5, 
    getDi(){
        //return 2*circle.red;//자신이 속한 객채 
        //return 2*????red 생성할 인스턴스 가리키는 식별자를 알수엇음
        return 2*this.red;
        //this는 자신이 속한 객체 또는 자신이 생선한 인스턴스르 가리키는 참조변수
        //this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드 참조가능
    }
}
console.log("22장",circle.getDi());

//일반 함수 호출
function foo(){
    "use strict";
    console.log("22장foo",this);
    function bar(){
        console.log("22장bar",this);
    }
    bar();
}
foo();

var value =1;
const objbb = {
     
    value:120,

    foo(){
        console.log("22장 objbb foo",this);
        console.log("22장 objbb foo",this.value);
        
        function bar(){
            console.log("22장 objbb bar",this);
            console.log("22장 objbb bar",this.value); //1뜬다는데 왜 안뜸?
        }
        bar();
      /*
       setTimeout(() => {
        console.log("22장 objbb setTimeout",this);
        console.log("22장 objbb setTimeout",this.value);
       }, 100);
       */
    }
    //일반함수로호출된모든함수(중첩 함수, 콜백 함수포함) 내부의 this 에는전역 객체가바인딩된다. 
}
objbb.foo();


//25장
//class BangPer{};  클래스 선언문
//const BangPer = class{}; //익명 클래스 표현식
const BangPer25 = class MyClass25{}; //가명 클래스 표현식
class person25{
    constructor(name,address){
        this.name=name;
        this.address=address;
        //return {}; "1"을 하면 "1" 반완안함 리턴문은 생략하라함
    }
    //프로토타입 메서드
    sayHi(){
        console.log("hi my name is "+this.name);
        //console.log("hi my name is ${this.name}); 이거안댐
    }
}
const me25 =new person25("방형진","응편구");
console.log("25장",me25);
me25.sayHi();