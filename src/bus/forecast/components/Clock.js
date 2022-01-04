import React, { useState, useEffect } from 'react'

export const Clock = () => {
  const [clock, setClock] = useState();
  
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      setClock(date.toLocaleTimeString())
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <h2>{clock}</h2>
}
