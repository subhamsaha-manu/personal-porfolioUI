import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '../models/User';
import { trigger, transition, animate, style } from '@angular/animations';
declare var jQuery: any;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('containerAppearanceTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 }))
      ])
    ]

    )
  ]
})
export class ResumeComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  user: User;

  title = 'App';

  ngOnInit(): void {
    console.log("OnInit of resumeComp ");
    this.user = this.dataService.globalUser;
    console.log("Resume component ", this.user.firstName);


    (function ($) {
      $(document).ready(function() {
       
          /* Every time the window is scrolled ... */
          $(window).scroll(function() {
        
            /* Check the location of each desired element */
            $('.hiddenCard').each(function(i) {
        
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
          setInterval(function(){
            //console.log("Interval");
            if($(window).scrollTop() == 0){
             $('.hiddenCard').each(function(i) {
               //console.log("Worked");
               $(this).css('opacity',0);
             })
             }},2000);
        });
    })(jQuery);
  }
}

