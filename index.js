/*
    타입도 변수에 담아쓰세요 type 키워드 써서 & readonly

    - Type Aliases
    ex) let 동물 : string | number | undefined;

                    ↓↓↓↓↓

        type Animal = string | number | undefined;
        let 동물 : Animal;

    타입이 길거나 또는 나중에 재사용하고싶을때 변수에 타입을 지정한다.
    이것을 type alias 라고 한다.

    ex) let teacher : {
            name : string,
            age : number,
        } = {
            name : 'kim',
            age : 29,
        }

            ↓↓↓↓↓

        type Person = {
            name : string,
            age : number,
        }
        let teacher : Person = { name : 'kim', age : 28 }

    object 타입도 저장할 수 있다.

    - readonly
    ex) const city = 'seoul';
        city = 'busan';         // error
        const 변수는 상수이기 때문에 재할당시 에러가 난다.
    ex) const user = {
            name : 'kim'
        }
        user.name = 'lee';

        하지만 const 변수여도 object 자료 내부에서는 값의 변경이 가능하다
        const는 재할당만 막아주지 object 안에 속성을 바꾸는 것은  관여하지않는다.
        object 속성을 바뀌지 않게 하려면 아래처럼 타입문법을 써야한다.

    ex) type UserInfo = {
            readonly name : string,
        }
        let user : UserInfo = {
            name : 'kim'
        }
        user.name = 'lee';
    readonly 키워드를 사용한다.
    readonly는 에러를 내는 것일 뿐 js파일에서는 문제가 없다.

    - 속성 몇개가 선택사항일 경우
    ex) type Square = {
            color? : string,
            width : number,
        }
        let 네모 : Square = {
            width : 100
        }
    color 속성이 없어도 에러가 나지 않는다
    color에서 ? 를 붙이면 string | undefinde 의 union type이 되기 떄문이다.

    - type 키워드 합치기 - type alias extend
    ex) type Name = string;
        type Age = number;
        type NewType = Name | age;
    OR 연산자를 이용하여 union type으로 만들 수 있다.

    - type 키워드 합치기 ( object ) - type alias extend
    ex) type PositionX = { x : number }
        type PositionY = { y : number }
        type Position = PositionX & PositionY

        let 좌표 : Position = { x : 10, y : 30}
    object에서 타입을 할 칠 경우 AND 연산자를 이용하여 object안에 속성을 합칠 수 있다.

    - type 키워드는 재정의가 불가
    ex) type Name = string;
        type Name = number;
    타입을 재정의 하는건 불가하다.


    Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠때 중복된 속성이 있다면?
    A. 사용가능하다?
    type PositionX = { x : number }
    type PositionY = { x : number, y : number }
    type Position = PositionX & PositionY
    let 좌표 : Position = { x : 10, y : 30}

    Q2. 다음 조건을 만족하는 타입을 만들어봅시다.
        1. 이 타입은 object 자료형이어야합니다.
        2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
        3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
        4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
        type alias로 만들어보셈

    A.  type 타입 = {
            color? : string,
            size : number,
            readonly position : number[],
        }

        let 변수 : 타입 = {
            size : 178,
            position : [1, 2, 3]
        }

    Q3. 다음을 만족하는 type alias를 만들어 보세요.
        1. object 자료{ name : 'kim', phone : 123, email : 'abc@naver.com' }
        2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
        3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

    A. type UserInfo = {
            name : string,
            phone : number,
            email? : string,
            
        }
        let 회원정보 : UserInfo = {
            name : 'kim',
            phone : 6227
        }

    Q4. 다음을 만족하는 type alias를 만들어 보세요.
        1. 위 문제와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
        2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
        3. 위의 type alias를 재활용해봅시다.

    A. type UserInfo = {
            name : string,
            phone : number,
            email? : string,
            
        }
        type Adult = { adult : boolean }
        type NewUser = UserInfo & Adult;

        let 회원정보 : NewUser = {
            name : 'kim',
            phone : 6227,
            adult : true,
        }

*/ 
