import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter2'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` )

    const { quote } = !!data && data[0]; // El !! indica que si el valor es null, es false. si fuera !data, indicaría que el valor es true
    
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    },[quote])
    
    // useEffect(() => {
    // }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag}
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                {JSON.stringify( boxSize, null, 3 )}
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>




        </div>
    )
}
