import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter2'
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {
    //Se extraen los valores desde el customHook useCounter
    const { counter, increment } = useCounter( 10 );
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize: <Small value={ counter }/></h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn brn-outline-primary ml-3"
                onClick={() => {
                    setShow( !show )
                }}
            >
                Show/Hide { JSON.stringify( show )}
            </button>

        </div>
    )
}
