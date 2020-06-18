import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators,FormGroupDirective,NgForm} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import {MatSnackBar} from '@angular/material/snack-bar';
import { ContactMeForm } from '../models/ContactMeForm';
import { DataServiceService, ResponsePayLoad } from '../data-service.service';
import { Observable } from 'rxjs/Observable';

/** Error when invalid control is dirty, touched, or submitted. */
class EmailValidityMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactMeForm : FormGroup;
  user: SocialUser;
  loggedIn:boolean=false;
  constructor(private httpClient: HttpClient,
              private authService: SocialAuthService,
              private _snackBar: MatSnackBar,
              private dataService: DataServiceService) { }  
  
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/photo/get/' + "001")
      .subscribe(
        res => {
          console.log("Photo Response ",res);
        }
      );
  }

  
  ngOnInit(){
    this.contactMeForm =  new FormGroup({
      'firstName':new FormControl(null,[Validators.required]),
      'lastName':new FormControl(null,[Validators.required]),
      'mobileNumber':new FormControl(null,[Validators.required,Validators.pattern("[0-9]{10}$")]),
      'email':new FormControl(null,[Validators.email,Validators.required]),
  });
 }

 signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    this.contactMeForm.patchValue(
      {
        firstName : user.firstName,
        lastName : user.lastName,
        email : user.email
      });
  });
}
signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    this.contactMeForm.patchValue(
      {
        firstName : user.firstName,
        lastName : user.lastName,
        email : user.email
      });
  });
}

@ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
 onSubmit(){
   console.log("onSubmit called ");
  const userForm = new ContactMeForm(
    this.contactMeForm.value.email,
    this.contactMeForm.value.firstName,
    this.contactMeForm.value.lastName,
    +this.contactMeForm.value.mobileNumber        
    )

    let authObs : Observable<ResponsePayLoad>;
    authObs = this.dataService.sendMail(userForm);

    authObs.subscribe(resData =>{
      console.log("Mail sent successfully ",resData.status);
      this.openSnackBar("Thank You..!!",":)");
    },err =>{
      console.log("Mail sending failed ",err);
      this.openSnackBar("Mail could not be sent.Kindly try again ",":(");
    })
  this.formDirective.resetForm();
  this.loggedIn = false;
}


 matcher = new EmailValidityMatcher();


 openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 4000,
  });
  }
}

