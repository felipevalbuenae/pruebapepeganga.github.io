import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  usersUrl = "https://dummyapi.io/data/api/user?limit=10";
  users:any;
  constructor(private http: HttpClient) { }
  getUsers(){
    var httpHeaders = new HttpHeaders({'app-id':'5f4e7d975eff27152d2c3e9b'})
    return this.http.get<any>(this.usersUrl,{headers: httpHeaders})
  }
}
