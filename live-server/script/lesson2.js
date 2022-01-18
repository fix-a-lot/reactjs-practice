class ShoppingList extends React.Component {
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