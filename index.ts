/*
    함수에서 사용하는 never 타입

    - never type이란?
    ex) function 함수() : never{

    }
    조건1 - 함수가 절대 return 하지않아야하고
    조건2 - 함수가 실행이 끝나지 않아야한다.
    End Point가 없을 경우 그런 함수에 붙이는 타입이다.
    모든 자바스크립트 함수에는 return undefined 가 숨겨져있다.

    - 사용되는 경우
    ex) fucntion 함수() : never{
            while( true ){
                console.log(1)'
            }
        }
    무한히 실행되어 End Point가 없어서
    
    ex) function 함수() : never{
            throw new Erroe('erroe')
        }
    에러가 나면 코드실행이 중단되기 때문에
    never를 사용할 수 있다.

    ⭐무언가 return 하지않고싶을 경우에는 void를 쓰자⭐
    never 타입을 사용할 일은 거의 없다.
    하지만 코드가 이상하게 짜다보면 자동으로 등장해서
    코드에 문제를 발견 할 수 있다.

    ex) function 함수(val : string){
            if(typeof val === 'string'){
                val = 'Hi';
            } else {
                val = 'else';
            }
        }
    이 경우에 else문이 실행될 경우는 없다 이럴경우 타입이 자동으로 never로 변환된다.
    이런 건 있을 수 없다, 일어나면 안된다고 알려주는 느낌이라 생각하자.

    ex) function 함수(){
            throw new Error()
        }

        let 함수2 = function (){
            throw new Error()
        }
        함수 선언문에 return이 없으면 void로 자동 타입 할당
        함수 표현식에 return이 없으면 never로 자동 타입 할당
*/