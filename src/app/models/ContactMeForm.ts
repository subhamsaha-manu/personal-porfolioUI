export class ContactMeForm{

    constructor(
        private _email : string,
        private _firstName : string,
        private _lastName : string,
        private _mobileNumber : number
    ){}

    get email():String{
        return this._email;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get mobileNumber(){
        return this._mobileNumber;
    }
    
}