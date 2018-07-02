import './Dummy.css'
import React from 'react'

export default ({
  dummy,
}) =>
  console.log(dummy) ||
  dummy
    ? "Dummy is ON"
    : "Dummy is OFF"
