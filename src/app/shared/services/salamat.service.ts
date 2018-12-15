import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};

@Injectable()
export class SalamatService {
  serverUrl: string = 'http://itsalamat.waspar.ir/api/';

  constructor(private http: HttpClient) {
  }

  Login(loginForm: any) {
    return this.http.post(this.serverUrl + 'admin/login', loginForm, httpOptions);
  }

}


