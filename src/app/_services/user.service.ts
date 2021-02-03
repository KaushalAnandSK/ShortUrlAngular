import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL='http://localhost:4200/api/test';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  getPublicContent():Observable<any> {
    return this.http.get(API_URL+'all',{responseType:'text'});
  }
  getUserProfile():Observable<any>{
    return this.http.get(API_URL+'user',{responseType:'text'});
  }
  getAdminProfile():Observable<any>{
    return this.http.get(API_URL+'admin',{responseType:'text'});
  }
}

