import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['milk', 'bread', 'fruit', 'bananas']
    }
  }

  addItem(e) {
    e.preventDefault();
    const {buyItems} = this.state;
    const newItem = this.newItem.value;
    const isDuplicate = buyItems.includes(newItem);

    if (isDuplicate) {
      this.setState({
        message: 'Item exists.'
      });
    } else {
      newItem !== '' && this.setState({
        buyItems: [...this.state.buyItems, newItem],
        message: ''
      });
    }

    this.addForm.reset();
  }

  removeItem(item) {
    console.log(item);
    const newBuyItems = this.state.buyItems.filter(buyItem => {
      return buyItem !== item;
    });

    this.setState({
      buyItems: [...newBuyItems]
    });
  }

  render() {
    const {buyItems, message} = this.state;
    return (
      <main>
        <header>
          <h1>Shopping List</h1>
          <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
            <div className="form-group">
              <label className="form-label sr-only" htmlFor="newItemInput">Add New Item</label>
              <input ref={input => this.newItem = input} type="text" placeholder="Add..." className="form-control" id="newItemInput" />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
            {
              message !== '' && <div className="message text-danger">{message}</div>
            }
          </form>
        </header>
        <div className="content">
          <table className="table">
            <caption>Things</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                buyItems.map(item => {
                  return (
                    <tr key={item}>
                      <td scope="row">1</td>
                      <td>{item}</td>
                      <td>
                        <button onClick={(e) => this.removeItem(item)} className="btn btn-link">
                          <i className="octicon octicon-trashcan"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </main>
    )
  }
}

export default App;
