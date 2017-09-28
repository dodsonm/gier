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

    this.setState({
      buyItems: [...this.state.buyItems, newItem]
    });

    this.addForm.reset();
  }

  render() {
    const {buyItems} = this.state;
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
                      <td>Button</td>
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
