# Bushwick-Bar

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Bushwick Bar** is a full-stack web application where any member can openly craft their very own drink. From a virgin margarita, to a "Mr.Chow"("The Hangover" Movie Reference) blackout cocktail, the possibilites are ENDLESS. Craft your very own and head on out to the dancefloor!_


<br>

## MVP

- Front end built with ReactJS
	- 8+ separate components
	- Utilize React Router
	- Integrate with a Ruby on Rails Backend
	- Full CRUD on Ingredients
- RESTful JSON API built with Ruby on Rails
	- At least 1 association between tables
	- Full CRUD on the ingredients table
  - A database of 2+ tables
- Style with flexbox/grid
- Implement responsive design

<br>

### Goals

- _Build a database of Users, Cocktails, and Ingredients_
- _Allow a user to view all crafted Cocktails._
- _Allow a user to add, edit, and delete their own Cocktails._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end framework using javascript._ |
|   React Router   | _Used for routing through React components._ |
|   Ruby on Rails  | _Back-end framework for creating JSON API._ |
|      Axios       | _Used for making front-end API calls._ |
|      BCYRPT      | _Used for password hashing._ |
|      Rack-CORS   | _Ruby on Rails Cross-Origin Resource Sharing (CORS)._ |
|       JWT        | _Compact URL-safe means of representing claims to be transferred between two parties._ |

<br>

### Client (Front End)

#### Wireframes

[Figma](https://www.figma.com/file/Mp9xvtITffV30SWTc5efGB/Bushwick-Bar?node-id=0%3A1)

- Home

![Home](https://i.imgur.com/GlSoGuA.png)

- SignIn

![SignIn](https://i.imgur.com/2kQaKKy.png)

- SignUp

![SignUp](https://i.imgur.com/N9jmzZd.png)

- UserHome

![UserHome](https://i.imgur.com/nXXqnSs.png)

- Ingredients

![Ingredients](https://i.imgur.com/Depm58D.png)

- Cocktails

![Cocktails](https://i.imgur.com/nhnUjYQ.png)

- CreateCocktail

![CreateCocktail](https://i.imgur.com/uxzM24X.png)

- EditCocktail

![EditCocktail](https://i.imgur.com/zbWMkht.png)

- DetailCocktail

![DetailCocktail](https://i.imgur.com/ef2mZ1T.png)



#### Component Hierarchy

[Whimsical](https://whimsical.com/3cE76w9wo4cfYch8hSnULA)
[Component Hierarchy](https://i.imgur.com/1LcZdfA.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Layout
            |__ Layout.css
            |__ Layout.jsx
      |__ Nav
            |__ Nav.css
            |__ Nav.jsx
      |__ Footer
            |__ Footer.css
            |__ Footer.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Home
            |__ Home.css
            |__ Home.jsx
      |__ SignIn
            |__ SignIn.css
            |__ SignIn.jsx
      |__ SignOut
            |__ SignOut.css
            |__ SignOut.jsx
      |__ UserHome
            |__ UserHome.css
            |__ UserHome.jsx
      |__ Ingredients
            |__ Ingredients.css
            |__ Ingredients.jsx
      |__ Cocktails
            |__ Cocktails.css
            |__ Cocktails.jsx
      |__ CreateCocktail
            |__ CreateCocktail.css
            |__ CreateCocktail.jsx
      |__ EditCocktail
            |__ EditCocktail.css
            |__ EditCocktail.jsx
      |__ DetailCocktail
            |__ DetailCocktail.css
            |__ DetailCocktail.jsx
|__ services/
      |__ apiConfig.jsx
      |__ auth.jsx
      |__ Cocktails.jsx

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/6jAaPeA.png)
<br>

***

## Post-MVP

- Implement ratings system where a user can rate others cocktails.
- Be able to send user-made cocktails to surrounding bars via a google maps api for pickup or possibly even delivery.


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.