*26 ES6함수의 추가기능*
        -ES6 이전까지의 자바스크립트의 함수는 별다른 구분없이 다양한 목적으로 사용됨
        -객체에 바인딩된 함수도 일반 함수로서 호출할수 있는것은 물론 생성자 함수로서 호출 할 수도있다.
        26-3의 예제와 같이 문법상 가능하다는 것이 문제고 성능적으로도 문제다.
        ※ 너무 무분별하게 의미없이 사용하는거 같긴함.

        ES6이전은 너무 혼란스러워서 실수를 유발할 가능성도 있고 
        성능에도 좋지 않다.

        -ES6메서드는 자신을 바인딩한 객체를 가리키는 내부슬롯을 갖는다.
        [[HomeObject]]  
        -[[HomeObject]] 를 갖는 es6메서드는 super키워드를 사용할수 있다.


        -화살표 함수 : 화살표 함수 정의 문법은 다음과 같다.
        ex) const multiply = (x,y)=> x*y;
        multiply(2,3);  //6
        *화살표 함수는 인스턴스를 생성 할수 없다\
        *중복된 매개변수 이름 선언 에러
        *this,super,arguments는 상위 스코프를 참조한다.

        -Rest 파라미터
        *Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달 받는다.
        *Rest 파라미터는 단 하나만 선언 할수 있다.
        *length 프로퍼티에 영향을 주지 않는다.

*27잘 배열이란?*
        -여러개의 값을 순차적으로 나열한 구조이다.
        *var arr = [1,2,3];
        
        but?
        -자바스크립트 배열은 배열이 아니다
        * 자료구조에서 말하는 배열은 동일한 크기의 메모리공간이 빈틈없이 연속적으로 나열된 자료구조를 말한다.[밀집배열]

        하지만 자바스크립의 배열은 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며 연속적으로 이어져 있지 않을 수도 있다.
        "희소배열" 이라한다 --page495
         
        ※자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다. 

        -희소 배열은 length와 배열 요소의 개수가 일치하지 않는다.
        희소 배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다.

        주의 자바스크립트에서 배열을 생성할 경우에는 희소배열을 생성 하지 않도록 주의하자.
        배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.

        -srot(),flat(),includes(),fill(),join(),filter(),reduce(),max(),every(),find(),flatMap()
        ※와 기능 겁나 많네

*28장 Number 메서드*
        -ES6에서 도입된 number.isFinite 정적  메서드는  infinity또는 infinity가 아닌지 검삭하여 그 결과값을 불리언 값으로 반환한다
        (이거 사용했던 기억이 있음)        


        *isFrnite,islnteger(정수의 유무),isNaN,
        isSafeinteger(안전한 정수인지 판단 ) 개신기
        toExponential(지수표기법으로 변환하여 문자열 반환)//언제쓰냐
        toFixed 매우 가끔씀(소수점)
        t0Prec1s1on(자릿수를 반올림 하여 문자열로 변환) 쓴기억이없음
        toString(10진법으로 변환)


*29장 Math* 
        -생성자 함수가 아니다 따라서 math는 정적 프로퍼티와 정적메서드만 제공한다.
        *math.PI;//이런게있다니.. 파이제공
        *abs(절대값을 반환), round(반올림하여 정수 반환),ceil(소수점이하를 올림한정수를 반환)
        floor(소수점 이하를 내림한 정수 반환),sqrt(전달된숫자의 제곱근 반환)
        random(임의의 난수 반환),
        pow(첫번쨰 인수를 밑으로 두번쨰 인수를 지수로 거듭제곱) -개신기
        max(전달받은 인수중 큰수 반환) min(max반대)

*30장 Date*        
        -Date 생성자 함수
        *new Date()  milliseconds(new Date(0)  new Date(8640000))
        new Date(dateString)ex)('may 26 , 2020 10:00:00')
        new Date(year, month[, day, h our,m1nute,second,millisecond]) 
        ※yyyyMMddss? 검색하면 나오것지

        -parse() UTC KST KST 입력하면 밀리초를 숫자로 반환한다.
        -UTC() 1970,0,2  ->8640000 초로 변환
        getFullYear(년도 뽑아내기)  setFullYear() 입력
        getMonth setMonth 달관련    getDate setDate 일관련


        getDay 0 1 2 3 4 5 6 (순서대로 일~토)

        getHours setHours 시간 getMinutes setMinutes 분
        getSeconds setSeconds 초

        setMilliseconds 밀리단위.?

        getTime setTime  시간 분 초 


*31 장 정규식*
        -정규식 표현식이란
        문자열을 대상으로 패턴 매칭 기능 제공
        일치하는 문자열을 검색하거나 추출 또는 치환할 수있는 기능

        exec = 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여
        매칭결과를 배열로 반환  없을시 null반환
        test = 인수로 전달 받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭결과를 불리언 앖으로 반환

        match = match 메서드는 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환한다.


        -플래그
        i 대소문자 구별하지 않고패턴을 검색
        g 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
        m 문자열이ㅡ 행이 바뀌더라도 패턴 검색을 꼐속한다.

        ex.match(/is/ig)

        ※패턴※
        -임의의 문자열 검색             /.../g;
        -반복검색                       /A{1,2}/g;   2번
        -or검색                         /A|B/g;   
        -NOT 검색    번호만 일지 그런거
        -시작 위치로 검색
        -마지막 위치로 검색


        ※플래그와 exec match test를 잘조합 하면 댄다.
        하지만 보통 우리가 주로 필요로 하는 정규식은 구글을 통해서 해결하자.
        
*32 String*
        -String은 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메서드를 제공한다.

        *new String();
        1.length,indexOf,search(/해당입력값의 위치 번호로줌/)
        includes("문자열을 던지면 true false로 던져줌")
        startsWith("시작문자열이 일치하면 트루 아니면 펄스") 
        startsWith("","스타트할 지점") 
        endsWith  스타트와 반대
        charA(숫자 입력하면 그위치에 문자열 뱉음)
        substring 다아는거
        slice(서브스트링이랑 비슷한데 -숫자를 입력함녀 그뒤인자로부터 할튼그럼)
        toUpperCase,toLowerCase,trim
        repeat(해당 변수를 곱해서 내보냄 반올림같음 -취급안함)
        replace
        split
*33장 Symbol*        
        -심벌이란?
        6개타입[문자열,숫자,불리언,언디파인드,널,객체타입]
        ※이정도만 알아두자 심벌이 머냐 물으면 이거라고 대답만 해도 될듯싶다.※

*34장 이터러블*
        -ES6에 도입 
        데이터 컬렉션(자료구조)을 만들기 위해 사양에 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.
        ㅁ이터러블 프로토콜 ㅁ이터레이터 프로토콜 

        -for...or 문
        for(변수선언문 of 이터러벌){...}
        for(변수선언문 in 객체)
        ※아니 기술적으로 쓸줄은 알겠는데 무슨 구조와 구동을 통해서 하는건지는 도저히 이해가 안가네※

*35장 스프레드 문법*
        -이것도 ES6에 도입
        스프레드 문법을 사용할수 있는 대상은 
        array,String,map,set,DOM컬렉션(NodeList,HtmlCollenction,arguments)와같이 for...or 문으로 순회할 수있는 이터러벌에 한정된다
        ※이터러블이 여전히 뭔지 모르겠다.

        ㅁconcat[덧붙이는기능이 있다.]
        Es5 : var arr = [1,2].concat[(3,4)]
        log = 1,2,3,4;
        Es6 : var arr = [...[1,2],...[3,4]];
        log = 1,2,3,4;

        ㅁslice
        -prototype.slice.apply를 써야 하지만
        ES6에서는 이것도 ... 으로 대체 가능

        -객체리터럴 내부에서 사용하는경우 
        
        ※여전히 아리까리 하지만 기능적인 면에서 ES5->ES6로 도입되면서
        다양한 기능을 좀더 간편하게 쓸수 있다는 걸 알게되었다.
