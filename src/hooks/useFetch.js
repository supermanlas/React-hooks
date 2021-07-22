import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef( true );
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => { //Esto es para cuando se ejecuta por primera vez, y se desmonta el useEffect, cambia estado

        return () => {
            isMounted.current = false;
        }

    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null });
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                    if( isMounted.current ){
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }
            })
    },[url]);

    return state;

}
