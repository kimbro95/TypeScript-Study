/*
    TypeScript 셋팅 및 필수 문법

    - 설치 및 셋팅
    npm install -g typescript
    파일명.ts
    웹브라우저는 ts파일을 읽을수없기에 js파일로 변환 작업이 필요하다.
    터미널에 tsc -w 입력해두면 자동으로 ts파일을 js파일로 변환해준다.


    - React 프로젝트에서 TypeScript 사용시
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest


    - 새 React 프로젝트 사용시
    npx create-react-app my-app --template typescript


    - tsconfig.json 파일 설정
    {
        "compilerOptions": {
        "target": "ES5",
        "module": "commonjs",
        "noImplicitAny": true,
        "strictNullChecks": true
        }
    }
    target : 타입스크립트파일을 어떤 버전의 자바스크립트로 변환할지 정하는 부분
    es5 = es5 버전 자바스크립트
    es2016, esnext

    module : 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지
    commonjs - require 문법
    es2015, esnext - import 문법

    어느정도 IE 호환성을 원한다면
    es5, commonjs가 국룰임

    추가로 넣을만한 설정
    noImplicitAny : any라는 타입이 의도치않게 발생할 경우 에러를 띄우는 설정
    strictNullChecks : null, undefined 타입에 이상한 조작이 있다면 에러를 띄우는 설정
    
    tsconfig에 들어가는 항목
    https://www.typescriptlang.org/tsconfig


    - 변수를 만들 때 타입지정이 가능하다.
    ex) let user : string = 'kim'
    변수명 : 타입
    타입으로 사용 가능 한 것 string, number, boolean, bigint, null, undefined,[], {} 등


    - 타입을 지정해놓으면 타입에 맞지 않는 값이 들어올 경우 에러 메시지들 띄운다.
    ex) let user : string = 'kim';
        user = 123;


    - 변수에 여러가지 타입의 설정 할 수 있다.
    ex) let user : string | number = 'kim';


    - array 혹은 object 타입
    ex) let user : string[] = ['kim', 'lee'];
        let age : { age : number } = { age : number }


    - type 키워드를 이용하여 타입을 변수처럼 사용 할 수 있다.
    ex) type nameType = string | number;
        let user : nameType = 'kim';


    - literal type ( 나만의 타입을 만들어 사용 할 수 있다. )
    ex) type NameType = 'kim' | 'park';
        let user : NameType = 'kim';
    예시처럼 타입을 정하고 원하는 글자나 숫자를 입력시 user라는 변수 앞에 'kim' 또는 'park' 만 들어올 수 있다.


    - 함수 타입설정
    ex) function 함수명(x : numner) : number {
        return x * 2
    }
    함수는 파라미터와 return 값에 타입 지정이 가능하다.
    함수는 return 타입으로 void 설정이 가능한데 return 이 없는지 체크할 수 있다.


    - 변수의 타입이 확실하지않다면 연산하지않는다.
    ex) - error
        function 함수명(x : number | string) {
            return x * 2
        }

        - success
        function 함수명(x : number | string){
            if(typeof x === ' number'){
                return * 2
            }
        }
    항상 타입이 무엇인지 미리 체크하난 narrowing 또는 assertion 문법을 사용해야 연산이된다.


    - tuple 타입
    type Member = [ number, boolean ];
    let kim : Member = [ 100, false ];
    array 자료안에 순서를 포함하여 어떤 자료가 들어올지 정확히 지정하고싶으면 tuple 타입을 사용해야한다.
    대괄호 [] 안에 들어올 자료의 타입을 명시하면된다.


    - object 타입에 길이가 길 경우
    ex) type MyObject = {
        name? : string,
        age : number
    }
    type 키워드로 변수에 담아 사용가능하다.


    - index signature
    ex) type MyObject = {
            [ key : string ] : number,
        }
        let 짱구 : MyObject = {
            age : 50,
            weight : 100,
        }


    - class 타입 설정
    ex) class Person {
        name;
        constructor( name : string ){
            this.name = name;
        }
    }
    중괄호 내에 미리 name 변수를 만들어놔야 constructor 안에서 this.name이 사용가능하다.

*/ 
