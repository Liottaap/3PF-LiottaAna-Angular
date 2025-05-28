import { createFeature, createReducer, on } from "@ngrx/store";
import { cursosActions } from "./cursos.actions";
import { Curso } from "../models/curso.model";


export const CURSOS_FEATURE_KEY = 'cursos'

export interface CursosState{
    cursos: Curso[];
    loading: boolean;
    error: string | null;
}

const initialState: CursosState = {
    cursos: [],
    loading: false,
    error: null
}
const cursosReducer = createReducer(
    initialState,
    on(cursosActions.loadCourses, (state) =>{
        return {
            ...state,
            loading: true,
            error:null
        }
    }),
    /* Carga exitosa */
    on(cursosActions.loadSuccess, (state, action) => {
        return{
            ...state,
            cursos: action.cursos,
            loading: false,
            error: null
        }
    }),
    /* Error */
    on(cursosActions.loadFailure, (state, action) => {
        return{
            ...state,
            loading: false,
            cursos: [],
            error: action.error
        }
    })
)


export const cursosFeature = createFeature({
    name: CURSOS_FEATURE_KEY,
    reducer: cursosReducer
})