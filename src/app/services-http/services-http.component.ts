import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-services-http',
  templateUrl: './services-http.component.html',
  styleUrls: ['./services-http.component.css']
})
export class ServicesHttpComponent implements OnInit {

  users:any;
  constructor(private service_http:UsersService, private httpClientModule:HttpClientModule) { }

  ngOnInit(): void {
    this.service_http.getUsers().subscribe((result)=>{
      this.users=result;
     
    });
  }

 
  

}
