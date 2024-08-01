import React, { useEffect, useState } from 'react'
import './Player.css'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import back from '../../assets/backarrow.png'

const Player = () => {
    const {id}=useParams();
    const navigate=useNavigate()
    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    })
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDllZDQ3YjJhMjJhOWVhOGViM2E0MjliOWY3MmI1NSIsIm5iZiI6MTcyMjQ4OTM1NS43NTU3MDMsInN1YiI6IjY2YWIxODczOTc2NTljYjFkOGQyYzcyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.thYjBmZ9XLbKKQnrfxbi9TxQU0PeKXjmLcywr9-W0k8'
        }
    };


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='player'>

        <img src={back} alt="" onClick={()=>{navigate(-2)}} />
            <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' frameborder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player