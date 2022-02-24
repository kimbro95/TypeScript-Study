/*
    rest parameter, destructuring 타입지정

    - rest parameter란?
    ex) function 함수(...val){
            console.log(val) // [1,2,3,4,5]
        }
        함수(1,2,3,4,5)
    함수 파라미터 앞에 점 3개를 붙여주면 파라미터를 여러개 선언하면 다 불러올 수 있다.
    다른 일반 파라미터 뒤에만 올 수 있다.
    집어넣은 값들은 전부 arry [] 안에 담겨진다.

    - rest parameter 타입지정
    ex) function 함수(...val : number[]){
            console.log(val)
        }
    rest parameter는 [] 안에 담겨오기 때문에 array 형태로 타입을 지정해야한다.

    ex) let arr = [4,5]
        let arr2 = [1,2,3, ...arr]
        console.log(arr2) // [1,2,3,4,5]
    array 혹은 object 왼쪽에 rest parameter를 붙이면 []가 사라진다.

    - Destructuring이란?
    ex) let { name, age } = { name : 'kim', age : 28 }
        let [ age, name ] = [ 'kim', 28 ]
    array나 object 에서 왼쪽 오른쪽 동일하게 변수를 작명하면 변수를 쉽게 사용할 수 있다.
    let Person = { name : 'kim', age : 28 }
    Person.name 처럼 사용하지않고
    let { name, age } = { name : 'kim', age : 28 }
    이렇게 선언하면 name을 가져오면된다.

    - 함수에서 사용하는 Destructuring
    ex) function 함수({ student, age }){
            console.log(student, age);
        }
        함수({student : true , age : 30 })

    Q1. 위의 함수 파라미터에 타입을 지정해보세요.
    A.  function 함수({ student, age } : { student : string, age : number }){
            console.log(student, age);
        }
        함수({student : true , age : 30 })

    Q2. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어보자.
        최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
        (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
        (조건2) Math.max() 사용금지 반복문이나 쓰셈

    A. function 함수(...num : number[]) : number {
            let max : number = 0;
            num.forEach((a) => {
                if( a > max) {
                    max = a;
                }
            })
            return max;
        }
        console.log(함수(6,3,7,2));

    Q2. 아래 object 자료를 파라미터로 입력할 수 있는 함수로 만들어보자.
        (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
        (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

    A. function 함수({ user, comment, admin} : { user : string, comment : number[], admin : boolean}) : void{
            console.log(user, comment, admin);
        }
        함수( { user : 'kim', comment : [3,5,4], admin : false } )
    A-2 함수의 파라미터들이 많을 경우 type 으로 변수에 담아된다.

    Q3. 아래 array 자료를 파라미터로 입력할 수 있도록 함수를 만들어보자.
        함수( [40, 'wine', false] )
        (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
        (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

    A.  type 여러타입 = ( number | string | boolean )[];
        function 함수([ a, b, c ] : 여러타입):void{
            console.log(a,b,c)
        }
        함수( [40, 'wine', false] )
*/