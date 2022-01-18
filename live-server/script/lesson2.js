class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return React.createElement('div', {
      className: 'shopping-list',
      children: [
        React.createElement('h1', {
          children: 'Shopping List for ' + this.props.name
        })
      ]
    });
  }
}
ReactDOM.render(<ShoppingList />, document.querySelector('#root'));