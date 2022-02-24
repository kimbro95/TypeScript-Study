/*
    다양한 Narrowing 방법

    - null & undefined 체크
    ex) if(변수 && typeof val === 'sting'){}
        && 연산자를 이용한다

    && 연산자란?
    조건식이 모두 참이면 true 로 판정해주는 논리연산자이다
    하지만 여러개를 사용하면 다르다
    && 기호를 비교할 때 true 와 false 를 넣는게 아니라 자료형을 넣으면
    && 사이에 처음등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남긴다.
    falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미한다.
    ex) 1 && null && 3 // null
        undefined && 'Hi' && 100 // undefined
    그래서
    if(변수 && typeof val === 'sting'){}
    이렇게 사용하면 변수가 undefined 라면 undefined 가 남아서 if문이 실행되지않는다.
    if문 안에 falsy 값을 남기면 if가 실행되지않음

    - in 연산자로 object 자료 narrowing
    ex) type Fish = { swim : string };
        type Bird = { fly : sting };

        function 함수( animal : Fish | Bird ){
            if ('swim' in animal){
                return animal.swim
            }
            return anima.fly
        }
    if (키값 in object자료형)
    Fish 와 Bird 처럼 처럼 다른 유니크한 속성이 있다면 저 키값을 통해 in 을 사용할 수 있다.

    - class로부터 생산된 object라면 instanceof로 narrowing
    ex) let 날짜 = new Date();
        if(날짜 instanceof Date){
            console.log(true);
        }
    object들은 instanceof 키워드를 이용하여 부모클래스를 확인할 수 있다.

    - literal type을 이용한 narrowing
    ex) type Cat = {
            wheel : 4,
            color : string
        }
        type Bike = {
            wheel : 2,
            color : string
        }
        function 함수(x : Car | Bike ){
            if(x.wheel === 4){
                console.log('Car')
            } else {
                console.log('Bike')
            }
        }
    typeof연산자는 string, number, object 같은 타입만 구분해준다.
    위에 경우일 경우 literal type wheel을 만들어 값이 서로 다르게 고유의 값을 줘서 구분 할 수 있다.


*/

