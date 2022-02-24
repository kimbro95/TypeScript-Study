/*
    public, private

    - public 키워드
    ex) class User{
            public name : string;

            constructor(){
                this.name = 'kim';
            }
        }
        let 유저 = new User();
    public이 붙은 속성은 자식 object들이 마음대로 사용하고 수정이 가능하다.
    하지만 기본값이기에 public은 생략가능

    - private 키워드
    ex) class User{
            public name : string;
            private familyName : string;

            constructor(){
                this.name = 'kim';
            }
        }
        let 유저 = new User();
        유저.name       // success
        유저.familyName // error
    private 키워드가 붙으면 오직 class{} 안에서만 수정 및 사용이 가능하다.
    이렇게 부모에서만 사용하고 외부 자식에게 숨기고 싶을 때는 private를 사용하면된다.

    Q1. private 부여된 속성을 class 밖에서 수정해야할 경우?
        1. private 속성을 수정하는 함수를 class 안에 만들고 실행시키면된다.
    
    A.
    ex) class User{
            public name : string;
            private familyName : string;

            constructor(){
                this.name = 'bro';
                this.familyName  = 'kim';
            }
            변경함수(){
                this.familyName = 'lee';
            }
        }
        let 유저 = new User();
        console.log(유저) // { name : 'bro' , familyName : 'kim'}
        유저.변경함수();
        console.log(유저) // { name : 'bro' , familyName : 'lee'}

    ⭐private 용도
    외부에서 실수로 수정하거나 값이 변경되면 안되는 경우
    그리고 함수에서 수정해야하니 약간의 안전장치를 더해서 개발이 가능하다.
    개발은 귀찮지만 버그를 예방한다.

    - public 키워드 팁
    ex) class Person {
            name;
            constructor ( name : string ){
                this.name = name;
            }
        }
        let 사람 = new Person('lee')

                ↓↓↓↓↓

        class Person{
            constructor( public name : string ){
            }
        }
        let 사람 = new Person('kim');
    constructor 파라미테어 public을 붙이면 this.name = name 부분을 생략할 수 있다.
*/ 