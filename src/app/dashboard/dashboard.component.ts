import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { User } from '../models/User';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {
    'class': 'router-flex'
  },
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  start: boolean = false
  name : string;
  user :User;
  title:string = "Fullstack Developer. Occsional Photographer"
  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
    
   
    setTimeout(() =>{
      this.user = this.dataService.globalUser;
      this.name = this.user.firstName+ " "+this.user.lastName;
      this.start = true
    }, 3000)
  }
}
