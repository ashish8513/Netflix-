import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar'
import banner from '../../assets/bg (2).jpg'
import hero_title from '../../assets/title.png'
import play from '../../assets/play.svg'
import { FaInfoCircle } from "react-icons/fa";
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import ReactPlayer from 'react-player';
import video_home from '../../assets/5082592-uhd_4096_2160_25fps.mp4'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        {/* <img src={banner} alt="" /> */}
        <ReactPlayer
          url={video_home}
          height="100%"
          width="100%"
          controls
          style={{ backgroundColor: "#000000" }}
          playing={true}
          className='banner-image'
        />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order,a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btn">
            <button className='btn'><img src={play} alt="play" />play</button>
            <button className='btn dark-btn'><FaInfoCircle />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className='more-cards'>
        <TitleCards title={"Blockbuster movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top pic for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home