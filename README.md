# PortfolioUIApp

This project was developed using Angular 9.x. It is my personal website which uses Angular, Spring Boot and MongoDB.
The backend developed in Spring Boot is also a github project in the following location :-
https://github.com/subhamsaha-manu/personal-portfolio

# Salient Features :-

1.This project extensively uses Angular Flex Layout to give it a responsive feel in both Laptop and Mobile Devices. Apart from it also uses Angular Material Design components for     displaying the various entities used throughout the project.

2. The Contact Me section makes use of angular social module to fetch login information like ( Email, First Name and Last Name) from Facebook and Google. This is done through OAuth 2.0 features.

3. I have also made use of Angular animations to bring a fluid design and flow while the various components are loaded.

4. Apart from these, I have made use of Router Outlet to perform routing across various components, the Reactive Form module to create the contact me form, Http Client Module to fetch data through REST call from the backend server hosted as a Heroku App.

5. As this website has no hard coded data, and fetches everything from a database, the same website can be easily prepared for others just by updating the data in the database.

6. The Live app is hosted on Heroku at the following url :-

https://subham-sportfolio.herokuapp.com

# Local deployment :-

1. Checkout the code from develop branch. The master branch has been kept as a template for future angular apps.
2. Run the command npm install to download all the relevant dependencies mentioned in the package.json file.
3. Change the API_URL in data-service.service.ts file to https://my-personal-porfolio-app.herokuapp.com/
4. Run the command ng serve to deploy the app locally at localhost:4200. The Facebook and Google app keys provided for fetching the data from them respectively is registered for a valid url and redirect url to localhost:4200. Thus deploying in any other port won't allow the OAuth feature to work.

For any queries or issues feel free to contact at :-
subhamsaha90@gmail.com
