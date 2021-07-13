import React, { Fragment } from 'react';
import Featured from './components/featured';
import Footer from './components/header_footer/Footer';
import Header from './components/header_footer/Header';
import './resources/styles.css';

const App = () => {
  return (
    <Fragment>
      <Featured />
      <Header />
      <div style={{ backgroundColor: 'turquoise', height: '800px' }}></div>
      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <Footer />
    </Fragment>
  );
};

export default App;
