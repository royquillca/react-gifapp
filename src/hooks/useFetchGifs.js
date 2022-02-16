/**Los hooks son funciones  */

import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // solo se ejecuta el codigo cuando es renderizado por primera vez
    
    useEffect(() => {
        getGifs( category )
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            })
    }, [ category ]);

    return state; // { data: [], loading: true }
}