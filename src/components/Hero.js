import React from 'react'

function Hero({heroName}) {
    if(heroName === 'joker') {
        throw new Error('this is no ones hero')
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero