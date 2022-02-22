/*
    함수와 methods에 type alias를 지정하는 법

    - function type
    ex) type NumOut = ( x : number, y : number ) => number;
            타입명 = (파라미터 타입) => 리턴타입;

        let ABC : NumOut = ( x, y ) => {
            return x + y
        }
    함수에 타입을 지정할 때는 위와 같이 선언한다.

    - methods 안에 타입지정하기
    ex) let 회원정보 = {
        name : 'kim',
        age : 28,
        plusOne ( x ){
            return x + 1
        },
        changeName : () => {
            console.log('hello')
        }
    }
    회원정보.plusOne(3);
    회원정보.changeName();

    object 함수안에 arrow function, 일반함수 전부 집어넣을 수 있다.

    Q1. 위에 method 코드 예시에서 회원정보라는 변수에 타입을 지정해보자.
        1. plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
        2. changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
        3. type 키워드를 쓰든 말든 알아서 합시다.

    A.  type 회원정보 = {
            name : string,
            age : number,
            plusOne : ( x : number ) => number,
            changeName : () => void
        }

    Q2. 다음 함수 2개를 만들고 타입을 정의하기
        1. cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
        2. removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
        3. 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

    A.  type Cut = ( x : string ) => string;
        let cutZero : Cut = ( x ) => {
            let result = x.replace(/^0+/, "");
            return result;
        }

        let removeDash = ( x : string ) : number => {
            let result = x.replace(/-/g, "");
            return parseInt(result);
        }

    Q3. 함수에 함수를 집어 넣기
        Q2 에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
        이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
        1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
        2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
        3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
        이 함수는 어떻게 만들면 될까요?
        둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

    A.  type Cut = ( x : string ) => string;
        let cutZero : Cut = ( x ) => {
            let result = x.replace(/^0+/, "");
            return result;
        }

        let removeDash = ( x : string ) : number => {
            let result = x.replace(/-/g, "");
            return parseFloat(result);
        }

        type Ytype = ( a : string ) => string;
        type Ztype = ( a : string ) => number;
        function 만든함수( x : string, y : Ytype, z : Ztype){
            let result = y(x);
            let result2 = z(result);
            console.log(result2);
        }
        만든함수('010-1111-2222', cutZero, removeDash);
*/
