import React, { useEffect, useState } from 'react';
import '../styles/Memotest.scss';
import { images } from '../info/data';
import signo from '../imagenes/signo.png';
import confetti from 'canvas-confetti';


export const Memotest = () => {

    const [guessed, setGuessed] = useState([])
    const [selected, setSelected] = useState([])


    useEffect(() => {

        if (selected.length == 2) {

            if (selected[0].split('|')[1] == selected[1].split('|')[1]) {

                setGuessed(guessed => guessed.concat(selected));

            }

            setTimeout(() => {
                setSelected([])
            }, 900);
        }
    }, [selected])

    useEffect(() => {

        if (guessed.length == images.length) {
            confetti()
            alert("¡GANASTE!")

            setTimeout(() => {
                location.reload()
            }, 2000);
        }

    }, [guessed])


    return (
        <main className=' vw-100' >
            <section className='section-sup col-md-7 col-sm-11'>
                <h1 >Memo test</h1>
                <p>¡Selecciona un cuadro e intenta encontrar otro igual!</p>
            </section>
            <section className='section-inf col-md-7 col-sm-9  mx-auto '>
                {images.map((image) => {
                    let [, url] = image.split('|')
                    return (
                        <div className='ctn-image mx-auto' key={image} onClick={() => selected.length < 2 && setSelected(selected => selected.concat(image))}>
                            {
                                guessed.includes(image) || selected.includes(image) ?
                                    <div className='img-clicked'>
                                        <img src={url} alt="selected-guessed" />
                                    </div> :
                                    <img src={signo} alt="imagenOculta" />
                            }
                        </div>)

                })}

            </section>
        </main>
    )
}
