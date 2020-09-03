import React from 'react';

import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component{

  render(){
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout;