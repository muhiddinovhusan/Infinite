import React from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar2 from './components/Nav2/Navbar2'
import Club from './components/Club/Club'
import PhotoGalery from './components/PhotoGalery/PhotoGalery'
import Apartment from './components/Apartment/Apartment'
import Terms from './components/Terms/Terms'
import InfraStructure from './components/InfraStructure/InfaStructure'
import Reviews from './components/Reviews/Reviews'
import Mortgage from './components/Mortgage/Mortgage'
import Process from './components/Process/Process'
import Questions from './components/Questions/Questions'
import Others from './components/Others/Others'

const App = () => {
  return (
    <div>

      <Navbar />
      <Header/>
      <Navbar2/>
      <Club/>
      <PhotoGalery/>
      <Apartment/>
      <Terms/>
      <InfraStructure/> 
       <Reviews/>
      <Mortgage/>
      <Process/>
      <Questions/> 
      <Others/>
      <Footer/>
    </div>
  )
}

export default App