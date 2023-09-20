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
      <br/>
      <h1>Photography</h1>
      <p>Photography is a nice side hobby of mine. I generally do landscape or nature photography, but portait photography is something I want to try. Sadly, it'a something that I don't have a lot of time for, but I try to make the most of it when I do. I shoot with a Cannon Rebel T8i for most pictures you'll see here, but some may be take either with a Cannon T6, iPhone 7, or iPhone 13 Pro. </p>
      <p>This is a small subset of the photos I have taken, so if you'd like to see more, go <a id="links" href="https://photos.app.goo.gl/pYjoG73f0xN4Y2By1">here to check out some more pictures!</a> </p>

      <div class="pictures-container">
        {proxieImages.map((image, index) => (
          <img src={image} alt={`image-${index}`} onClick={() =>openImage(highResImages[index])} /> 
        ))}
      </div> 
    </div>
  );
}
  
export default ImageGallery;