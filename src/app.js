import React from 'react';

const Headline = () => {
  return <h1 className="hed">Now with Google&apos;s Material UI library!</h1>
}

const Greeting = (props) => {
  const {name, age} = props;
  return <p>You will love it, {name} ({age})!</p>
}

const App = () => {
  return (
    <div>
      <Headline />
      <Greeting name="Matt" age={40} />
    </div>
  )
}

Greeting.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number
}

export default App;
