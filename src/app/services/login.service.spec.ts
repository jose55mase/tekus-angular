import { TestBed,getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { SuscriberGetModel } from '../models/suscriber.model';

describe('loginService',()=> { 

    let injector: TestBed;
    let httMock: HttpTestingController;

    beforeEach(()=> {
        TestBed.configureTestingModule(
            {
                imports: [
                    HttpClientTestingModule
                ]
            }
        )
        injector = getTestBed();
        httMock = injector.get(HttpTestingController)
    })
    afterEach(()=>{
        httMock.verify()
    })

    beforeEach( ()=> TestBed.configureTestingModule({ }) );

    it('Debe crear servicio', ( )=> {
        const service: LoginService = TestBed.get(LoginService);
        expect(service).toBeTruthy();
    })

    fit('Retorna un Observable<SuscriberGetModel>', ( )=> {
        const service: LoginService = TestBed.get(LoginService);
        let suscribeMock: String = "";
        service.loginToken({
            "UserName": "patata",
            "Password": "MrPotat0"
        }).subscribe( 
            (response) => {
                expect(response.Token.length).toBe(10)
            }
        )
    })

 })