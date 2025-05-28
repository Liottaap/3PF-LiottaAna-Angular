import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Curso } from "../models/curso.model";

export const cursosActions = createActionGroup({
    source: 'Cursos',
    events: {
        'Load Courses': emptyProps(),
        'Load failure': props<{error: string}>(),
        'LoadSuccess': props<{ cursos: Curso[] }>(),
        'Load by id': props<{id:string}>()

    }
})