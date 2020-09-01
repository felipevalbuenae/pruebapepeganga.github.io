import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  usersUrl = "https://dummyapi.io/data/api/user?limit=10";
  users2Url = "https://jsonplaceholder.typicode.com/users";
  postsUrl = "https://jsonplaceholder.typicode.com/posts";
  users:any;
  constructor(private http: HttpClient) { }
  getUsers(){
    var httpHeaders = new HttpHeaders({'app-id':'5f4e7d975eff27152d2c3e9b'})
    return this.http.get<any>(this.usersUrl,{headers: httpHeaders})
  }

  getUsers2(){
    return this.http.get<any>(this.users2Url)
  }
  getPosts(){
    return this.http.get<any>(this.postsUrl)
  }
  
}
