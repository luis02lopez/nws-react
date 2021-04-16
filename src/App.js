import React, {Fragment} from 'react';
import './App.css';
import All from './components/All';
import Footer from './components/Footer';

function App() {
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <All />
      <Footer />
    </Fragment>
  );
}

export default App;
