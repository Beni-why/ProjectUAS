import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { from, Observable } from 'rxjs';  
import {HttpHeaders} from '@angular/common/http';  
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string;
  token : string; 
  header: any;
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { 
    this.apiUrl='http://localhost/rest-api/index.php/login/';
    const headerSettings: {[name: string]: string | string[]; } = {};  
      this.header = new HttpHeaders(headerSettings);  
  }
  Login(model : any){  
    
     var a =this.apiUrl+'UserLogin';  
   return this.http.post<any>(this.apiUrl+'UserLogin',model,{ headers: this.header});  
  }  
    
  baca()
  {
    return this.http.get(this.apiUrl+'data');
  }
  login(data)
  {
    return this.http.post(this.apiUrl+'data',data);
  }
}
