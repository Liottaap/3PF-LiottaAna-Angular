import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";


export interface CounterState{
    count: number
}

const initialState : CounterState = {
    count: 0
}
export const counterReducer = createReducer<CounterState>(initialState, 
    /* Cuando la accion sea incrementar, se ejecuta: */
    on(increment, (state) => {
        //Retornamos un nuevo estado
        return {
            count: state.count + 1  
        }
    }),
    on(decrement, (state) => {
        return{
            count: state.count - 1
        }
    })
)