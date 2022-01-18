const rootElement = document.querySelector('#root');
console.log(rootElement);

const elementV = document.createElement('h1');
console.log(elementV);

const element = React.createElement('h2', null, '대통령 선거', ' : ', '대통령 앉은거');

const element2 = React.createElement('h2', {
  className: 'title',
  children: [
    '대통령 선거', ' : ', '대통령 앉은거'
  ]
});

const element3 = React.createElement('h2', {
  className: 'title',
  children: [
    React.createElement('span', { key: 1 }, '대통령 선거'),
    React.createElement('span', { key: 2 }, ' : '),
    React.createElement('span', { key: 3 }, '대통령 앉은거')
  ]
});

const element4 = React.createElement('h2', null, '아', '야', '어', React.createElement('span', null, '여'));

console.log(element);
const ele = ReactDOM.render(element, rootElement);
// ReactDOM.render(element2, rootElement);
// const ele = ReactDOM.render(element3, rootElement);
// ReactDOM.render(element4, rootElement);
console.log(ele);
console.log(ele instanceof HTMLHeadingElement); // true

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(
  <ShoppingList />,
  document.getElementById('root')
);