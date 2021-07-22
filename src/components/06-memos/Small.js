import React from 'react'
// Aquí se ocupa esta función para evitar que se redibuje el componente a pesar de no haber sufrido cambio alguno
export const Small = React.memo(({ value }) => {

    console.log("Aquí vamos otra vez")

    return (
        <small>{ value }</small>
    )
})
