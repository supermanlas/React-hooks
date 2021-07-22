import React from 'react'
import PropTypes from 'prop-types'

// este componente se ejecuta nuevamente porque la función que se envía, a pesar de ser la misma, en realidad para React es una distinta, por lo que reconoce que fuera un valor diferente
// Es necesario colocar "React.memo", si no no funciona el useCallback
export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Vamos allá');
    return (
        <button
            className="btn btn-primary"
            onClick= {() => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
}
