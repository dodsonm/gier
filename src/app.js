import React from 'react';

const Headline = () => {
  return <h1 className="hed">Now with Google&apos;s Material UI library!</h1>
}

const Greeting = (props) => {
  const {name, age} = props;
  return <p>You will love it, {name} ({age})!</p>
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Headline />
        <Greeting name="Amy" age={30} />
      </div>
    )
  }
}

Greeting.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number
}

export default App;
