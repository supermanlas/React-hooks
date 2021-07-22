import React from 'react'
import { useCounter } from '../../hooks/useCounter2'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` )
    // console.log(state)
    const { author, quote } = !!data && data[0]; // El !! indica que si el valor es null, es false. si fuera !data, indicaría que el valor es true
    // console.log(author, quote)
    

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>

                    )
                :
                    (
                        <>
                            <blockquote className="blockquote text-right">
                                <p className="mb-0">{ quote }</p>
                                <footer className="blockquote-footer">{ author }</footer>
                            </blockquote>
                            <button 
                                className="btn btn-primary"
                                onClick={ increment }
                            >
                                Siguiente quote
                            </button>
                        </>
                    )
            }


        </div>
    )
}
