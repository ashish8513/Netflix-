import React, { useEffect, useRef, useState } from 'react'
import './Title.css'
// import cards_data from '../../assets/cards/Card_data'
import { Link } from 'react-router-dom'
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDllZDQ3YjJhMjJhOWVhOGViM2E0MjliOWY3MmI1NSIsIm5iZiI6MTcyMjQ4OTM1NS43NTU3MDMsInN1YiI6IjY2YWIxODczOTc2NTljYjFkOGQyYzcyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.thYjBmZ9XLbKKQnrfxbi9TxQU0PeKXjmLcywr9-W0k8'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  return (
    <div className='title-cards'>
      <h2 className=''>{title ? title : "popular on netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {
          apiData.map((card, index) => {
            return <Link to={`/player/${card.id}`} key={index} className='card'>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p className='card-title'>{card.original_title}</p>
            </Link>
          })}
      </div>
    </div>
  )
}

export default TitleCards