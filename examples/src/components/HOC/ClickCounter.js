import React from 'react'
import WithCounter from './WithCounter'

function ClickCounter({ count, incrementCount }) {
  return <button onClick={incrementCount}>Clicked {count} times</button>;
}
export default WithCounter(ClickCounter);