import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HeroImg2 from '../components/heroImg2'
import Work from '../components/work'


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
