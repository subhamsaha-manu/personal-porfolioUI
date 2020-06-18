import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { User } from './models/User';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'portfolioUIApp';
 
  constructor(private dataService : DataServiceService){

  }
  ngOnInit(){
    console.log("OnInit of appComp ");
    this.dataService.getUserDetails();
  }
}
