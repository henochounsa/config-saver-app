import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ConfigService } from './configs.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Config } from './config.model';

describe('Authservice', () => {
  let configService: ConfigService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService],
    });
    configService = TestBed.inject(ConfigService);
  });
  beforeEach(() => {
    configService = TestBed.inject(ConfigService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Httpclient Post config', () => {
    const testPostData: Config[] = [
      {
        id: 'LST25593228',
        secret: 'FC3CFF2773CCAB3C26F869E248E9C949',
        row: ['LST25593228', 'FC3CFF2773CCAB3C26F869E248E9C949'],
      },
      {
        id: 'LST25593229',
        secret: 'C9B289B39CCC45467DE9514D1135E9C2',
        row: ['LST25593229', 'C9B289B39CCC45467DE9514D1135E9C2'],
      },
      {
        id: 'LST25593230',
        secret: 'A17E6E7D4FC941E15662725A51FC682F',
        row: ['LST25593230', 'A17E6E7D4FC941E15662725A51FC682F'],
      },
      {
        id: 'LST25593231',
        secret: 'AFEFD4FF513BFE5F35548F1E8BCBD427',
        row: ['LST25593231', 'AFEFD4FF513BFE5F35548F1E8BCBD427'],
      },
    ];
    const expectedResult: ArrayBuffer = new ArrayBuffer(4);

    configService.saveConfigs(<[]>testPostData).subscribe((response)=> {
      expect(response).toEqual(expectedResult, 'Expect configs Qr codes encrypted files');
    });

  });
});
