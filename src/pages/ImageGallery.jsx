import React from "react"

const proxies = require.context('../../public/assets/photography/proxies', true);
const highRes = require.context('../../public/assets/photography/highRes', true);
const proxieImages = proxies.keys().map(image => proxies(image));
const highResImages = highRes.keys().map(image => highRes(image));

function ImageGallery() {
  const openImage = (image) => {
    console.log(image);
    window.open(image);
  }

  return (
    <div>
      <div class="pictures-container">
        {proxieImages.map((image, index) => (
          <img src={image} alt={`image-${index}`} onClick={() =>openImage(highResImages[index])} /> 
        ))}
      </div> 
    </div>
  );
}
  
export default ImageGallery;