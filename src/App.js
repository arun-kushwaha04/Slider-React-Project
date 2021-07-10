import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [reviews, setReviews] = useState(data);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews  
        </h2>
      </div>
      <div className="section-center">       
        {reviews.map((element,index) => {
          let position = 'lastSlide';
          const {image,name,title,quote} = element;
          return(
            <article className={position} id={index}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className="icon"/>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default App;
