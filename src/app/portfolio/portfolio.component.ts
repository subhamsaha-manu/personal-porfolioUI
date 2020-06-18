import { Component, OnInit,Inject } from '@angular/core';
import { User } from '../models/User';
import { DataServiceService } from '../data-service.service';
import { Image } from '../models/Image';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private dataService : DataServiceService,public dialog: MatDialog) { }
  regularDistribution = 100 / 3+'%';
  user : User;
  photos:Image[];

  ngOnInit(): void {
    console.log("OnInit of portfolioComp ");
    this.user = this.dataService.globalUser;
    if(this.user){
      this.photos = this.user.photos;
      console.log("Portfolio component ",this.photos);
    }else{
      console.log("Portfolio component not present ");
    }
    
  }
  openDialog(url:string,title:string) {
    console.log("Image url being passed ",url);
    this.dialog.open(DialogData, {
      data: {
        imageUrl : url,
        imageTitle:title
      }
    });
  }
}


@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog.html',
})

export class DialogData {
 
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {}
}

