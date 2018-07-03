import React from 'react'

// Dog :: Props -> React.Component
export default ({
  generateRandomDog,
  image = null,
  isGenerating = false,
}) =>
  isGenerating || !image
    ? <div className="loader">We are loading your dog ...</div>
    : <div className="dog">
          <img className="dog-image" src={image.src} alt={image.alt} />
          <button className="dog-generate" onClick={generateRandomDog}>Generate Dog</button>
      </div>
