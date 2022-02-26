function App() {
  return (
    <div>
      <h1>React 에서 TypeScript 를 사용할 때</h1>
      {/*
          - React에서 TypeScript 셋팅
            설치 명령어
            npx create-react-app 프로젝트명 --template typescript

            기존 프로젝트에 타입스크립트를 더하고싶다면
            npm i --save typescript @types/node @types/react @types/react-dom @types/jest

            파일 확장자
            .tsx 파일은 jsx 파일 .ts는 .js 라고 생각하면된다.
            코드를 작성하는 방법은 일반 리액트와 큰 차이가 없다.
            하지만 함수, commponent, state, props 에서 타입체크를 잘 해줘야 에러가 나지 않는다.

          - 일반 변수, 함수 타입지정
            ex) let a : string = 'kim';
                function 함수( a : string ) : string {
                  return a;
                }
            그냥 타입스크립트에서 사용하듯이 사용하면 된다.

          - JSX 타입지정
            ex) let 박스 : JSX.Element = <div></div>
                let 버튼 : JSX.Element = <button></buttom>
            리액트에서는 변수나 자료에 <div></div> 같은 html 문법을 담을 수 있다. ( JSX )
            이런 JSX 에 타입을 지정하고 싶으면 JSX.Element 타입을 쓰면된다.

            더 정확한 타입지정은
            ex) let 박스 : JSX.IntrinsicElements['div'] = React.createElement('div');
                let 버튼 : JSX.IntrinsicElements['button'] = <button></button>;
            JSX를 사용하지 않을 경우에 createElement 함수를 사용해야한다.

          - function component 타입 지정
            ex) type AppProps = {
                  name = string;
                };
                function App( props : AppProps ) : JSX.Elemnet {
                  return(
                    <div>{ props.@@@ }</div>
                  )
                }
            return 타입은 JSX.Element 를 사용하면된다. 하지만 생략해도 자동을 타입지정이 된다.

          - state 문법 사용시 타입지정
            ex) const [ user, setUser ] = useState< string | number >('kim');
            state를 만들 때는 그냥 자동으로 타입이 할당된다.
            하지만 타입을 지정해야한다면 <> Generic 문법을 이용해서 useState함수에 집어넣어주면된다.

          - type assertion 문법
            ex) let code : any = 123;
                let code2 = <nuber> code; // error
            assertion을 사용할 때는 as 또는 <>를 사용한다.
            하지만 리액트에서는 컴포넌트로 오해할 수 있기에 <> 쓰지않는다.
            as 키워드를 통해 사용한다.

          ⭐리액트의 문법이 달라지지 않는다 함수 변수 정의 부분에 타입지정을 하는 역할⭐
      */}
    </div>
  );
}

export default App;
