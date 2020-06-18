import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from './models/User';
import { map } from 'rxjs/operators';
import { ContactMeForm } from './models/ContactMeForm';

const API_URL_LOCAL = 'http://localhost:8080/user/';
const API_URL_GLOBAL = 'https://my-personal-porfolio-app.herokuapp.com/user/';

export interface ResponsePayLoad{
  payload : User;
  status : string;
  error : string;
}



@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  
  constructor(private httpClient : HttpClient) {
    
   }

   globalUser :User;
   getUserDetails(){
    let email = 'subhamsaha90@gmail.com';
    let params = new HttpParams();
    params.append('email','subhamsaha90@gmail.com');
    console.log("Params ",params);
    return this.httpClient.get<ResponsePayLoad>(API_URL_GLOBAL+"getUser?email=subhamsaha90@gmail.com",{responseType:'json'})
    .pipe(
      map(responseData => {
        const user =  responseData.payload;
        console.log("Inside map ",user)
        return user;
      })
    ).subscribe(userResponse =>{
      this.globalUser = userResponse;
    })
   }

   sendMail(contactMeForm : ContactMeForm){
     
    //console.log("Auth Service ",user.value);
     return this.httpClient.post<ResponsePayLoad>(API_URL_GLOBAL + 'sendEmail' , 
     {
      firstName : contactMeForm.firstName,
      lastName : contactMeForm.lastName,
      mobileNumber : contactMeForm.mobileNumber,
      email : contactMeForm.email,
    });
  }
}
