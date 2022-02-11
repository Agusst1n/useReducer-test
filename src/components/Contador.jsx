import React,{useState,useReducer} from 'react'

function Contador() {
  
//   const [contador, setContador] = useState(0)
//   const suma = () => {
//       setContador(contador + 1);
//   }
//   const resta = () =>{
//       if(contador > 0){
//         setContador(contador - 1);
//       }
//   }
  

  const TYPES={
      INCREMENT:"INCREMENT",
      INCREMENT_5:"INCREMENT_5",
      DECREMENT:"DECREMENT",
      DECREMENT_5:"DECREMENT_5",
      RESET:"RESET"
  }

  const initialState = {contador: 0}; //estado inicial 
  const [state, Dispatch] = useReducer(reducer,initialState);

  //creamos la funcion reducer
  function reducer (state,action){
      switch(action.type){
          case TYPES.INCREMENT:
            return {contador:state.contador + 1}
          case TYPES.INCREMENT_5:
            return {contador:state.contador + action.payload}
          case TYPES.DECREMENT:
            return {contador:state.contador - 1}
          case TYPES.DECREMENT_5:
            return {contador:state.contador - action.payload}
          case TYPES.RESET:
                return initialState
          default:
            return state; //esta funcion siempre retorna el estado
      }
  }
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

        <h1>Contador con useReducer</h1>
        <button onClick={sumaRedu5}>+5</button>
        <button onClick={sumaRedu}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restaRedu}>-</button>
        <button onClick={restaRedu5}>-5</button>
        <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador