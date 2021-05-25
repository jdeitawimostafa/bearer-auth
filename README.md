# bearer-auth

## LAB - 07
## **Deployment Test**
## **Author: Farah AlWahaibi**
[PR LINK](https://github.com/farahalwahaibi/bearer-auth/pull/1)
[Heroku APP](https://bearer-auth-2021.herokuapp.com/)
[Report Test](https://github.com/farahalwahaibi/bearer-auth/actions)
## **Installation**
* **dependencies :**
  * "@code-fellows/supergoose"
  * "base-64"
  * "bcrypt"
  * "cors"
  * "dotenv"
  * "express"
  * "jsonwebtoken"
  * "mongoose"
  * "morgan"
* **devDependencies :**
  * eslint"
  * "jest"
  * "supertest"
## **Setup**
* .env requirements
  * **PORT** - 3000
  * **MONGOOSE_URI**
  * **SECRET** - used to create jwt
## **Running the app**
* **npm start**
* **Endpoints:**
   * **https://bearer-auth-2021.herokuapp.com/** home route (/)
   * **https://bearer-auth-2021.herokuapp.com/signup** for create (/signup)
   * **https://bearer-auth-2021.herokuapp.com/signin** for login (/signin)
   * **https://bearer-auth-2021.herokuapp.com/users** for get (/users)
   * **https://bearer-auth-2021.herokuapp.com/secret** for get (/secret)
## **Tests**
* **Unit Tests:** npm run test (tests for server, routes, and user model currently implemented):
  * Auth Middleware
    * user authentication
      * ✓ fails a login for a user (admin) with the incorrect basic credentials 
      * ✓ logs in an admin user with the right credentials 
  * Auth Router
    * admin users
      * ✓ can create one 
      * ✓ can signin with basic 
      * ✓ can signin with bearer 
    * bad logins
      * ✓ basic fails with known user and wrong password 
      * ✓ basic fails with unknown user 
      * ✓ bearer fails with an invalid token 
      * ✓ basic fails with known user and wrong password  
      * ✓ basic fails with unknown user 
      * ✓ bearer fails with an invalid token 
      * ✓ basic fails with known user and wrong password  
      * ✓ basic fails with unknown user 
      * ✓ bearer fails with an invalid token 
    * editor users
      * ✓ can create one 
      * ✓ can signin with basic 
      * ✓ can signin with bearer 
    * user users
      * ✓ can create one 
      * ✓ can signin with basic 
      * ✓ can signin with bearer 
  * Auth Middleware
    * user authentication
      * ✓ fails a login for a user (admin) with an incorrect token 
      * ✓ logs in a user with a proper token
* **Lint Tests:** npm run lint
***
## **UML Diagram**
![uml-diagram](1.JPG)
***Thank you!!***
