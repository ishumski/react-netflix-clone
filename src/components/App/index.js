import React from 'react';
import Request from '../../api/request';
import Banner from '../Banner';

import Header from '../Header';
import Row from '../Row';


function App() {
  return (
    <div className="App">

      <Header />
      <Banner />
      <Row title='Trending now' request={Request.TRENDING} id='trending' />

    </div>
  );
}

export default App;
