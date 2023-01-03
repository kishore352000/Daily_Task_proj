import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url="http://localhost:3000/Users";

  constructor(private http:HttpClient ) {}


  getAllUsers(){
    return [
      {id:1001,name:'kishore',city:'GUNTUR', salary:5000, dob:new Date("03/21/2000")},
    {id:1002,name:'deepu',city:'VIJAYAWADA', salary:8000, dob:new Date("03/05/2001")},
    {id:1003,name:'joshi',city:'HYDERABAD', salary:20000, dob:new Date("12/15/2002")},
    {id:1004,name:'kiran',city:'MUMBAi', salary:30000, dob:new Date("01/28/1998")}
    ];
  }

  getUsers(){
    return this.http.get(this.url);
  }

  
}
