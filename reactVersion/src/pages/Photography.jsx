import { ImageGallery, setPaths } from "../Components/ImageGallery"

const proxyPath = '../../public/assets/photography/proxies';
const highResPath = '../../public/assets/photography/highRes';
export default function Photography_Test(){
    setPaths(proxyPath, highResPath);
    return (
        
        <div>
            <div id="content">
                <br/>
                <h1>Photography</h1>
                <p>Photography is a nice side hobby of mine. I generally do landscape or nature photography, but portait photography is something I want to try. Sadly, it'a something that I don't have a lot of time for, but I try to make the most of it when I do. I shoot with a Cannon Rebel T8i for most pictures you'll see here, but some may be take either with a Cannon T6, iPhone 7, or iPhone 13 Pro. </p>
                <p>This is a small subset of the photos I have taken, so if you'd like to see more, go <a id="links" href="https://photos.app.goo.gl/pYjoG73f0xN4Y2By1">here to check out some more pictures!</a> </p>
            </div>
            <ImageGallery></ImageGallery>
        </div>
    )
}