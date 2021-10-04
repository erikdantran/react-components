// var GroceryListItems = (props) => {
//   var onListItemClick = (event) => {
//   console.log('I got clicked')
// };

// return (
//   <ul>
//     <li onClick={onListItemClick}>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//     <li>{props.items[3]}</li>
//   </ul>
// );
// }

// var App = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryListItems items={['Green Beans', 'Eggs', 'Cucumbers', 'Kale']} />
//   </div>
// );


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hovered: false
    }
  }

  onListItemClick() {
    if (this.state.done === true) {
      this.setState({
        done: this.setState.done
      })
    } else (
      this.setState({
        done: !this.setState.done
      })
    )
  }

  onHoverEntry() {
    console.log('Enter', this.state.hovered)
    this.setState ({
      hovered: !this.setState.hovered
    })
  }

  onHoverLeave() {
    console.log('Leave', this.state.hovered)
    this.setState ({
      hovered: this.setState.hovered
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? '700' : '100'
    };

    return (
    <li style={style}
    onClick={this.onListItemClick.bind(this)}
    onMouseEnter={this.onHoverEntry.bind(this)}
    onMouseLeave={this.onHoverLeave.bind(this)}>
      {this.props.items}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
      {props.items.map(item =>
        <GroceryListItem items = {item} />
        )}
    </ul>
)


var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Green Beans', 'Eggs', 'Cucumbers', 'Kale']}/>
  </div>
)




ReactDOM.render(<App />, document.getElementById("app"));
