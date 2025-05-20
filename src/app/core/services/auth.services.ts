import { Injectable } from "@angular/core";
import { User } from "../models";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable, of } from "rxjs";
import { Router } from "@angular/router";


@Injectable({providedIn: 'root'})
export class AuthService{
    /* Propiedad privada */
    private _authUser$ = new BehaviorSubject<User | null>(null)
    /* Propiedad pública */
    authUser$: Observable<User | null> = this._authUser$.asObservable();


    constructor(
        private http:HttpClient,
        private router:Router
    ){}
    login(email: string, password: string): Observable<boolean> {
        return this.http
            .get<User[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
            .pipe(
                map((response) => {
                const user = response[0];
                if (user) {
                localStorage.setItem('token', user.token);
                this._authUser$.next(user);
                return true;
                } else {
                    return false;
                }
            })
        );
    }

    logout():void{
        localStorage.removeItem('token')
        this ._authUser$.next(null);
        this.router.navigate([ '/login' ])
    }

    verifyToken(): Observable<User | boolean>{
        const storedToken = localStorage.getItem('token');
        if(!storedToken) return of (false)

        return this.http.get<User[]>(`http://localhost:3000/users?token=${storedToken}`)
            .pipe(
            map((response) => {
                const user = response[0];
                if(user) {
                    localStorage.setItem('token', user.token)
                    this._authUser$.next(user)
                    return user;
                }else{
                    return false;
                }
            })
        )
        

    }
}
