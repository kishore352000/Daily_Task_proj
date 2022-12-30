import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
username:any;

  Title:string="Data Binding-Interpolation";
  imgUrl:string="assets/photo2.jpg";
  btnStatus:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
 
  titleChange(){
    this.Title="Event Binding";
  }

}
