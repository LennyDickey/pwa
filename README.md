# Sailor Moon Ecom with JWT Authentication

This project includes Home page with slider images, Product page that allows the user to filter by product type and price, Contact page with form, Footer with social media links, Backend API server and database server, Responsivepages for various device types and Accessibility and security. a MYSQL database is designed and deployed on desktops to accommodate the ecommerce database. The ecommerce database is comprised of 3 tables, storing information product, pricing, and contacts.

## Heroku Link

https://project5sailormoon.herokuapp.com

![Image of LightHouse](https://imgur.com/TCgpbJk)


### Prerequisites

What things you need to install the software:

VSCODE

## Running the tests

Saying "npm test" will run a;; tests.

### Break down into tests

These tests check if the servers are working.

```
describe('Test for "/" api endpoint', () => {
     it("/ should send back 200 status code and atleast 1 product", done => {
       chai
         .request(app)
         .get("/product")
        .end((error, response) => {
           console.log("response - ", response.body);
           expect(response.body.length > 0).equal(true);
           expect(response.status).equal(200);
          done();
        });
     });
   });
```

## Deployment

"npm run start" will deploy site

## Built With

- React
- NodeJS + Express + Mongoose party in the back
- React Router 4.\*
- JSON Web Token authentication

## Authors

- **Lenny Dickey** - _Initial work_ - [LennyDickey](https://github.com/LennyDickey)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- This site was insipred by Sailor Moon.

### Installation + Development

1. `git clone` this repository to your local machine.

2. run `npm install` from the cloned repo directory.

3. create a `.env` file at the root of the application, adjacent to `server.js`.

   _The only environment variable you **have** to declare in development is `JWT_SECRET`_

   In the `.env` file, you can declare the following environment variables: `JWT_SECRET`, `MONGODB_URI`, and `PORT`. For example:

   ```
   JWT_SECRET=BOOOOOOOOOOOOOM
   MONGODB_URI=mongodb://localhost/react-express-jwt
   PORT=3001
   ```

4) It's recommended that you run the api server on port 3001 while developing locally, as the client app will default to port 3000.
5) Make sure `mongod` is running by running… ahem… `mongod`
6) From that point you can run the api server either by using `nodemon` or just running `node server.js`
7) Now for the client application. `cd client`
8) Install the client app's dependencies with `npm install`
9) From the client directory, run `npm start` to boot up the client application.
10) $$
    $$
