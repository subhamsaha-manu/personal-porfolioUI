import { Component, OnInit,Inject } from '@angular/core';
import { User } from '../models/User';
import { DataServiceService } from '../data-service.service';
import { Image } from '../models/Image';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { trigger, transition, animate, style } from '@angular/animations';
declare var jQuery: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('imagesAppearanceTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ 'opacity': 1 }))
      ])
    ]
    )
  ]
})
export class PortfolioComponent implements OnInit {

  constructor(private dataService : DataServiceService,public dialog: MatDialog) { }
  regularDistribution = 100 / 3.3+'%';
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
    (function ($) {
      $(document).ready(function() {
          /* Every time the window is scrolled ... */
          $(window).scroll(function() {
        
            /* Check the location of each desired element */
            $('.image-card').each(function(i) {
        
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
        
              /* If the object is completely visible in the window, fade it it */
              if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                  'opacity': '1'
                }, 500);
              }
        
            });

            $('.image').each(function(i) {
        
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
        
              /* If the object is completely visible in the window, fade it it */
              if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                  'opacity': '1'
                }, 500);
              }
        
            });
            //console.log($(window).scrollTop());
          });
        });
    })(jQuery);
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

