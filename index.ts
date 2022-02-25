/*
    타입을 파라미터로 입력하는 Generic

    - 함수의 return 값 타입이 애매하면?
    ex) function 함수( x : unknown[] ){
            return x[0];
        }
        let a = 함수([ 4, 2 ])
        console.log( a + 1 )    // error
    이 경우에 a의 타입은 number 가 아닌 unknown 이기 때문에 에러가 난다.
    number 처럼 보이지만 타입스크립트는 타입을 알아서 변경해주지않는다.

    해결책
    1. narrowing을 한다
    2. 타입을 파라미터로 함수에 미리 입력하는 방법 이것을 Generic 이라고 한다.

    - Generic
    ex) function 함수<T>( x : T[]) : T{
            return x[0];
        }
        let a = 함수<number>([ 1, 2, 3])
        let b = 함수<string>([ 'kim', 'lee', 'park'])
    Generic 은 <> 를 이용한다.
    함수<타입>() ex) 함수<number>() 이렇게 쓰는 순간
    T 이라는 변수에는 number가 들어간것이다.
    이럴경우 따로 narrowing 을 하지않아도 return 값이 T 타입에 지정된 값으로 return 된다.

    ex) function 함수<T>(x: T[]) :T {
            return x[0];
        }
        let a = 함수([4,2])     <--
        let b = 함수(['kim', 'park']) <--
    ⭐함수 사용시 꼭 <> 안에 값을 안써도 함수에서 전달하는 파라미터로 기본타입을 유추해서 집어넣어준다.
    ⭐타입파라미터는 자유작명가능 보통 <T> 이런걸로 많이한다. 
    ⭐일반 함수파라미터 처럼 2개 이상 넣기도 가능하다.

    ex) function 함수<T>( x: T ) {
            return x - 1    // error
        }   
        let a = 함수<number>(100)
    에러가 나는 이유
    T에 number 가 아닌 다른 타입이 들어올 수 도있기 때문에 미리 방지해주는 것이다.
    narrowing을 하거다 T 에 집어넣을 수 있는 타입을 미리 지정한다.

    - Generic 제한하기 ( constraints )
    위에 코드 에러 해결
    ex) function 함수<T extends number>( x : T) {
        return x - 1
        }
        let a = 함수<number>(100) //잘됩니다
    이렇게 extends 문법을 활용하면 타입을 제한할 수 있다.
    interface 문법에 extends 와는 살짝 다른 느낌이다.
    extends는 복사인데 이번에는 number 와 비슷한 속성을 가지고 있는지 체크하는 것 이다.

    - 커스텀 타입 extends
    ex) function 함수<T>(x: T) {
            return x.length // length erroe
        }
        let a = 함수<string>('hello')
    length에서 에러가난다.
    T에 string을 집어 넣었지만 나중에 다른 타입이 들어갈 수 있기 때문에
    미리 에러를 출력해서 방지한다.
            ↓↓↓↓↓
    ex) interface check {
            length : number
        }
        function 함수< T extends check>( x : T ){
            return x.length
        }
        let a = 함수<string>('Hi')  // 가능
        let b = 함수<number>(1234)  // 불가능
    length 속성을 가지고 있는 타입을 만든다
    그것을 extends 해주면 T 도 length 속성을 복사해 온다.
    그래서 T 는 length 가 있기 때문에 T에서 부여받은 x 는 .length를 사용할 수 있다.
    ⭐ class 에서도 class<T>{} 형식으로 만들고 new 로 사용시 타입파라미터를 집어 넣을 수 있다.
    ex) type Age<T> = T

    Q1. 문자를 집어넣으면 문자의 갯구, array를 집어넣으면 array안의 자료 갯수를 콘솔에 출력해주는 함수.
        Generic 사용하기
        ex) 함수<string>('hello') // 콘솔창 5가 출력
            함수<string[]>([ 'kim', 'lee' ]) // 콘솔창 2가 출력

    A.  function 함수<T extends string | string[]>( x : T){
            console.log( x.length )
        }
        함수<string>('hello')
        함수<string[]>( ['kim', 'park'])

    Q.2 Animal 타입이 있습니다.
    ex) interface Animal {
            name : string;
            age : number 
        }
        let data = '{"name" : "dog", "age" : 1 }'
    data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
    근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
    오늘 배운 Generic을 이용해서 구현해보도록 합시다. 
    동작예시) 함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야한다.
    타입은 Animal

    A.  interface Animal{
            name : string;
            age : number;
        }
        function 함수<T>( x : string){
            console.log(JSON.parse(x));
        }

        let data = '{"name" : "dog", "age" : 1 }'
        함수<Animal>(data)

    Q3. class를 수정해봅시다.
    ex) class Person {
            name;
            constructor(a){
                this.name = a;
            }
        }
        let a = new Person('어쩌구');
        a.name //any 타입

    class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
    이게 싫어서 파라미터에 string을 집어넣으면 string 타입
    number를 집어넣으면 number 타입
    string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
    오늘 배운 Generic을 이용해봅시다.

    A. class Person<T> {
            name : T;
            constructor(a : T){
                this.name = a;
            }
        }
        let a = new Person<string>('어쩌구');
        a.name  // string 타입
*/ 
