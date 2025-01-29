import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Anneback from './components/Anneback';
import Michel from './components/MO';
import Vr from './components/Vr';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <>
        <Welcome />
        <Anneback />
        <Michel />
        <Vr />
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
