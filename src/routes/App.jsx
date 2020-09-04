import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from '../components/Layout';
import ToBlog from '../pages/ToBlog';
import Blog from '../pages/Blog';
import './App.scss';


class App extends React.Component {
  state = {
    indicador: true,
  }

  presencia

  componentDidMount(){
    if(this.presencia==false){
      this.setState({
        indicador: this.presencia 
      })
    }
  }

  indicador = presencia =>{
    return this.presencia = presencia
  }

  render(){
    return (
        <BrowserRouter>
          <Switch >
            <Layout isActive={this.state.indicador}>
              <Route exact path="/"  render= { () => ( 
                <ToBlog indicate={this.indicador} /> )
               } />
               <Route exact path="/blog" render={ () => (
                <Blog />
               )
               } 
               />
            </Layout>
          </Switch>
        </BrowserRouter>
      )
  }
}

export default App;
