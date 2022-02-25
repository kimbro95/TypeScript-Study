/*
    import export

    - 기본적으로 js 와 똑같다
    ex) 
    import * from './a';
    import { userName, age } from './a';

    a.ts
    export let userName = 'kim'
    export let age = 20;

    Q1. Car 그리고 Bike 타입을 import  export 해보기
    ex) export type Car = {
            wheel : number,
            model : string
        }
        export interface Bike {
            wheel : 2,
            model : string
        }

    A.
    index.ts
        import { Car, Bike } from './a'
        let myCar : Car = { wheel : 4, model : 'k5'}
    a.ts
        export type Car = {
            wheel : number,
            model : string
        }
        export interface Bike {
            wheel : 2,
            model : string
        }

    Q2. 자주만들어 쓰는 함수를 불러와보세요.
    이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
    아무것도 return 해주지 않아야합니다. 
    함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
    이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요

    A.
    index.ts
        import { 타입 } from './a'
        let 함수2 : 타입 = function(a){
            console.log(a);
        }
        함수2({ a : 'hi'});
    a.ts
        export type 타입 = (a : object) => void

    Q3. 타입중복 해결하기 namespace를 이용해보자
    ex) type Dog = string;
        interface Dog { name : string };

        let dog1 :Dog = 'bark';             // error
        let dog2 :Dog = { name : 'paw' }    // error

    A.  namespace 네임스페이스1{
            export type Dog = string;
        }
        namespace 네임스페이스2{
            export interface Dog { name : string };
        }
        let dog1 :네임스페이스1.Dog = 'bark';
        let dog2 :네임스페이스2.Dog = { name : 'paw' }
*/