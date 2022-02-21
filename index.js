/*
    타입을 미리 선언하기 애매할 때 ( Union type, any, unknown )

    - Union type
    ex) let user : string | number = 'kim';
        let age : ( string | number ) = 28;
    괄호를 쳐도되고 안쳐도된다.
    값을 할당하는 순간 타입은 선언한 string 또는 number 중 하나로 변환된다.

    array, object 에서 Union type 사용할 때
    let arr : ( number | string)[] = [ 1, '2', 3];
    let obj : { data : ( number | string) } = { data : '123' }
    ⭐⭐⭐
    변수 정의된 Union 타입은 값을 할당과 동시에 OR 역할이 사라지지만
    array 또는 object에 정의된 Union 타입은 OR 역할이 유지된다.

    - any type
    let user : any = 'kim';
    user = 123;
    user = false;
    user = [];
    아무 자료나 집어넣을 수 있는 타입이다.

    ⭐ 타입관련 버그가 생길 경우 추적이 어렵다. => 타입스크립트를 쓸 이유가 없다.
    특별한 경우를 제외하고는 쓰지않는것이 좋다.

    - unknown type
    let user : any = 'kim';
    user = 123;
    user = false;
    user = [];
    any 와 똑같이 모든 타입을 집어 넣을 수 있다.
    어떤 타입을 선언해야 할지 모른다면 any 보다는 unknown을 사용하자.
    ⭐ 특징 ⭐
    1. unknown 타입에는 모든 자료가 할당할 수 있다.
    2. 자료를 할당해도 타입은 그대로 unknown 이다.

    ex) let user : unknown;
    let user1 : string = user;
    let user2 : boolean = user;
    let user3 : number = user;
    unknown 타입을 다른 곳에 선언할 수 없다.
    ⭐any는 선언할 수 있다.⭐

    ex)let user: unknown;
    user[0];
    user - 1;
    user.data;
    타입스크립트는 정확한걸 좋아한다
    숫자가 아닌걸 더하기 나 빼기 계산을 처리하지않는다.
    계산은 number 류의 타입만할 수 있고
    .data 이런건 object 류의 타입만 가능하다.

    타입을 미리 선언하기 어려울 때 => unknown


    1. 에러가 나는 이유?
    ex) let age : string | number;
        age + 1;
    A. number 라는 명확한 타입을 지정해야한다. string | number 는 number 타입이 아니다.
    ( uninon type은 새로운 타입이 만들어진 것 )

    2. 에러가 나는 이유?
    ex) let age : unknown = 1;
        age + 1;
    A. unknown은 number 타입이 아니다


    Q1. 다음 변수 4개에 타입을 지정하기.
    ex) let user = 'kim';
        let age = undefined;
        let married = false;
        let 철수 = [user, age, married];

    A.  let user : string = 'kim';
        let age : undefined | number = undefined;
        let married : boolean = false;
        let james : ( string | number | undefined | boolean )[] = [ user, age, married ];

    Q2. school 변수에 타입을 지정하기.
    ex) let school = {
            score : [100, 97, 84],
            teacher : 'Phil',
            friend : 'John'
        }
        school.score[4] = false;
        school.friend = ['Lee' , school.teacher]

    A.  let school : {
        score : (number : boolean)[],
        teacher : string,
        friend : string | string[]
    } = {
        score : [ 100, 97, 84 ],
        teacher : 'Phil',
        friend : John'
    }
    school.score[4] = false;
    school.friend = ['lee', school.teacher]
*/ 
