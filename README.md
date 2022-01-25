# Testbed: React.js

## 설치

HTML 파일을 직접 작성할 건지, Node.js로 작업할 건지에 따라 갈린다.

### HTML

리액트는 라이브러리라서 js 파일을 불러오기만 하면 된다. 보통은 이렇게:

```js
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

두 개를 끌어다 씀. CDN 링크는 [여기를 클릭](https://reactjs.org/docs/cdn-links.html).

JSX 문법을 사용하려면 아래처럼:

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<div id="root"></div>
<script type="text/babel">
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
  ReactDOM.render(element, document.querySelector('#root'));
</script>
```

[@babel/standalone](https://babeljs.io/docs/en/babel-standalone#installation)을 불러오고 내 스크립트에 `type="text/bable"` 속성을 추가하면 된다.

### Node.js

```bash
npx create-react-app APP_NAME
```

[Create React App](https://create-react-app.dev/docs/getting-started/) 패키지를 npx로 설치한다. 이후 `APP_NAME` 디렉터리에서:

```bash
npm start
```

하면 샘플 페이지가 있는 웹 서버가 기동된다. HTML 없이 그냥 되는거 아니다. `public/index.html`을 참고할 것.

바벨은 리액트 패키지에 포함되어 있어서 별도 설치 불필요.
