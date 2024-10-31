// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Name from './Name';
// import Price from './Price';
// import Description from './Description';
// import Image from './Image';

import Description from "./Description";
import Name from "./Name";
import Price from "./Price";

// const firstName = 'Olatunji'; // Replace with your name

function App() {
  return (
    <div className="App">
      <div className="card" style={{ width: '18rem' }}>
        {/* <Image /> */}
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <p>
        {/* Hello, {firstName ? firstName : 'there'}! */}
      </p>
      {/* {firstName && <img src="./public/laptop.jpeg" alt="laptop" />} */}
    </div>
  );
}

export default App;
