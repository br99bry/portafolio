import React from 'react';

import mainNew from '../images/main-news-img.jpeg';

import './styles/SliderNews.scss';

class SliderNews extends React.Component{
  render(){
    return (
      <React.Fragment>
        <section className="SliderNews">
          <div className="SliderNews__title">
            <h5>Noticias</h5>
          </div>
          <div className="SliderNews__left">
            <img src={mainNew} alt=""/>
          </div>
          <div className="SliderNews__right">
            <h2>Titulo del blogpost</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nisi distinctio, quaerat ipsa molestiae minus soluta est vero ab saepe perspiciatis deserunt quod nobis temporibus consequatur sit deleniti, modi ratione.

            </p>
            <div className="SliderNews__right-button">
              <p>Leer más</p>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default SliderNews;