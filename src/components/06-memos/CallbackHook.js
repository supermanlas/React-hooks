import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }
    // Este regresará una versión memorizzada de esta función, que servirá como argumentos
    // en otros lugares, React sabrá que no ha cambiado, si la dependencia no lo ha
    // hecho
    const increment = useCallback( (num) => {
        setCounter( c => c + num ); //Colocamos esto, porque si el counter se coloca como dependencia, se ejecutaría nuevamente el comoponente
    }, [ setCounter ])

    //Si colocáramos la función como dependencia, si no se ocupa el useCallback, 
    //se ejecutaría nuevamente el useEffect porque la función se crearía nuevamente
    useEffect( () => {
        //?????
    }, [increment])

    return (
        <div>
            <h1>useCallBackHook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
