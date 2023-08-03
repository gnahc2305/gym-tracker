import React from 'react'

function Card() {
  let demo: string = 'Machine Chest Press/100Kg/10/14'
  let date: string = '23/23/2004'

  return (
    <div className='h-[300px] w-[300px] bg-slate-300 p-4'>
        <h2 className='mb-3'>{date}</h2>
        <h1 className='mb-2'>{demo}</h1>
        <h1 className='mb-2'>{demo}</h1>
        <h1 className='mb-2'>{demo}</h1>
        <h1 className='mb-2'>{demo}</h1>
    </div>
  )
}

export default Card