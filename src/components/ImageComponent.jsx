import { useEffect, useState } from "react";
import { Blurhash } from 'react-blurhash';


const ImageComponent = ({ src, width, height, className }) => {

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])


    return (
        <>
            <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
                <Blurhash
                    hash="LqLNiJxuXSxt~WxuR*WARjWBRjt7"
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>

            <img
                src={src}
                alt="img"
                width={width}
                height={height}
                className={className}
                style={{ display : !imageLoaded ? 'none' : 'inline'}}
            />

        </>
    )
}

export default ImageComponent