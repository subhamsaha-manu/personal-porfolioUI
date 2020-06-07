import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from './models/User';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8080/getName';

interface ResponsePayLoad{
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

   getUserDetails(){
    let email = 'subhamsaha90@gmail.com';
    let params = new HttpParams();
    params.append('email','subhamsaha90@gmail.com');
    console.log("Params ",params);
    return this.httpClient.get<ResponsePayLoad>("http://localhost:8080/getName?email=subhamsaha90@gmail.com",{responseType:'json'})
    .pipe(
      map(responseData => {
        const user =  responseData.payload;
        console.log("Inside map ",user)
        return user;
      })
    )
   }
}
