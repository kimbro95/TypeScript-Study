/*
    protected, static

    - class는 extends로 복사가 가능하다.
    ex) class User {
            a : string = 'A'
        }
        class NewUser extends User{
        }
        let 유저 = new NewUser()
        console.log(유저)   // NewUser { a : 'A' }
    extends 문법을 통해 기존 class에 있던걸 전부 복붙해준다.

    - protected
    ex) class User {
            protected x : number = 10;
        }

        class NewUser extends User{
            doNumber(){
                this.x = 20;
            }
        }
    protected는 private와 동일하게 class 안에서만 사용이 가능하고 자식들은 사용 할 수 없다.
    하지만 private 와 차이점은 부모 class 끼리 extends를 사용하면 속성을 공유 할 수 있다.

    - static
    ex) class User{
            x : number = 10;
            y : number = 20;
        }
        let lee = new User();
        lee.x   // 가능
        User.x  // 불가능
            ↓↓↓↓↓
        class User{
            static x : number = 10;
            y : number = 20;
        }
        let lee = new User();
        lee.x   // 불가능
        User.x  // 가능
    위 코드와 다르게 아래코드에서 static을 붙일경우 부모클래스명으로 직접 접근해서 사용이 가능하다.
    함수에도 static을 불일 수 있다.
    extend로 class를 복사할 경우 속성에 static이 있을 경우 붙어서 따라온다

    ⭐static은 private, protected, public 키워드와 같이 사용 할 수 있다.⭐
    static의 활용 예시
    ex) class User{
            static skill = 'js'
            info = User.skill + '전문가'
        }
        let lee = new User()
        console.log(lee)    // User { info : 'js전문가' }
        User.skill = 'ts'
        lee = new User()
        console.log(lee)    // User { info : 'ts전문가' }
    ⭐static의 경우에 this.skill이 아닌 부모를 직접 사용해야하기 때문에 User.skill로 사용한다.

    Q1. x, y, z 속성의 특징
    ex) class User{
            private static x = 10;
            public  static y = 20;
            protected z = 30;
        }
    A.  x : private 속성이 있기 때문에 User class 안에서만 사용이 가능하고 static 속성이 있기 때문에 부모클래스 User 로 접근 가능하다.
        y : static 속성이 있기 때문에 부모클래스 User로 접근가능하고 public 속성이기에 User클래스 밖에서도 접근 할 수 있다.
        z : protected 속성이 있기 때문에 User 클래스 안에서만 사용이 가능하고 다른 부모클래스에 extends 될 경우에도 사용 할 수 있다.

    Q2. x 속성에 숫자를 더해주는 함수가 필요합니다.
    ex) class User {
            private static x = 10;
            public static y = 20;
        }
        User.addOne(3) //이렇게 하면 x가 3 더해져야함
        User.addOne(4) //이렇게 하면 x가 4 더해져야함
        User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

    A.  class User {
            private static x = 10;
            public static y = 20;
            static addOne(val : number){
                User.x = User.x + val;
            }
            static printX(){
                console.log(User.x);
            }
            
        }
        User.addOne(3) // x가 3 더해져야함
        User.addOne(4) // x가 4 더해져야함
        User.printX()  // 콘솔창에 x값이 출력되어야함

    Q3. 웹 요소 애니메이팅 만들어보세요
    ex) let 네모 = new Square(30, 30, 'red');
        네모.draw()
        네모.draw()
        네모.draw()
        네모.draw()
    네모.draw()를 할 때마다
    index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
    가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.

    A.
    class Square{
        constructor(public w : number, public h : number, public c : string){
        }
        draw(){
            let ramdom = Math.random();
            let square = `<div style="position:relative;
            top : ${ramdom * 400}px;
            left : ${ramdom * 400}px;
            width : ${this.w}px;
            height : ${this.h}px;
            background : ${this.c}">
            </div>`;
            document.body.insertAdjacentHTML( 'beforeend', square );
        }
    }
    let nemo = new Square(30, 30, 'violet');
    nemo.draw()
    nemo.draw()
    nemo.draw()
    nemo.draw()
*/
