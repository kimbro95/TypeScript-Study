/*
    타입스크립트로 HTML 변경과 조작할 때 주의점

    - strictNullCheck 옵션
    ex) {
            "compilerOptions" : {
                "target" : "ES5",
                "module" : "commonjs",
                "strictNullCheck" : true  
            }
        }
    tsconfig.json 파일에 strictNullCheck 옵션을 true 값으로 줄 경우
    변수를 조작하기 이전에 null 값인지 아닌지 체크할 수 있다.

    - HTML 찾고 변경하기
    ex) let title = document.querySelector("#title");
        title.innerHTML = "HI"

        strict 옵션이 true 로 설정했기때문에 에러가 출력된다
        에러의 원인은 셀렉터로 찾은 html 의 타입은 Element | null 두가지 타입의 union type 이기 때문이다.
        ( 찾지 못 했을 경우에는 null )


    - 해결을 위한 narrowing 방법
    1. 기본적인 narrowing
    let title = document.querySelector("#title");
    if ( title !== null ){
        title.innerHTML = 'Hi'
    }

    2. instanceof 를 이용한 narrowing
    let title = document.querySelector("#title");
    if( title instanceof Element ){
        title.innerHTML = 'Hi'
    }

    3. assertion 을 이용한 narrowing
    let title = document.querySelector("#title") as Element;
    title.innerHTML = 'Hi'

    4. optional chaining 연산자를 이용한 narrowing
    let title = document.querySelector("#title");
    if( title?.innerHTML !== undefined ){
        title.innerHTML = 'Hi'
    }

    5. strictNullCheck 옵션을 false 로 설정하기

    가장 좋은 해결책은 2번의 instanceof 를 이용한 narrowing 이다.
    3번 또는 5번은 해결책이긴 하지만 그렇다면 타입스크립트를 쓰는 의미가 없다.


    - a태그의 href 속성 바꾸기
    ex) let link = document.querySelector(".link");
        if( link instanceof HTMLAnchorElement ){
            link.href = 'daum.net'
        }
    html 태그에는 종류별로 정확한 타입명칭이 있다
        a 태그   - HTMLAnchorElement
        img 태그 - HTMLImageElement
        h4 태그  - HTMLHeadingElement
        button 태그 - HTMLButtonElement
    이렇게 태그별로 정확한 타입으로 narrowing을 해야한다.


    - 이벤트리스너에서 narrowing
    let button = document.getElementById('#button');
    button?.addEventListener('click', function(){
        console.log('hi');
    });
    optional chaining 문법을 이용한 narrowing

    Q1. 이미지를 바꿔보세요.
    이미지를 new.jpg 로 변경해보세요
    ex) <img id="image" src="img.jpg" />

    A.  let imgSrc = document.querySelector("#image");
        if( imgSrc instanceof HTMLImageElement){
            imgSrc.src = 'new.jpg';
        }

    Q2. 여러개의 html요소 바꾸기
    ex) <a class="naver" href="naver.com">링크</a>
        <a class="naver" href="naver.com">링크</a>
        <a class="naver" href="naver.com">링크</a> 

    A.  let link = document.querySelectorAll('.naver');
        link.forEach((val) => {
            if( val instanceof HTMLAnchorElement ){
                val.href = 'daum.net'
            }
        })
*/