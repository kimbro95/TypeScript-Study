/*
    class 를 만들 때 타입지정하기

    - 필드값 타입지정
    ex) class Person {
            data : number = 0;
        }
        let kim = new Person();
        kim.data = '1' // erroe
        data = 0; 으로 두어도 자동으로 number 타입이 지정되긴 하지만
        명시하고싶다면 data : number = 0; 으로 지정해주면된다.

    - constructor 타입 지정
    ex) class Person {
            constructor(){
                this.name = 'kim';
                this.age = 28;
            }
        }
    위의 코드는 자바스크립트에서는 문제가되지않는다.
    타입스크립트 문법에 맞게 작성하려면 아래와 같이 작성해야한다.
    ex) class Person {
        name;
        age;
            constructor(){
                this.name = 'kim';
                this.age = 28;
            }
        }
    타입스크립트에서는 필드 값으로 name, age가 미리 정의되어있어야 constructor 안에서 사용가능하다.

    ex) class Person {
        name;
        age;
            constructor(a){
                this.name = a;
                this.age = 28;
            }
        }
    constructor 함수에는 변수를 집어넣을 수 있다.
    사용시에 new Person('Hi')를 작성하면 'Hi'가 a 값에 들어간다.

    Q1. 위 코드에서 constructor 함수의 타입을 지정해보세요.
        name 속성에는 string만 들어올 수 있게 타입지정 해보십시오. 
    A.  class Person {
        name;
        age;
            constructor( a : string ){
                this.name = a;
                this.age = 28;
            }
        }

    - default parameter
    ex) class Person{
        name;
        age;
            constructor( a = 'kim', b = 28){
                this.name = a;
                this.age = b;
            }
        }
    파라미터에 값을 입력을 안하면 자동으로 기본값을 지정해준다.
    파라미터 = 값

    ⭐constructor 함수는 return 타입을 지정하면 안된다. 
    ⭐constructor에 의해서 object로 자료가 만들어지기 때문이다.
    필드값과 constructor는 같은 기능이다.
    하지만 new Person() 사용할때 안에 파라미터로 값을 넣으려면 constructor를 만들어야한다.

    - methods 타입지정
    ex) class Person{
            add( num : number ) : void {
                console.log( num + 1 )
            }
        }
    클래스 내부에 함수를 입력할 수 있다.
    이 함수는 Person 클래스의 prototype 에 추가된다.

    Q1. Car 클래스 만들기
        1. { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
        2. 사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
        3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 

    A. class Car{
        model : string;
        price : number;
            constructor(a : string, b : number){
                this.model = a;
                this.price = b;
            }
            tax() : number {
                return this.price * 0.1;
            }
        }

    Q2. class 인데 파라미터가 많이 들어간 class Word를 만들어 보세요.
        1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
        2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
        3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
        4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다.

    A.  class Word{
            num;
            str;
            constructor(...Param){

                let nums : number[] = [];
                let strs : string[] = [];

                Param.forEach((val) => {
                    if( typeof val === 'number' ){
                        nums.push(val);
                    } else {
                        strs.push(val);
                    }
                })
                this.num = nums;
                this.str = strs;
            }
        }

        let obj = new Word('kim', 28, 'moon', 30);
        ⭐...Param : rest parameter ⭐
*/