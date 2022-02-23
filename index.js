/*
    object 에 사용가능한 타입지정

    - object 에 쓸 수 있는 interface 문법
    ex) interface Squeare {
            color : string,
            width : number,
        }
        let 네모 : Square = { color : 'whire', width : 200 }
    object 에 타입을 미리 정의하고싶으면 type 말고 interface 라는 문법으로도 가능하다.

    - interface 의 장정은 extends 도 가능하다.
    ex) interface Student {
            name : string,
        }
        insterface Teacher {
            name : string,
            age : number,
        }
            ↓↓↓↓↓
        interface Student {
            name : string,
        }
        insterface Teacher extends Student {
            age : number
        }
    Student interface 를 extends 해달라고 하면 Student 안에 속성이 복사해서 Teacher 에 넣어준다
    그럼 Teacher 는 age, name의 속성을 가진다.

    - type 과 interface 의 차이점
        type 사용법
        type Dog = {
            name = string
        }
        type Cat = { age : number } & Dog
        & 기호를 사용하여 object 두개를 합칠 수 있다.

        interface 사용법
        interface Dog {
            name : string,
        }
        interface Cat extends Dog {
            age : number,
        }
        extends 를 이용하여 합친다.

        하지만 interface 도 아래 문법 처럼 type 의 & 기호를 이용하여 복사할 수 있다.
        interface Student {
            name : string,
        }
        interface Teacher {
            age : number,
        }
        let Animal : Student & Teacher = { name : 'lee', age : 90}

    - 중복선언
    interface
    ex) interface Animal{
            name : string,
        }
        interface Animal{
            age : number,
        }
    ⭐interface 경우에는 타입이름을 중복으로 선언이 가능하다.⭐

    type
    ex) type Animal{
            name : string,
        }
        type Animal{
            age : number,
        }
    ❌type의 경우 타입이름을 중복 시킬 수 없다.❌

    - 속성 중복선언
    interface
    ex) interface Animal{
            name : string,
        }
        interface Dog extends Animal{
            name : number,
        }
    ❌타입이름은 중복이 가능하지만 속성은 불가능하다.❌

    ex) interface Animal {
            name :string
        }
        interface Dog {
            name :number
        }
        let 변수 : Dog & Animal = { name : 'mozzi' }
    ❌ & 연산자를 이용하여 합쳐도 에러가난다. ❌
    ⭐ 하지만 name : string, name : number 여서 에러가 나는것 둘 다 name : string 이면 에러가 나지않고 하나로 합쳐준다.⭐


    Q1. interface 이용하여 간단하게 타입을 만들어 보세요.
    ex) let item = { brand : 'LG' , serialNumber : 1000, model : ['TV', 'Phone'] }

    A.  interface info {
            brand : string,
            serialNumber : number,
            model : string[],
        }
        let item : info = { brand : 'LG' , serialNumber : 1000, model : ['TV', 'Phone'] }

    Q2. array 안에 object 여러개가 필요합니다
        쇼핑몰 장바구니를 구현해보세요
    ex) let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

    A.  interface Cart{
            product : string,
            price : number,
        }
        let 장바구니 : Cart[] =  [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

    Q3. 위에 만든 타입에 extends 하기
        { product : '청소기', price : 7000, card : false }
        위에 object에 맞게 interface 를 extends 하기

    A.  interface Cart{
            product : string,
            price : number,
        }
        interface Cart2 extends Cart {
            card : boolean,
        }

    Q4. object 안에 함수를 2개 넣기
        1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
        2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.

    A.  interface 함수 {
            plus : ( a : number, b : number ) => number;
            minus : ( a : number, b : number ) => number;
        }

        let obj : 함수 = {
            plus( a, b ){
                return a + b
            },
            minus ( a, b ){
                return a - b
            }
        }
*/ 
