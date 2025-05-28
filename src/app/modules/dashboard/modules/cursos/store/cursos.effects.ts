import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { cursosActions } from "./cursos.actions";
import { concatMap, map, catchError, of } from "rxjs";
import { CursosService } from "../cursos.service";


@Injectable()

export class CursosEffects {
    loadOrders$;

    constructor(private actions$: Actions, private cursosService: CursosService) {
    this.loadOrders$ = createEffect(() => {
        return this.actions$.pipe(
        // Interceptar la acción
        ofType(cursosActions.loadCourses),
        // Después de interceptar la acción, ejecutar el servicio para obtener los pedidos
        concatMap(() =>
            this.cursosService.getCursos().pipe(
            // Mapear la respuesta
            map((cursos) => cursosActions.loadSuccess({ cursos })),
            // Manejar errores
            catchError((error) =>
                of(cursosActions.loadFailure({ error: error.message }))
            )
        )
        )
        );
    });
    }
}