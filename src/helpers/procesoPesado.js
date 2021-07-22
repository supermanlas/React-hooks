// Esto no hace nada más que consumir la Ram
export const procesoPesado = ( iteraciones ) => {

    for( let i = 0; i< iteraciones; i++ ){
        console.log('Yajuuuu');
    }

    return `${ iteraciones } iteraciones realizadas`;

}