import React from 'react'

const App = () => {
  const name = 'John';
  const x  = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];
  const loggedIn = true;

  // if (loggedIn) {
  //   return <h1>Hello Member</h1>
  // }

  const styles = {
    color: 'blue',
    fontSize: '55px',
  }

  return (
  <>
    <div className='text-5xl' style={styles}>App</div>
    <p style={{ color: 'red', fontSize: '24px' }}>Hello {name}</p>
    <p>
      The sum of {x} and {y} is {x + y}
    </p>
    <ul>
      { names.map((name, index) => (
        <li key={index}>{name}</li>
      )) }
    </ul>
    { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1> }
    { loggedIn && <h1>Hello Member!</h1> }
  </>

  );
};

export default App;