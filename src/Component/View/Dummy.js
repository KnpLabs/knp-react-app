import './Dummy.css'
import React from 'react'

export default ({
  dummy,
}) =>
  <p>
    {dummy
      ? "fetching httpbin"
      : "finished fetching httpbin"
    }
  </p>
