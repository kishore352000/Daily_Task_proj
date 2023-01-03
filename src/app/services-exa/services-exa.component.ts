import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-services-exa',
  templateUrl: './services-exa.component.html',
  styleUrls: ['./services-exa.component.css']
})
export class ServicesExaComponent implements OnInit {

  Data: any[] = [];

  constructor(private service:UsersService) { }

  ngOnInit():void{
    this.Data=this.service.getAllUsers();
  }

}
