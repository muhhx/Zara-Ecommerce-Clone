<h1>Vanilla E-commerce (2020)</h1>

<h4 align="center">
    <span>Navigation preview:</span>
  <img alt="Readme" title="Readme" src="./github/PREVIEW_NAVIGATION.gif" />
</h4>

You can check all of the screens and gifs with previews by clicking [here](https://github.com/muhhx/Zara-Ecommerce-Clone/tree/master/github)

## About this Project
- **Live website:** <https://zara-ecommerce-clone.netlify.app/>
  
**THIS PROJECT WAS DONE IN 2020, READ THE IMPORTANT OBSERVATIONS**

Project cloning Zara's website interface as well as its ecommerce functionalities, such as authentication and product stock control using JavaScript, React and Firebase as a backend. 

Let's connect on LinkedIn: <https://www.linkedin.com/in/muhhx/>

Send me an email: muriloue@gmail.com

## Important observations
- This was one of my first big projects using react, firebase, that I did back in the beginning of 2020. So there is probably a lot of obvious improvements that I could do here in regards to the whole system, code, user experience, user interface, etc 😁.
- Zara's website identity changed a bit in 2022, so this project is not that identitical anymore.
- The website is not responsive!
- I don't know why, but the option to buy a product stopped working the last time I checked.
- This was a learning project, so feel free to add functionalities and modify the project the way you want!

## Built with
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Built with
- [React](https://reactjs.org/docs/getting-started.html) | React functional components
- [React-Router-Dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview) | Router
- [React Context API](https://reactjs.org/docs/context.html) | Manage simple states
- [Firebase](https://firebase.google.com/docs/build) | Backend functionalities
- [Firebase Storage](https://firebase.google.com/docs/storage) | Image storage
- [Firebase Database](https://firebase.google.com/docs/firestore) | Database
- [Firebase Authentication](https://firebase.google.com/docs/auth) | User authentication

## Main functionalities
- User Authentication (Login, Register and Logout) using Firebase
- Product Stock control (the most interesting functionality in my opinion)
- Cart (add, delete product, increase and decrease quantity)
- Search (search through the products)
- Add product to your list of favorites
- Admin: Create, Delete and update product

## Install
In order to run this project locally, you will need your Firebase credentials. It is really important to have Firebase Storage, database and authentication enabled and configured. 

First, clone the project
```
$ git clone https://github.com/muhhx/Zara-Ecommerce-Clone
$ cd zara-ecommerce-clone
```
Then, cd into the firebase config file
```
$ cd src/Config/firebase
```
Change the following data (you can hard code it or put them in environment variables, just make sure to not commit it to github)
```
const firebaseConfig = {
    apiKey: YOUR DATA,
    authDomain: YOUR DATA,
    projectId: YOUR DATA,
    storageBucket: YOUR DATA,
    messagingSenderId: YOUR DATA,
    appId: YOUR DATA
};
```
Run locally
```
$ npm run dev
```


<h4 align="center">Murilo Santos, 2020.✨™</h4>