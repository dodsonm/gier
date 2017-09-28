import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['milk', 'bread', 'fruit', 'bananas']
    }
  }

  render() {
    const {buyItems} = this.state;
    return (
      <main>
        <h1>Shopping List</h1>
        {
          buyItems.map(item => {
            return <p key={item}>{item}</p>
          })
        }
      </main>
    )
  }
}

export default App;
