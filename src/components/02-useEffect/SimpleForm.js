import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect( () => { // Se ejecuta solo cuando se carga la página
        
    }, []);

    useEffect( () => {
        // console.log('formState cambió'); // Se ejecuta solo cuando cambia el formState
    }, [formState]);

    useEffect( () => {
        // console.log('email cambió'); // Se ejecuta solo cuando el email cambió
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>   
            <hr />
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={handleInputChange}
                />

            </div>
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={handleInputChange}
                />

            </div>

            { (name === '123') && <Message /> }
        </>
    )
}
