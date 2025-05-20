import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.services";
import { Router } from "@angular/router";
import { User } from "../models";

describe('AuthService', () => {
    let service: AuthService;
    let httpMock: HttpTestingController;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            AuthService,
            {
            provide: Router,
            useValue: {
                navigate: jasmine.createSpy('navigate')
            }
            }
        ]
        });

        service = TestBed.inject(AuthService);
        httpMock = TestBed.inject(HttpTestingController);
        router = TestBed.inject(Router);
        localStorage.clear()
    });


    it ('Debe realizar el login', () => {
        const email = 'fake@email.com';
        const password = '123456';
      
        const mockResponse: User[] = [
          {
            "id": 1,
            "nombre": "Maria Gimenez",
            "email": "fake@email.com",
            "password": "123456",
            "role": "admin",
            "token": "asdsafdasf1234sd"
          }
        ];
      
        service.login(email, password);
      
        const req = httpMock.expectOne(`http://localhost:3000/users?email=${email}&password=${password}`);
        expect(req.request.method).toBe('GET');
      
        req.flush(mockResponse);
      
        expect(localStorage.getItem('token')).toBe(mockResponse[0].token);
        expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
      });

      it('Debe realizar el logout', ()=>{
        const spyOnNavigate = spyOn(router, 'navigate');
        service.logout()

        expect(localStorage.getItem('token')).toBeNull
        expect(spyOnNavigate).toHaveBeenCalledOnceWith(['/login'])
      })


});      
