import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('Authservice', () => {
  let authService: AuthService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [AuthService]
    });
    authService = TestBed.inject(AuthService);
  });
  beforeEach(()=>{
    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should download zip file',()=>{
    const testPostData: [] = [
      {id: 'LST25593228', secret: 'FC3CFF2773CCAB3C26F869E248E9C949'},
      {id: 'LST25593229', secret: 'C9B289B39CCC45467DE9514D1135E9C2'},
      {id: 'LST25593230', secret: 'A17E6E7D4FC941E15662725A51FC682F'},
      {id: 'LST25593231', secret: 'AFEFD4FF513BFE5F35548F1E8BCBD427'}
    ];
   

  })
});
