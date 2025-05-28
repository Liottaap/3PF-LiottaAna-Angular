import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CURSOS_FEATURE_KEY, CursosState } from "./cursos.reducer";



export const selectCursosState = createFeatureSelector<CursosState>(CURSOS_FEATURE_KEY)

export const selectCursosList = createSelector(selectCursosState, (state) => state.cursos)

export const selectCursosLoading = createSelector(selectCursosState, (state) => state.loading)

export const selectCursosError = createSelector(selectCursosState, (state) => state.error)

