import React from 'react'
import './App.css'
import  Card  from './components/Card/Card'
import  Navbar from "./components/Header/Header"
import  Hero  from './components/Hero/Hero'
import data from "./data"

function App() {
  
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
        />
    )
  })

  return (
        <>
        <Navbar />
        <Hero />
        <section className="cards-list">
                {cards}
        </section>
        </>
  )
}

export default App
