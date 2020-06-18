import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '../models/User';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {

  constructor(private dataService : DataServiceService) { }

  user :User;

  title = 'App';

  ngOnInit(): void {
    console.log("OnInit of resumeComp ");
    this.user = this.dataService.globalUser;
    console.log("Resume component ",this.user.firstName);
  }

  }
