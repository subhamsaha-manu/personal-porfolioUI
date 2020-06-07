import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {

  constructor(private dataService : DataServiceService) { }

  user : User;

  title = 'App';

  ngOnInit(): void {

      let userObs : Observable<User>;
      userObs = this.dataService.getUserDetails();

      userObs.subscribe(userResponse => {
        console.log("Inside component ",userResponse);
        this.user = userResponse;
      });
    		
  }

  }
