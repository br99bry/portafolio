import React from 'react';
import { Link } from 'react-router-dom';

import './styles/ToBlog.scss';

const ToBlog = (props) => {

  const toBlogIndicate = () => {
    return props.indicate(false)
  }

  toBlogIndicate()

  return (
    <React.Fragment>
      <main className="ToBlog">
        <div className="ToBlog__details">
          <h1 className="ToBlog__title" >Conoce las novedades y <br/>
          noticias del mundo Tech
          </h1>
          <div className="ToBlog__button">
            <Link to='/blog' >Entra ya!!</Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default ToBlog;