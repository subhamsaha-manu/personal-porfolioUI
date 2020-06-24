import { Email } from './Email';
import { Experience } from './Experience';
import { Education } from './Education';
import { Interest } from './Interest';
import { Skill } from './Skill';
import { Image } from './Image';




export class User{

    constructor(
        public firstName: string,
        public middleName : string,
        public lastName : string,
        public emailAddresses : Email[],
        public profilePhotoUrl:string,
        public linkedInId : string,
        public mobileNumber : number,
        public careerObjective : string,
        public workExperience : Experience[],
        public educationQualification : Education[],
        public areasOfInterest : Interest[],
        public skills : Skill[],
        public photos : Image[]
    ){}



        
}