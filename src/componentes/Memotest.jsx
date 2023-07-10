import React, { useEffect, useState } from 'react'
import '../styles/Memotest.css'
import { images } from '../info/data'
import confetti from 'canvas-confetti';


let imagenOculta = 'https://icongr.am/octicons/eye.svg?size=128&color=currentColor'

export const Memotest = () => {

    const [guessed, setGuessed] = useState([])
    const [selected, setSelected] = useState([])
    

    useEffect(() => {
      
        if(selected.length == 2){

            if(selected[0].split('|')[1] == selected[1].split('|')[1]){

                setGuessed(guessed => guessed.concat(selected))
            }

            setTimeout(() => {
                setSelected([])
            }, 1000);
        }
    }, [selected])
    
    useEffect(() => {
      
        if(guessed.length == images.length){
            confetti()
            alert('ganaste')
           setTimeout(() => {
               location.reload()
           }, 3000);
        }
    
    }, [guessed])
    

    return (
        <section>

            {images.map((image) => {

                let [, url] = image.split('|')

                return (
                    <div className='ctn-image' key={image} onClick={()=> selected.length < 2 && setSelected(selected => selected.concat(image))}>
                        {
                            guessed.includes(image) || selected.includes(image) ?
                                <img src={url} alt="selected-guessed" /> :
                                <img src={imagenOculta} alt="imagenOculta" />
                        }
                    </div>)

            })}

        </section>
    )
}
