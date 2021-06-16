
//26장
/*
var foo = function(){
    return 1;
}
foo(); //-->1 
var obj = {foo:foo};
obj.foo(); //-->1
//일반적으로 구분 되지 않음

//const foo=()=>{};  
//new foo  타입에러 화살표함수 한계
//const arrow = (a,a)=> a+a; 중복된 매개변수 이름 선언 에러  신택스에러
*/
//Rest함수
function rest(...rest){  //ok
//function rest(...rest,a,s,d){//x
    console.log(rest);
}
rest(1,2,3,3,4,5);
