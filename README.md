# JS_Advanced_SinlePageApplicationsExercise_Movies
 This is a SoftUni task Movies from single page applications exercises. The app keeps users and movies. Logged-in users should be able to view add movies and like movies. Logged-in users should also be able to edit or delete the movies they have added. 
 
 ## Functionality:


###### 1- Navigation bar:

    •	Clicking on the links in the NavBar should display the view behind the navigation link.
    •	The Logged-in user navbar should contain the following elements:[Movies] a link to the Home page, the user caption ("Welcome, {email}"), [Logout]. Each link    navigates to the named page.
    •	The guest users navbar should contain the following elements: : [Movies] which is a link to the Home page and [Login], [Register].



###### 2- Register user: [To do...]

By given email and password, the app should register a new user in the system.

•	The following validations should be made:

    o	The email input must be filled
    o	The password should be at least 6 characters long
    o	The repeat password should be equal to the password
    
•	After a successful registration the app should redirect to the home page with the right navbar.

•	In case of error (eg. invalid username/password), an appropriate error message should be displayed, and the user should be able to try to register again.

•	Keep the user data in the browser's session or local storage. 

•	After a successful registration redirect to Home page.



###### **3- Loggin user:** 

By given username and password, the app should login an existing user.

•	After a successful login the user home page should be displayed.

•	In case of error, an appropriate error message should be displayed and the user should be able to fill in the login form again.

•	Keep the user data in the browser's session or locale storage. 

•	After a successful login redirect to Home page.



###### 4- Logout:

Successfully logged in users should be able to logout from the app.

•	After a successful logout the anonymous screen should be shown

•	The "logout" REST service at the back-end  must be called at logout

•	All local information in the browser (user session data) about the current user should be deleted

•	After a successful logout redirect to Login page.



###### 5- Home Page:

• Users can see all movies, add movie button and details button for each movie;

• Guests can see only the movies.



###### 6- Add movie:

Logged-in users should be able to add movie. Clicking the [Add Movie] button in the Home page should display the Add Movie page.

•	The form should contain the following validations:

    o	The title, description and image shouldn’t be empty.
    
    o	After a successful movie adding the Home page should be shown. 

 
###### 7- Movie details:

Logged-in users should be able to view details about movies. 

Clicking the [Details] button of a particular movie should display the Movie Details page.

•	If the currently logged-in user is the creator of the movie, the [Delete] and [Edit] buttons should be shown, otherwise show the [Like] button.

•	When displaying the number of likes a movies has, make sure to only count each user once!


###### 8- Like movie:
Logged-in users should be able to like movie, added by other user.

**A user should NOT be able to like a movie, created by himself.**

Clicking the [Like] button of an movie (on the Movie Details page) should make a POST request to the following URL: http://localhost:3030/data/likes  with body { movieId: id } ( id – this is the id to the current movie ) . After successfully like:

•	[Like] button changes to [Liked {number of likes}] span so users can‘t like a movie multiple times.

###### 9- Edit movie:
Logged-in users should be able to delete their movies. After successful movie delete the Home page should be shown.

###### 10- Delete movie: TO DO!!
