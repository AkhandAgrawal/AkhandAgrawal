import React from 'react'
// import Work from '../components/work'
import Navbar from "../components/navbar"
import HeroImg from "../components/heroImg"
import Footer from "../components/footer"
import HomeProjects from '../components/homeProjects'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <HomeProjects />
      <Footer />
    </div>
  )
}

export default Home