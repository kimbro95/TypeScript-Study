/*
    Literal Types

    - Literal Type 만드는 법
    ex) let kim : '개발자';
        let lee : '기획자';
    string, number 이런 것이 아닌 일반 글자도 타입이 될 수 있다.
    ⭐특정 글자나 숫자만 가질 수 있게 제한을 두는 타입⭐
    
    ex) let 방향 : 'left' | 'right';
        방향 = 'left';
    OR 기호를 사용하여 union type 으로도 지정할 수 있다.

    ex) function 함수 ( a : 'hello' ) : 1 | 0 {
        return 1
    }
    함수도 마찬가지로 파라미터 또는 return 타입을 위와 같이 선언할 수 있다.

    Q1. 함수를 만들어보세요.
        1. '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
        2. '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.
        3. 예를 들면 ['가위', '보', '가위'] 이런거 return 가능
        4. ['가위', '바보'] 이런거 return하면 에러나야함
    
    A. function 함수 ( x : '가위' | '바위' | '보' ) : ( '가위' | '바위' | '보' )[] {
        return [ '가위', '바위' ]
    }

    const의 업그레이드버전
    ex) const 이름 = 'kim' | 'lee'
        ( 자바스크립트에서는 이런 문법이 불가능 하지만 타입스크립트는 literal type으로 가능하다. )

    - as const
    ex) var 자료 = {
            name : 'kim'
        }
        
        function 함수 ( x : 'kim' ){

        }
        함수(자료.name) // <= error

    위의 예시처럼 작성시 함수(자료.name) 라인에서 에러가 뜬다.
    함수의 'kim' 은 타입이지만 자료.name 은 string 타입의 object 속성의 값 'kim' 이기 때문이다.

    위의 코드 해결법
    1. object 작성시 타입을 정하기
    2. assertion 사용하기 ( ex.as 'kim' )
    3. as const 사용하기
    ex) as const
        var 자료 = {
            name : 'kim'
        } as const;
        function 함수 ( x : 'kim' ){
        }
        함수(자료.name)

    as const 특징
    1. 타입을 object 의 value 값으로 바꿔준다. ( 타입이 'kim' 으로 변경 )
    2. object 안에 모든 속성을 readonly 속성으로 변경된다.
*/ 
