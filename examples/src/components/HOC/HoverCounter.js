import React from 'react'
import WithCounter from './WithCounter'

function HoverCounter({count, incrementCount}) {
  return (
    <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
  )
}
export default WithCounter(HoverCounter)
