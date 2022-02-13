import React,{useReducer} from 'react'
import { TYPES } from '../Actions/contadorActions';
import { contadorInit, contadorInitialState, contadorReducer } from '../Reducers/contadorReducers';

function ContadorMejorado() {
  
  const [state, Dispatch] = useReducer(contadorReducer,contadorInitialState,contadorInit);

  //creamos la funcion reducer
 
  const sumaRedu = () =>Dispatch({type: TYPES.INCREMENT});
  const sumaRedu5 = () =>Dispatch({type: TYPES.INCREMENT_5, payload:5});
  const restaRedu = () =>Dispatch({type: TYPES.DECREMENT});
  const restaRedu5 = () =>Dispatch({type: TYPES.DECREMENT_5, payload:5});
  const reset = () =>Dispatch({type: TYPES.RESET});

  return (
    <div style={{textAlign:"center"}}>
        {/* <h1>Contador con useState</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h3>{contador}</h3> */}

        <br />

        <h1>Contador Mejorado</h1>
        <button onClick={sumaRedu5}>+5</button>
        <button onClick={sumaRedu}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restaRedu}>-</button>
        <button onClick={restaRedu5}>-5</button>
        <h3>{state.contador}</h3>
    </div>
  )
}

export default ContadorMejorado