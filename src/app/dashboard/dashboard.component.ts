import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { User } from '../models/User';
import { DataServiceService } from '../data-service.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {
    'class': 'router-flex'
  },
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('containerAppearanceTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 }))
      ])
    ]

    )
  ]
})
export class DashboardComponent implements OnInit {
  start: boolean = false
  name : string;
  user :User;
  title:string = "Fullstack Developer. Occasional Photographer"
  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
    
   
    setTimeout(() =>{
      this.user = this.dataService.globalUser;
      this.name = this.user.firstName+ " "+this.user.lastName;
      this.start = true
    }, 3000)
  }
}
