import React from 'react'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
    <div className='h-screen'>
      <img 
        className='h-screen object-cover w-full -my-16 -z-10'
        src="https://asphalte.b-cdn.net/Femme/Le%20Trench%20en%20laine/MANTEAU_LONG_PIED-DE-POULE_0196-OPT.jpg?width=2160&quality=65&crop=1914%2C945%2C67%2C238"/>
      
    </div>
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </>
  )
}
