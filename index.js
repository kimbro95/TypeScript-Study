/*
    타입 확정하기 Narrowing & Assertion

    - Type Narrowing
    ex) function 함수( x : number | string ){
            if( typeof x === 'number' ){
                return x + 1
            } else if ( typeof === 'string' ){
                return x + 1
            } else {
                return 0
            }
        }
    x 는 union type 이기 때문에 if문 등으로 타입을 하나로 정해주는것
    마지막에 else 문이 없다면 에러가 출력된다.
    return이 없는 조건문이 있다면 나중에 버그가 생길 수 있어서 에러를 출력해 주는 것
    tsconfig.js에 "noImplicitReturns" : false,
    값을 주면 return 이 없을 경우 마지막 else{}에 에러가 출력되지않는다.
    in , instanceof 도 사용한다.

    - Type Assertion
    ex) function 함수( x : number | string ){
        return ( x as number ) + 1
    }
    변수명 as 타입 이렇게 타입을 정할 수 있다.
    ⭐특징⭐
    union type 처럼 타입이 여러개일때 사용한다. ( ❌ string 타입을 number 타입으로 변경 불가 )
    실제로 타입을 변경하는것은 아니다 as 로 number 타입이라 눈속임하는 용도.

    어쩔수없는 상황이 아닌 이상 Assertion 보다는 Narrowing을 쓰자

    Q1. 숫자여러개를 array 자료에 저장해놨는데 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
        이걸 클리닝해주는 함수가 필요합니다.
        클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
        [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

    A.  function 클리닝함수(a : (string | number)[]){
            let result : number[] = [];

            a.forEach((num) => {
                if(typeof num === 'string'){
                    result.push(parseInt(num));
                } else {
                    result.push(num);
                }
            })
            return result;
        }
        console.log(클리닝함수([1, 2, '3', 4, '5']));
    
    Q2. 다음과 같은 함수를 만들어보세요
        let 철수쌤 = { subject : 'math' }
        let 영희쌤 = { subject : ['science', 'english'] }
        let 민수쌤 = { subject : ['science', 'art', 'korean'] }

        지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
        과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
        과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.

        동작예시)
        만든함수( { subject : 'math' } )                        //이 경우 'math'를 return
        만든함수( { subject : ['science', 'art', 'korean'] } )  //이 경우 'korean'을 return
        만든함수( { hello : 'hi' } )                            //이 경우 타입에러 나면 됩니다.

    A.  function 만든함수( x : { subject : string | string[]}) {
            if( typeof x.subject === 'string' ){
                return x.subject
            } else if ( Array.isArray(x.subject) ){
                return x.subject[ x.subject.length -1 ]
            } else {
                return 'error'
            }
        }
        console.log(만든함수({ subject : 'art'}));
*/ 
