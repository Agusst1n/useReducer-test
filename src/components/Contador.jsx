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
  
  const initialState = {contador: 0}; //estado inicial 
  const [state, Dispatch] = useReducer(reducer,initialState);

  //creamos la funcion reducer
  function reducer (state,action){
      switch(action.type){
          case "INCREMENT":
            return {contador:state.contador + 1}
          case "DECREMENT":
            return {contador:state.contador - 1}
          default:
            return state; //esta funcion siempre retorna el estado
      }
  }
  const sumaRedu = () =>Dispatch({type: "INCREMENT"});
  const restaRedu = () =>Dispatch({type: "DECREMENT"});

  return (
    <div style={{textAlign:"center"}}>
        {/* <h1>Contador con useState</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h3>{contador}</h3> */}

        <br />

        <h1>Contador con useReducer</h1>
        <button onClick={sumaRedu}>+</button>
        <button onClick={restaRedu}>-</button>
        <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador