import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [reviews, setReviews] = useState(data);
  const [value,setValue] = useState(0);

  //implemtation of slider using useEffect hook
  useEffect(()=>{
    const size = reviews.length - 1;
    if(value < 0)setValue(size);
    if(value > size)setValue(0);
  },[value,reviews]);
  useEffect(()=>{
    const slider = setTimeout(() => {
      setValue(value+1);
    }, 3000);
    return() => clearInterval(slider);
  },[value]);
  
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews  
        </h2>
      </div>
      <div className="section-center">       
        {reviews.map((element,index) => {
          let position = 'nextSlide';
          if(value === index) position = 'activeSlide';
          if((value-1 === index) || (index === reviews.length-1 && value === 0))position = 'lastSlide'
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
        {/* slider funtion using onClick function */}
        {/* <button className="prev" onClick = {() => {
          let num = (value-1>=0)?value-1:reviews.length-1;
          setValue(num);
        }}><FiChevronLeft/></button>
        <button className="next" onClick = {() => {
          let num = (value+1)%reviews.length;
          setValue(num);
        }}><FiChevronRight/></button> */}
        <button className="prev" onClick = {() => {setValue(value-1);}}><FiChevronLeft/></button>        
        <button className="next" onClick = {() => {setValue(value+1);}}><FiChevronRight/></button>
      </div>
    </section>
  )
}

export default App;
