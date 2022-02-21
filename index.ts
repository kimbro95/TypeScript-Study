/*
    함수에 타입을 지정하는 방법 & void 타입

    - 함수에는 타입을 2곳에 지정할 수 있다.
    ex) function 함수( x : number ) : number {
        return x * 2
    }
    함수에 들어오는 파라미터 타입지정은 파라미터 옆에서 지정한다.
    함수가 실행되고 return 되는 값에 타입을 지정하려면 함수명() 옆에 지정한다.

    - void 타입
    ex) fucntion 함수( x : number ) : void {
            return x * 2
        }
    void = 아무것도 없이 공험함을 뜻 함
    return할 자료가 없는 함수의 타입
    예시에 코드를 작성하면 return 문이 있는곳에 에러가 난다. => void 타입이기 때문에
    함수가 return 되는것을 방지하고싶을때 활용하면된다.

    - 파라미터가 옵션인 경우
    ex) function 함수( x? : number){

    }
    함수();     // 가능
    함수(2);    // 가능
    파라미터 우측에 ? 값을 주면된다
    물음표는 x : number | undefined 와 똑같은 의미이다.

    Q1.예시 코드에 return문에 에러가 나는 이유는?
    ex-1) function count( x: number | string ){
            return x + 1
        }
    ex-2) function 내함수(x? :number) :number { 
            return x * 2 
        }  
    A. 타입스크립트에서 변수의 타입이 number가 아닐경우에 연산을 하지않는다.
    지금처럼 number | string 이 선언된 union type 일 경우 에러를 띄운다.

    Q2.이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력하고
    아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.

    A. function  myName(x? : string) : void{
            if(x){
                console.log(`안녕하세요 ${x}`)
            } else {
                console.log(`이름이 없습니다.`)
            }
        }

    Q.3 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
    ex) '245' 이런 문자를 입력하면 3이 return 되어야합니다.
        숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
        숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
    
    A.  function 문자( x : number | string ){
            if(typeof(x) === 'number'){
                return x.toString().length;
            } else {
                return x.length;
            }
        }

    Q4. 결혼 가능 확률 함수
    1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
    2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산
    3. 총 점수가 600점 이상일 경우 '가능'을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

    ex) 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
        결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

    A.  function check( money : number, house : boolean, charm : string) : string : void {
            let score : number = 0;
            score +=;

            if( house === true ){
                score += 500
            }
            if( charm === '상' ){
                score += 100
            }
            if( score >= 600 ){
                return '가능'
            }
        }
        console.log(check(300, false, '중'));
*/