import React from 'react'

function Card() {
  let demo: string = 'Machine Chest Press/100Kg/10/14'
  let date: string = '23/23/2004'

  return (
    <div className='h-[200px] w-[275px] bg-slate-300 p-2 rounded-md'>
        <h2 className='mb-3'>{date}</h2>
        <h1 className='mb-2'>{demo}</h1>
        <h1 className='mb-2'>{demo}</h1>
        <h1 className='mb-2'>{demo}</h1>
        <h1 className='mb-2'>{demo}</h1>
    </div>
  )
}

export default Card