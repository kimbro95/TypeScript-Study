/*
    타입스크립트 기본 타입 정리 ( primitive types )
    TypeScript 셋팅 및 필수 문법

    - 변수 생성시 타입 정하기
    ex) let user : stirng = 'kim'

    - 타입의 종류
    ex) let user : string = 'kim';
        let age : number = 28;
        let check : boolean = false;
        let zero : null = null;
        let area : undefined;
    null, undefined 굳이 사용하진 않는다.

    - array 또는 object 자료안에서 타입 정하기
    array
    ex) let members : string[] = ['kim', 'park']
    변수명 다음 타입명[] 이렇게 지정하면된다.
    여러개의 타입을 동시에 지정하고싶다면
    변수명 : (string | number)[]

    object
    ex) let myData : { age : number } = { age : 20}

    ⭐⭐⭐타입스크립트 특징⭐⭐⭐
    ⭐모든 변수에 타입을 지정하지 않아도된다.⭐
    ex) let user = 'kim';
        let age = 28;
    타입스크립트가 타입을 자동으로 부여해주기 때문이다
    에러메세지는 tsc -w 명렁어가 실행중인 터미널에 출력된다.


    Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
    A.  1-1. let myName : string = 'Kim Hyeong';
        1-2. let myName = 'Kim Hyeong';

        2-1. let myAge : number = 28;
        2-2. let myAge : 28;

        3-1. let myCountry : string = 'Seoul';
        3-2. let myCountry = 'Seoul';

    Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.( 제목과 가수는 문자만 들어올 수 있어야합니다. )
    A. let favorite : { title : string, singer : string } = { title : '희재', singer : '성시경' };

    Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
    ex) let project = {
            member : ['kim', 'park'],
            days : 30,
            started : true,
        }
    A. let project : {
        member : string[], days : number, started : boolean
    } = {
        member : ['kim', 'park'],
        days : 30,
        started : true,
    }

*/ 
