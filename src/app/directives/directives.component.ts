import { AnimateTimings } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  username="kishore";
  users:string[]=["kishore","Deepu","Joshi"];


  

  isUserLoggedIn:boolean=true;


  constructor() { }

  ngOnInit(): void {
  }



}
