import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from '../components/Layout';
import './App.scss';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Layout />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
