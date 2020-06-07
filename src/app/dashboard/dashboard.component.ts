import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

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
  title:string = "Fullstack developer";
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)
  }
}
