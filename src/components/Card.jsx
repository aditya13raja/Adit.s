import React from 'react'

export default function Card() {
  return (
    <div className='flex flex-col gap-2 m-2 w-84 items-center p-4 rounded-lg backdrop-blur-sm'>
      <img className='w-80 h-56 object-cover rounded-md' src="https://asphalte.b-cdn.net/Femme/Le%20Trench%20en%20laine/MANTEAU_LONG_PIED-DE-POULE_0196-OPT.jpg?width=2160&quality=65&crop=1914%2C945%2C67%2C238" />
      <p>Brand Name</p>
      <p>Product Name</p>
      <p>Original Price</p>
      <p>Discounted Price</p>
    </div>
  )
}
